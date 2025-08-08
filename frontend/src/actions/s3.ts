"use server";

import { PutObjectCommand, S3Client, HeadBucketCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "~/env";
import { auth } from "~/server/auth";
import { v4 as uuidv4 } from "uuid";
import { db } from "~/server/db";

// Debug function to test S3 configuration
export async function testS3Configuration() {
  try {
    console.log("Testing S3 configuration...");
    
    // Check environment variables
    const config = {
      hasAccessKey: !!env.AWS_ACCESS_KEY_ID,
      hasSecretKey: !!env.AWS_SECRET_ACCESS_KEY,
      hasRegion: !!env.AWS_REGION,
      hasBucket: !!env.S3_BUCKET_NAME,
      region: env.AWS_REGION,
      bucket: env.S3_BUCKET_NAME,
    };
    
    console.log("S3 Configuration:", config);
    
    if (!config.hasAccessKey || !config.hasSecretKey || !config.hasRegion || !config.hasBucket) {
      return {
        success: false,
        error: "Missing required environment variables",
        config,
      };
    }
    
    const s3Client = new S3Client({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });
    
    // Test bucket access
    const headCommand = new HeadBucketCommand({
      Bucket: env.S3_BUCKET_NAME,
    });
    
    await s3Client.send(headCommand);
    
    return {
      success: true,
      message: "S3 configuration is valid",
      config,
    };
  } catch (error) {
    console.error("S3 configuration test failed:", error);
    
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      if (error.message.includes("AccessDenied")) {
        errorMessage = "Access denied - check IAM permissions";
      } else if (error.message.includes("NoSuchBucket")) {
        errorMessage = "Bucket does not exist";
      } else if (error.message.includes("InvalidAccessKeyId")) {
        errorMessage = "Invalid access key";
      } else if (error.message.includes("SignatureDoesNotMatch")) {
        errorMessage = "Invalid secret key";
      } else {
        errorMessage = error.message;
      }
    }
    
    return {
      success: false,
      error: errorMessage,
      config: {
        hasAccessKey: !!env.AWS_ACCESS_KEY_ID,
        hasSecretKey: !!env.AWS_SECRET_ACCESS_KEY,
        hasRegion: !!env.AWS_REGION,
        hasBucket: !!env.S3_BUCKET_NAME,
        region: env.AWS_REGION,
        bucket: env.S3_BUCKET_NAME,
      },
    };
  }
}

export async function generateUploadUrl(fileInfo: {
  filename: string;
  contentType: string;
}): Promise<{
  success: boolean;
  signedUrl: string;
  key: string;
  uploadedFileId: string;
}> {
  try {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    // Validate required environment variables
    if (!env.AWS_ACCESS_KEY_ID || !env.AWS_SECRET_ACCESS_KEY || !env.AWS_REGION || !env.S3_BUCKET_NAME) {
      console.error("Missing AWS configuration:", {
        hasAccessKey: !!env.AWS_ACCESS_KEY_ID,
        hasSecretKey: !!env.AWS_SECRET_ACCESS_KEY,
        hasRegion: !!env.AWS_REGION,
        hasBucket: !!env.S3_BUCKET_NAME,
      });
      throw new Error("AWS configuration is incomplete. Please check your environment variables.");
    }

    const s3Client = new S3Client({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const fileExtension = fileInfo.filename.split(".").pop() ?? "";

    const uniqueId = uuidv4();
    const key = `${uniqueId}/original.${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: key,
      ContentType: fileInfo.contentType,
    });

    // Increase expiration time to 30 minutes for larger files
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 1800 });

    const uploadedFileDbRecord = await db.uploadedFile.create({
      data: {
        userId: session.user.id,
        s3Key: key,
        displayName: fileInfo.filename,
        uploaded: false,
      },
      select: {
        id: true,
      },
    });

    return {
      success: true,
      signedUrl,
      key,
      uploadedFileId: uploadedFileDbRecord.id,
    };
  } catch (error) {
    console.error("Error generating upload URL:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("AccessDenied") || error.message.includes("403")) {
        throw new Error("Access denied to S3 bucket. Please check your AWS credentials and bucket permissions.");
      }
      if (error.message.includes("NoSuchBucket")) {
        throw new Error("S3 bucket not found. Please check your bucket name configuration.");
      }
      if (error.message.includes("InvalidAccessKeyId")) {
        throw new Error("Invalid AWS access key. Please check your AWS credentials.");
      }
      if (error.message.includes("SignatureDoesNotMatch")) {
        throw new Error("AWS signature mismatch. Please check your AWS secret key.");
      }
    }
    
    throw new Error("Failed to generate upload URL. Please try again.");
  }
}

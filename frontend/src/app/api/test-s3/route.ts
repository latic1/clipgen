import { NextResponse } from "next/server";
import { testS3Configuration } from "~/actions/s3";

export async function GET() {
  try {
    const result = await testS3Configuration();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error testing S3 configuration:", error);
    return NextResponse.json(
      { success: false, error: "Failed to test S3 configuration" },
      { status: 500 }
    );
  }
} 
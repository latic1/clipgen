# ClipGen - AI-Powered Video Clipping Platform

Transform long videos into viral clips automatically with advanced AI technology.

## 🚀 Features

- **Smart Clip Detection**: AI identifies Q&A moments and compelling stories using Gemini
- **Active Speaker Tracking**: Advanced face detection centers the active speaker for perfect framing
- **Auto Subtitles**: WhisperX transcription with styled ASS subtitles for maximum engagement
- **YouTube URL Support**: Paste YouTube links for server-side processing (no upload needed)
- **Vertical Video Generation**: Creates TikTok/Instagram-style 9:16 clips
- **Cloud Processing**: GPU-accelerated processing using Modal

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **Inngest** - Background job processing

### Backend
- **Python FastAPI** - API server
- **Modal** - Cloud GPU infrastructure
- **WhisperX** - Advanced speech recognition
- **LR-ASD** - Active speaker detection
- **Gemini AI** - Clip moment identification
- **yt-dlp** - YouTube video downloading

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/clipgen.git
   cd clipgen/frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="file:./db.sqlite"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   AWS_ACCESS_KEY_ID="your-aws-key"
   AWS_SECRET_ACCESS_KEY="your-aws-secret"
   AWS_REGION="us-east-1"
   S3_BUCKET_NAME="your-bucket"
   PROCESS_VIDEO_ENDPOINT="your-modal-endpoint"
   PROCESS_VIDEO_ENDPOINT_AUTH="your-auth-token"
   GEMINI_API_KEY="your-gemini-key"
   ```

4. **Set up the database**
   ```bash
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Start Inngest (in another terminal)**
   ```bash
   pnpm inngest-dev
   ```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   ├── actions/            # Server actions
│   ├── inngest/           # Background job functions
│   ├── lib/               # Utility functions
│   ├── schemas/           # Zod validation schemas
│   └── server/            # Server-side utilities
├── prisma/                # Database schema
└── public/               # Static assets
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |
| `NEXTAUTH_URL` | Your app URL | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | Yes |
| `AWS_REGION` | AWS region | Yes |
| `S3_BUCKET_NAME` | S3 bucket name | Yes |
| `PROCESS_VIDEO_ENDPOINT` | Modal endpoint URL | Yes |
| `PROCESS_VIDEO_ENDPOINT_AUTH` | Modal auth token | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |

## 🎯 Usage

1. **Upload a video** or **paste a YouTube URL**
2. **AI processes** the video automatically:
   - Transcribes audio with WhisperX
   - Identifies clip moments with Gemini
   - Tracks active speakers with LR-ASD
   - Creates vertical clips with subtitles
3. **Download** your clips and share them

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Similar to Vercel setup
- **Railway**: Great for full-stack deployment
- **DigitalOcean App Platform**: Good for scaling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [T3 Stack](https://create.t3.gg/) for the amazing starter template
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Modal](https://modal.com/) for GPU infrastructure
- [WhisperX](https://github.com/m-bain/whisperX) for speech recognition
- [LR-ASD](https://github.com/Junhua-Liao/Light-ASD) for speaker detection

## 📞 Support

- **Email**: support@clipgen.ai
- **Discord**: [Join our community](https://discord.gg/clipgen)
- **Documentation**: [docs.clipgen.ai](https://docs.clipgen.ai)

---

Made with ❤️ by the ClipGen team

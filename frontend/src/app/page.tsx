import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight, Play, Zap, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                🚀 Now with YouTube URL support
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">long videos</span> into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">viral clips</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Upload a video or paste a YouTube link. Our AI automatically finds the best moments, 
              tracks the active speaker, and creates vertical clips with styled subtitles.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Start Creating Clips
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Powered by Advanced AI
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Our cutting-edge technology handles everything automatically
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Clip Detection</h3>
              <p className="text-slate-300">
                AI identifies Q&A moments and compelling stories between 30-60 seconds using Gemini.
              </p>
            </div>
            
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Active Speaker Tracking</h3>
              <p className="text-slate-300">
                Advanced face detection and tracking centers the active speaker for perfect framing.
              </p>
            </div>
            
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Auto Subtitles</h3>
              <p className="text-slate-300">
                WhisperX transcription with styled ASS subtitles for maximum engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Three simple steps to create viral content
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Upload or Link</h3>
              <p className="text-slate-300">
                Upload your video file or paste a YouTube URL. Server-side download ensures fast processing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">AI Processing</h3>
              <p className="text-slate-300">
                Our AI transcribes, detects moments, tracks speakers, and creates vertical clips.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Download & Share</h3>
              <p className="text-slate-300">
                Download your clips and share them on TikTok, Instagram, YouTube Shorts, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Perfect For
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Content creators, marketers, and businesses
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 mx-auto">
                🎙️
              </div>
              <h3 className="font-semibold">Podcast Creators</h3>
              <p className="text-sm text-slate-300 mt-2">
                Turn long episodes into engaging social media clips
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 h-12 w-12 mx-auto">
                📱
              </div>
              <h3 className="font-semibold">Social Media Managers</h3>
              <p className="text-sm text-slate-300 mt-2">
                Create consistent content across all platforms
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 h-12 w-12 mx-auto">
                🎥
              </div>
              <h3 className="font-semibold">YouTubers</h3>
              <p className="text-sm text-slate-300 mt-2">
                Repurpose main videos into Shorts and TikTok content
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 h-12 w-12 mx-auto">
                💼
              </div>
              <h3 className="font-semibold">Businesses</h3>
              <p className="text-sm text-slate-300 mt-2">
                Transform webinars and presentations into promotional clips
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Create Viral Content?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Join thousands of creators who are already using ClipGen to transform their content.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-xl font-bold">ClipGen</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 ClipGen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

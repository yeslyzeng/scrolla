'use client';

import { useState } from 'react';
import { VideoUpload } from '@/components/VideoUpload';
import { LearningInterface } from '@/components/LearningInterface';

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleVideoUpload = async (videoData: any) => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setCurrentVideo({
        ...videoData,
        id: 'demo-video',
        title: 'Introduction to Quantum Physics - MIT OpenCourseWare',
        transcription: {
          segments: [
            { text: "Welcome to quantum physics", start: 0, end: 3 },
            { text: "Today we'll explore wave-particle duality", start: 3, end: 8 },
          ],
          fullText: "Welcome to quantum physics. Today we'll explore wave-particle duality."
        },
        summary: {
          overview: "Introduction to quantum physics concepts",
          keyTopics: ["Wave-particle duality", "Quantum states", "Superposition"],
          mainTakeaways: ["Light exhibits both wave and particle properties", "Quantum systems exist in multiple states"]
        },
        clips: [
          { id: 'clip1', title: 'Wave-Particle Duality Introduction', startTime: 0, endTime: 45 },
          { id: 'clip2', title: 'Quantum States Explanation', startTime: 45, endTime: 120 }
        ]
      });
      setIsProcessing(false);
    }, 3000);
  };

  if (currentVideo) {
    return <LearningInterface video={currentVideo} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Scrolla</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Transform Videos Into{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Smart Study Sessions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Upload any YouTube video or MP4 file and get AI-generated notes, 
            searchable clips, interactive Q&A, and personalized study videos in minutes.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-20">
          <VideoUpload onUpload={handleVideoUpload} isProcessing={isProcessing} />
        </div>

        {/* Features Section */}
        <div id="features" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Everything You Need to Learn Faster
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Powered by advanced AI to transform passive video watching into 
            active, personalized learning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Smart Notes */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Notes</h3>
              <p className="text-gray-600 leading-relaxed">
                Auto-generated timestamped lecture notes with key concepts highlighted
              </p>
            </div>

            {/* Visual Search */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Search and jump to any moment with our intelligent video grid interface
              </p>
            </div>

            {/* Knowledge Quest */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Quest</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive quizzes and challenges to test your understanding and earn points
              </p>
            </div>

            {/* AI Tutor Chat */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Tutor Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                Ask questions about the video content like talking to a personal tutor
              </p>
            </div>
          </div>
        </div>

        {/* Use Case Gallery Section */}
        <div id="use-cases" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            See Scrolla in Action
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover how students and educators are transforming their learning experience
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500">Video Preview</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3Blue1Brown - Neural Networks</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A student uses Scrolla to break down complex neural network concepts from 3Blue1Brown's educational videos, creating interactive study materials.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Mathematics • Machine Learning</span>
                <a 
                  href="https://www.youtube.com/watch?time_continue=1&v=aircAruvnKk&embeds_referring_euri=https%3A%2F%2Fmemories.ai%2F&embeds_referring_origin=https%3A%2F%2Fmemories.ai&source_ve_path=MjM4NTE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  Watch Original →
                </a>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500">Video Preview</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MIT OpenCourseWare - Physics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                An educator transforms MIT's physics lectures into interactive learning modules with AI-generated quizzes and personalized study paths.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Physics • Higher Education</span>
                <a 
                  href="https://www.youtube.com/watch?v=nIoOv6lWYnk&embeds_referring_euri=https%3A%2F%2Fmemories.ai%2F&embeds_referring_origin=https%3A%2F%2Fmemories.ai&source_ve_path=MjM4NTE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  Watch Original →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


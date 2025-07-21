'use client';

import { useState, useRef } from 'react';
import VideoUpload from '@/components/VideoUpload';
import VideoPlayer from '@/components/VideoPlayer';
import TranscriptPanel from '@/components/TranscriptPanel';
import SummaryPanel from '@/components/SummaryPanel';
import ClipGrid from '@/components/ClipGrid';
import ChatPanel from '@/components/ChatPanel';
import SearchBar from '@/components/SearchBar';

interface VideoData {
  id: string;
  title: string;
  url?: string;
  file?: File;
  duration?: number;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  transcription?: {
    segments: Array<{
      text: string;
      start: number;
      end: number;
    }>;
    fullText: string;
  };
  summary?: {
    overview: string;
    keyTopics: string[];
    mainTakeaways: string[];
  };
  clips?: Array<{
    id: string;
    title: string;
    startTime: number;
    endTime: number;
    thumbnail?: string;
  }>;
}

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState<VideoData | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const videoPlayerRef = useRef<any>(null);

  const handleVideoUpload = async (data: { url?: string; file?: File; title: string }) => {
    const videoData: VideoData = {
      id: Date.now().toString(),
      title: data.title,
      url: data.url,
      file: data.file,
      status: 'uploading'
    };

    setCurrentVideo(videoData);

    try {
      // Process the video
      const formData = new FormData();
      if (data.file) {
        formData.append('file', data.file);
      }
      if (data.url) {
        formData.append('url', data.url);
      }
      formData.append('title', data.title);

      const response = await fetch('/api/process-video', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process video');
      }

      const result = await response.json();
      
      setCurrentVideo(prev => prev ? {
        ...prev,
        status: 'completed',
        transcription: result.transcription,
        summary: result.summary,
        clips: result.clips,
        duration: result.duration
      } : null);

    } catch (error) {
      console.error('Error processing video:', error);
      setCurrentVideo(prev => prev ? { ...prev, status: 'error' } : null);
    }
  };

  const handleSearch = async (query: string) => {
    if (!currentVideo || !query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: currentVideo.id,
          query: query.trim()
        }),
      });

      if (response.ok) {
        const results = await response.json();
        setSearchResults(results);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleTimestampClick = (timestamp: number) => {
    setCurrentTime(timestamp);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(timestamp);
    }
  };

  const handleClipGeneration = async (startTime: number, endTime: number, title: string) => {
    if (!currentVideo) return;

    try {
      const response = await fetch('/api/generate-clip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: currentVideo.id,
          startTime,
          endTime,
          title
        }),
      });

      if (response.ok) {
        const newClip = await response.json();
        setCurrentVideo(prev => prev ? {
          ...prev,
          clips: [...(prev.clips || []), newClip]
        } : null);
      }
    } catch (error) {
      console.error('Error generating clip:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Scrolla</h1>
              <p className="text-xs text-gray-500 -mt-0.5">AI Video Learning</p>
            </div>
          </div>
          
          {currentVideo && (
            <SearchBar onSearch={handleSearch} />
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {!currentVideo ? (
          /* Upload State */
          <div className="flex items-center justify-center min-h-[60vh]">
            <VideoUpload onUpload={handleVideoUpload} />
          </div>
        ) : (
          /* Main Application */
          <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">
            {/* Left Panel - Video Player */}
            <div className="col-span-8 space-y-4">
              <VideoPlayer
                ref={videoPlayerRef}
                video={currentVideo}
                currentTime={currentTime}
                onTimeUpdate={setCurrentTime}
              />
              
              {/* Clip Grid */}
              {currentVideo.clips && currentVideo.clips.length > 0 && (
                <ClipGrid
                  clips={currentVideo.clips}
                  onClipClick={handleTimestampClick}
                />
              )}
            </div>

            {/* Right Panel - Transcript, Summary, Chat */}
            <div className="col-span-4 space-y-4 overflow-hidden">
              {/* Processing Status */}
              {currentVideo.status !== 'completed' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="text-blue-800 font-medium">
                      {currentVideo.status === 'uploading' && 'Uploading video...'}
                      {currentVideo.status === 'processing' && 'Processing with AI...'}
                      {currentVideo.status === 'error' && 'Error processing video'}
                    </span>
                  </div>
                </div>
              )}

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Search Results</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="cursor-pointer hover:bg-yellow-100 p-2 rounded text-sm"
                        onClick={() => handleTimestampClick(result.startTime)}
                      >
                        <div className="font-medium text-yellow-900">
                          {Math.floor(result.startTime / 60)}:{(result.startTime % 60).toFixed(0).padStart(2, '0')}
                        </div>
                        <div className="text-yellow-700">{result.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary Panel */}
              {currentVideo.summary && (
                <SummaryPanel
                  summary={currentVideo.summary}
                  onTopicClick={handleTimestampClick}
                />
              )}

              {/* Transcript Panel */}
              {currentVideo.transcription && (
                <TranscriptPanel
                  transcription={currentVideo.transcription}
                  currentTime={currentTime}
                  onTimestampClick={handleTimestampClick}
                  onClipGeneration={handleClipGeneration}
                />
              )}

              {/* Chat Panel */}
              {currentVideo.status === 'completed' && (
                <ChatPanel
                  videoId={currentVideo.id}
                  onTimestampClick={handleTimestampClick}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


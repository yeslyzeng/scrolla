'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  video: {
    id: string;
    title: string;
    url?: string;
    file?: File;
    status: string;
  };
  currentTime: number;
  onTimeUpdate: (time: number) => void;
}

export interface VideoPlayerRef {
  seekTo: (time: number) => void;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ video, currentTime, onTimeUpdate }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      seekTo: (time: number) => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
      },
    }));

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        onTimeUpdate(videoRef.current.currentTime);
      }
    };

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="aspect-video bg-gray-900 relative">
          {video.url ? (
            <iframe
              src={video.url.replace('watch?v=', 'embed/')}
              className="w-full h-full"
              allowFullScreen
              title={video.title}
            />
          ) : video.file ? (
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              onTimeUpdate={handleTimeUpdate}
              src={URL.createObjectURL(video.file)}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Video loading...</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h2>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Current: {formatTime(currentTime)}</span>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                video.status === 'completed' ? 'bg-success-500' : 
                video.status === 'processing' ? 'bg-primary-500' : 'bg-gray-400'
              }`}></div>
              <span className="capitalize">{video.status}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;


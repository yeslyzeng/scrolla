'use client';

import { useState } from 'react';

interface TranscriptPanelProps {
  transcription: {
    segments: Array<{
      text: string;
      start: number;
      end: number;
    }>;
    fullText: string;
  };
  currentTime: number;
  onTimestampClick: (time: number) => void;
  onClipGeneration: (startTime: number, endTime: number, title: string) => void;
}

export default function TranscriptPanel({ 
  transcription, 
  currentTime, 
  onTimestampClick, 
  onClipGeneration 
}: TranscriptPanelProps) {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [showClipDialog, setShowClipDialog] = useState(false);
  const [clipTitle, setClipTitle] = useState('');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCreateClip = () => {
    if (selectedSegment !== null) {
      const segment = transcription.segments[selectedSegment];
      onClipGeneration(segment.start, segment.end, clipTitle || `Clip: ${segment.text.substring(0, 30)}...`);
      setShowClipDialog(false);
      setClipTitle('');
      setSelectedSegment(null);
    }
  };

  const getCurrentSegment = () => {
    return transcription.segments.findIndex(segment => 
      currentTime >= segment.start && currentTime <= segment.end
    );
  };

  const currentSegmentIndex = getCurrentSegment();

  return (
    <div className="bg-white rounded-xl border border-gray-200 h-96 flex flex-col">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Transcript</h3>
        <p className="text-sm text-gray-500">Click any timestamp to jump to that moment</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {transcription.segments.map((segment, index) => (
          <div
            key={index}
            className={`group cursor-pointer p-3 rounded-lg border transition-all ${
              index === currentSegmentIndex
                ? 'bg-primary-50 border-primary-200'
                : index === selectedSegment
                ? 'bg-gray-50 border-gray-300'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => onTimestampClick(segment.start)}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-primary-600">
                {formatTime(segment.start)}
              </span>
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSegment(index);
                    setShowClipDialog(true);
                  }}
                  className="text-xs text-gray-500 hover:text-primary-600 px-2 py-1 rounded bg-white border border-gray-200"
                >
                  Create Clip
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{segment.text}</p>
          </div>
        ))}
      </div>

      {/* Clip Creation Dialog */}
      {showClipDialog && selectedSegment !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 max-w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Study Clip</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Clip Title
              </label>
              <input
                type="text"
                value={clipTitle}
                onChange={(e) => setClipTitle(e.target.value)}
                placeholder="Enter clip title..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Selected segment:</p>
              <p className="text-sm text-gray-900">
                {transcription.segments[selectedSegment].text}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Duration: {formatTime(transcription.segments[selectedSegment].start)} - {formatTime(transcription.segments[selectedSegment].end)}
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowClipDialog(false);
                  setSelectedSegment(null);
                  setClipTitle('');
                }}
                className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateClip}
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Create Clip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


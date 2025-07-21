'use client';

interface ClipGridProps {
  clips: Array<{
    id: string;
    title: string;
    startTime: number;
    endTime: number;
    thumbnail?: string;
  }>;
  onClipClick: (timestamp: number) => void;
}

export default function ClipGrid({ clips, onClipClick }: ClipGridProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDuration = (startTime: number, endTime: number) => {
    const duration = endTime - startTime;
    return `${Math.floor(duration)}s`;
  };

  if (!clips || clips.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Study Clips</h3>
        <span className="text-sm text-gray-500">{clips.length} clips</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {clips.map((clip) => (
          <div
            key={clip.id}
            onClick={() => onClipClick(clip.startTime)}
            className="group cursor-pointer bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-200 relative">
              {clip.thumbnail ? (
                <img
                  src={clip.thumbnail}
                  alt={clip.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all">
                <div className="w-10 h-10 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {getDuration(clip.startTime, clip.endTime)}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-3">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                {clip.title}
              </h4>
              <p className="text-xs text-gray-500">
                {formatTime(clip.startTime)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Generate More Clips Button */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Generate More Clips</span>
        </button>
      </div>
    </div>
  );
}


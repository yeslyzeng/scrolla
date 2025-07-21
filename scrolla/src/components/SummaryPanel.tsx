'use client';

interface SummaryPanelProps {
  summary: {
    overview: string;
    keyTopics: string[];
    mainTakeaways: string[];
  };
  onTopicClick: (timestamp: number) => void;
}

export default function SummaryPanel({ summary, onTopicClick }: SummaryPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Summary</h3>
      
      <div className="space-y-4">
        {/* Overview */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Overview</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{summary.overview}</p>
        </div>

        {/* Key Topics */}
        {summary.keyTopics && summary.keyTopics.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Topics</h4>
            <div className="flex flex-wrap gap-2">
              {summary.keyTopics.map((topic, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Main Takeaways */}
        {summary.mainTakeaways && summary.mainTakeaways.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Main Takeaways</h4>
            <ul className="space-y-2">
              {summary.mainTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Download Summary Button */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download Summary</span>
        </button>
      </div>
    </div>
  );
}


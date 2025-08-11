'use client';

import { useState } from 'react';

export default function VisualSearchPage() {
  const [searchQuery, setSearchQuery] = useState('neural networks');
  const [activeFilter, setActiveFilter] = useState('all');

  const searchResults = [
    {
      timestamp: '2:15',
      title: 'Introduction to Neural Networks',
      snippet: 'Neural networks are computational models inspired by biological neural networks...',
      relevance: 95,
      thumbnail: '/api/placeholder/160/90'
    },
    {
      timestamp: '5:42',
      title: 'Deep Learning Fundamentals',
      snippet: 'Deep learning uses multiple layers of neural networks to learn complex patterns...',
      relevance: 88,
      thumbnail: '/api/placeholder/160/90'
    },
    {
      timestamp: '8:30',
      title: 'Backpropagation Algorithm',
      snippet: 'The backpropagation algorithm is used to train neural networks by adjusting weights...',
      relevance: 82,
      thumbnail: '/api/placeholder/160/90'
    },
    {
      timestamp: '12:18',
      title: 'Activation Functions',
      snippet: 'Activation functions introduce non-linearity into neural networks, enabling them...',
      relevance: 79,
      thumbnail: '/api/placeholder/160/90'
    },
    {
      timestamp: '15:45',
      title: 'Gradient Descent Optimization',
      snippet: 'Gradient descent is an optimization algorithm used to minimize the loss function...',
      relevance: 75,
      thumbnail: '/api/placeholder/160/90'
    },
    {
      timestamp: '18:22',
      title: 'Overfitting and Regularization',
      snippet: 'Overfitting occurs when a model learns the training data too well, including noise...',
      relevance: 71,
      thumbnail: '/api/placeholder/160/90'
    }
  ];

  const filteredResults = searchResults.filter(result => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'high') return result.relevance >= 85;
    if (activeFilter === 'medium') return result.relevance >= 75 && result.relevance < 85;
    if (activeFilter === 'low') return result.relevance < 75;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Scrolla</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">Gallery</a>
              <a href="#" className="text-cyan-600 font-medium">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Visual Search</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Find Any Moment{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Search through hours of video content with intelligent semantic understanding. Jump to any concept, definition, or explanation in seconds with our AI-powered visual search grid.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Try Visual Search
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Search Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Lightning-Fast Search
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Visual Search instantly finds and displays relevant content from your videos
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for any concept, definition, or explanation..."
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                  Search
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex space-x-2">
                {[
                  { key: 'all', label: 'All Results', count: searchResults.length },
                  { key: 'high', label: 'High Relevance', count: searchResults.filter(r => r.relevance >= 85).length },
                  { key: 'medium', label: 'Medium Relevance', count: searchResults.filter(r => r.relevance >= 75 && r.relevance < 85).length },
                  { key: 'low', label: 'Low Relevance', count: searchResults.filter(r => r.relevance < 75).length }
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter.key
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {result.timestamp}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">{result.relevance}%</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{result.snippet}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="w-20 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                      Jump to →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Capabilities */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Search Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visual Search goes beyond simple keyword matching with intelligent understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Semantic Understanding</h3>
            <p className="text-gray-600 leading-relaxed">
              Understands context and meaning, not just exact word matches. Find related concepts easily.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Grid Interface</h3>
            <p className="text-gray-600 leading-relaxed">
              See search results in an intuitive visual grid with thumbnails and relevance scores.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Navigation</h3>
            <p className="text-gray-600 leading-relaxed">
              Jump directly to any moment in your video with one click. No more manual scrubbing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Relevance Scoring</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered relevance scoring helps you find the most accurate and useful results first.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 100 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Filtering</h3>
            <p className="text-gray-600 leading-relaxed">
              Filter results by relevance, topic, or time to quickly find exactly what you need.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Time-based Search</h3>
            <p className="text-gray-600 leading-relaxed">
              Search within specific time ranges or find content that appeared at particular moments.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Timeline Interface */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visual Timeline Interface</h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-gray-700">Video Timeline</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Duration: 45:32</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">6 search results</span>
                </div>
              </div>
              
              {/* Timeline Bar */}
              <div className="relative w-full h-4 bg-gray-200 rounded-full mb-6">
                <div className="absolute inset-0 flex items-center">
                  {searchResults.map((result, index) => {
                    const timeInSeconds = parseInt(result.timestamp.split(':')[0]) * 60 + parseInt(result.timestamp.split(':')[1]);
                    const position = (timeInSeconds / (45 * 60 + 32)) * 100;
                    return (
                      <div
                        key={index}
                        className="absolute w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-1/2 cursor-pointer hover:scale-125 transition-transform"
                        style={{ left: `${position}%` }}
                        title={`${result.title} at ${result.timestamp}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Timeline Labels */}
              <div className="flex justify-between text-sm text-gray-500">
                <span>0:00</span>
                <span>15:00</span>
                <span>30:00</span>
                <span>45:32</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Transform How You Navigate Video Content
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Join thousands of users who have revolutionized their video learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-cyan-100">Faster Navigation</div>
              <div className="text-sm text-cyan-200 mt-1">Find content instantly</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-cyan-100">Search Accuracy</div>
              <div className="text-sm text-cyan-200 mt-1">AI-powered relevance</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-cyan-100">Always Available</div>
              <div className="text-sm text-cyan-200 mt-1">Search anytime, anywhere</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For Every Search Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're researching, studying, or teaching, Visual Search adapts to your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Researchers</h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly find specific concepts, definitions, and explanations across hours of content.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Students</h3>
            <p className="text-gray-600 leading-relaxed">
              Review specific topics without watching entire lectures. Find answers in seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Educators</h3>
            <p className="text-gray-600 leading-relaxed">
              Create lesson plans by quickly finding relevant content across multiple videos.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Content Instantly?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start using Visual Search today and never lose track of important content again
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Get Started Free
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

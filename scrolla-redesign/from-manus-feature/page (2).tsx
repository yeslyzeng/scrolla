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
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Search Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-200 rounded-xl opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-200 rounded-xl opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-xl opacity-20 animate-bounce delay-2000"></div>
      </div>

      {/* Interactive Search Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Video Search</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-driven search that understands context, not just keywords
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Search Interface */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for any concept, definition, or explanation..."
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-0 focus:ring-4 focus:ring-white/30 focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-2">
                  {['all', 'high', 'medium', 'low'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === filter
                          ? 'bg-white text-cyan-600'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {filter === 'all' ? 'All Results' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Relevance`}
                    </button>
                  ))}
                </div>
                <div className="text-white text-sm">
                  {filteredResults.length} results found
                </div>
              </div>
            </div>
          </div>

          {/* Search Results Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                      {result.timestamp}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {result.title}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${
                            result.relevance >= 85 ? 'bg-green-500' :
                            result.relevance >= 75 ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                          <span className="text-xs text-gray-500">{result.relevance}%</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{result.snippet}</p>
                      <div className="mt-3 flex items-center space-x-2">
                        <button className="text-cyan-600 text-sm font-medium hover:text-cyan-700 transition-colors">
                          Jump to moment
                        </button>
                        <span className="text-gray-300">•</span>
                        <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                          Add to notes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Search Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Go beyond simple keyword matching with AI that understands context and meaning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Semantic Understanding</h3>
            <p className="text-gray-600">
              AI understands the meaning behind your search, not just exact word matches. Find related concepts and synonyms automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Navigation</h3>
            <p className="text-gray-600">
              Jump directly to any moment in the video with one click. No more scrubbing through hours of content to find what you need.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Relevance Scoring</h3>
            <p className="text-gray-600">
              Every search result is scored for relevance, helping you find the most important information first with confidence indicators.
            </p>
          </div>
        </div>

        {/* Visual Grid Demo */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Visual Search Grid</h3>
            <p className="text-gray-300">
              See your search results in a visual timeline that makes navigation intuitive
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {searchResults.map((result, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="aspect-video bg-gray-600 rounded mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs text-cyan-400 font-medium mb-1">{result.timestamp}</div>
                <div className="text-xs text-gray-300 truncate">{result.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Search Smarter, Learn Faster</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform how you navigate educational content with intelligent search technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-lg opacity-90">Faster Navigation</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Search Accuracy</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-lg opacity-90">Video Length</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">0.3s</div>
              <div className="text-lg opacity-90">Search Speed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Learning Style</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're researching, studying, or teaching, Visual Search adapts to your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research</h3>
            <p className="text-gray-600 mb-4">
              Quickly find specific information across multiple lectures, documentaries, and educational videos.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Literature reviews</li>
              <li>• Fact verification</li>
              <li>• Citation sourcing</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Study</h3>
            <p className="text-gray-600 mb-4">
              Navigate directly to concepts you need to review without watching entire lectures again.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Exam preparation</li>
              <li>• Concept clarification</li>
              <li>• Quick reviews</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Teaching</h3>
            <p className="text-gray-600 mb-4">
              Create targeted lesson segments and help students find specific explanations quickly.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Lesson planning</li>
              <li>• Student assistance</li>
              <li>• Content curation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Lose Track of Important Information
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are already using Visual Search to navigate content efficiently
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Start Searching
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


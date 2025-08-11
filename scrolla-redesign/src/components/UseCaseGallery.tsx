'use client';

import { useState } from 'react';

interface UseCaseDemo {
  id: string;
  title: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  thumbnail: string;
  features: {
    transcription: string[];
    notes: {
      title: string;
      content: string;
      keyPoints: string[];
    };
    search: {
      query: string;
      results: Array<{
        timestamp: string;
        text: string;
      }>;
    };
    quiz: {
      question: string;
      options: string[];
      correct: number;
    };
    chat: {
      question: string;
      answer: string;
    };
  };
}

interface UseCaseGalleryProps {
  onBack?: () => void;
}

const useCaseDemos: UseCaseDemo[] = [
  {
    id: 'neural-networks',
    title: 'Technical Learning',
    description: 'Perfect for STEM students learning complex mathematical concepts',
    videoTitle: 'But what is a neural network? | Deep learning chapter 1',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    thumbnail: '/api/placeholder/400/225',
    features: {
      transcription: [
        '0:32 - And this is where neural networks come into play',
        '2:42 - Cutting edge machine learning algorithms use neural networks',
        '2:46 - Now that\'s correct. Let\'s talk about neural networks',
        '4:01 - That we associate with deep neural networks'
      ],
      notes: {
        title: 'Neural Network Fundamentals',
        content: 'Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information through weighted connections.',
        keyPoints: [
          'Neurons are the basic processing units',
          'Weights determine connection strength',
          'Activation functions introduce non-linearity',
          'Backpropagation enables learning'
        ]
      },
      search: {
        query: 'neural networks',
        results: [
          { timestamp: '0:32', text: 'And this is where neural networks come into' },
          { timestamp: '2:42', text: 'Cutting edge machine learning algorithms-neural networks' },
          { timestamp: '2:46', text: 'Now that\'s correct. Let\'s talk about neural networks' },
          { timestamp: '4:01', text: 'That we associate with deep neural networks' }
        ]
      },
      quiz: {
        question: 'What is the primary function of weights in a neural network?',
        options: [
          'To store data',
          'To determine connection strength between neurons',
          'To activate neurons',
          'To process images'
        ],
        correct: 1
      },
      chat: {
        question: 'How do neural networks learn?',
        answer: 'Neural networks learn through a process called backpropagation, where the network adjusts its weights based on the error between predicted and actual outputs. This iterative process helps the network improve its predictions over time.'
      }
    }
  },
  {
    id: 'sushi-making',
    title: 'Visual Learning',
    description: 'Ideal for culinary students and hands-on skill development',
    videoTitle: 'The Best Way To Make Sushi At Home (Professional Quality)',
    videoUrl: 'https://www.youtube.com/watch?v=nIoOv6lWYnk',
    thumbnail: '/api/placeholder/400/225',
    features: {
      transcription: [
        '2:15 - First, we need to prepare the sushi rice properly',
        '5:30 - The key is to rinse the rice until the water runs clear',
        '8:45 - Now we\'ll add the rice vinegar mixture',
        '12:20 - Rolling technique is crucial for perfect sushi'
      ],
      notes: {
        title: 'Professional Sushi Making Techniques',
        content: 'Learn the essential steps for making restaurant-quality sushi at home, from rice preparation to rolling techniques.',
        keyPoints: [
          'Rinse rice until water runs clear',
          'Use proper rice-to-water ratio (1:1.2)',
          'Season rice with vinegar mixture while warm',
          'Keep hands moist when handling rice',
          'Roll with consistent pressure'
        ]
      },
      search: {
        query: 'rice preparation',
        results: [
          { timestamp: '2:15', text: 'First, we need to prepare the sushi rice properly' },
          { timestamp: '5:30', text: 'The key is to rinse the rice until the water runs clear' },
          { timestamp: '8:45', text: 'Now we\'ll add the rice vinegar mixture' },
          { timestamp: '10:12', text: 'Perfect sushi rice should be at body temperature' }
        ]
      },
      quiz: {
        question: 'Why is it important to rinse sushi rice before cooking?',
        options: [
          'To add flavor',
          'To remove excess starch for better texture',
          'To make it cook faster',
          'To change the color'
        ],
        correct: 1
      },
      chat: {
        question: 'What\'s the ideal temperature for sushi rice when rolling?',
        answer: 'Sushi rice should be at body temperature (around 98°F/37°C) when rolling. This temperature makes the rice easier to work with and prevents it from being too hot or too cold, which could affect the texture and make rolling difficult.'
      }
    }
  }
];

export function UseCaseGallery({ onBack }: UseCaseGalleryProps) {
  const [selectedDemo, setSelectedDemo] = useState<UseCaseDemo>(useCaseDemos[0]);
  const [activeFeature, setActiveFeature] = useState<'transcription' | 'notes' | 'search' | 'quiz' | 'chat'>('notes');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Home</span>
              </button>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              See Scrolla in{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real examples of how Scrolla transforms educational videos into interactive learning experiences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Use Case Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {useCaseDemos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setSelectedDemo(demo)}
              className={`text-left p-6 rounded-2xl border-2 transition-all ${
                selectedDemo.id === demo.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {demo.id === 'neural-networks' ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 mb-3">{demo.description}</p>
                  <p className="text-sm font-medium text-blue-600">{demo.videoTitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Demo */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Video Header */}
          <div className="bg-gray-900 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h2 className="text-white text-lg font-semibold">{selectedDemo.videoTitle}</h2>
                <p className="text-gray-300 text-sm">AI-powered learning experience</p>
              </div>
            </div>
          </div>

          {/* Feature Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { key: 'notes', label: 'Smart Notes', icon: '📝' },
                { key: 'transcription', label: 'AI Transcription', icon: '🎯' },
                { key: 'search', label: 'Visual Search', icon: '🔍' },
                { key: 'quiz', label: 'Smart Quiz', icon: '🧠' },
                { key: 'chat', label: 'AI Tutor', icon: '💬' }
              ].map((feature) => (
                <button
                  key={feature.key}
                  onClick={() => setActiveFeature(feature.key as any)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeFeature === feature.key
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <div className="p-8">
            {activeFeature === 'notes' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">AI-Generated Smart Notes</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{selectedDemo.features.notes.title}</h4>
                  <p className="text-gray-700 mb-4">{selectedDemo.features.notes.content}</p>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Key Points:</h5>
                    <ul className="space-y-2">
                      {selectedDemo.features.notes.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === 'transcription' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">AI Transcription with Timestamps</h3>
                <div className="space-y-3">
                  {selectedDemo.features.transcription.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.split(' - ')[0]}
                      </div>
                      <p className="text-gray-700 flex-1">{item.split(' - ')[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeFeature === 'search' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Visual Search</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-gray-600 font-medium">Search: "{selectedDemo.features.search.query}"</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedDemo.features.search.results.map((result, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-cyan-500 text-white px-2 py-1 rounded text-sm font-medium">
                            {result.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700">{result.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeFeature === 'quiz' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Smart Quiz</h3>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Question 1/5</span>
                    <span className="text-purple-600 font-medium">Score: 120</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{selectedDemo.features.quiz.question}</h4>
                  <div className="space-y-3">
                    {selectedDemo.features.quiz.options.map((option, index) => (
                      <button
                        key={index}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                          index === selectedDemo.features.quiz.correct
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeFeature === 'chat' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">AI Tutor Chat</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm">{selectedDemo.features.chat.question}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-md">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">AI Tutor</span>
                        </div>
                        <p className="text-sm text-gray-700">{selectedDemo.features.chat.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Learning?</h3>
          <p className="text-lg text-gray-600 mb-8">Upload your own video and experience Scrolla's AI-powered features</p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
            Try Scrolla Now
          </button>
        </div>
      </div>
    </div>
  );
}

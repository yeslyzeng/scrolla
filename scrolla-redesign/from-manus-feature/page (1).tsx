'use client';

import { useState } from 'react';

export default function SmartNotesPage() {
  const [activeDemo, setActiveDemo] = useState('physics');

  const demoContent = {
    physics: {
      title: 'Quantum Physics Fundamentals',
      notes: [
        {
          timestamp: '2:15',
          title: 'Wave-Particle Duality',
          content: 'Light exhibits both wave and particle properties depending on how it\'s observed. This fundamental principle challenges our classical understanding of physics.',
          keyPoints: ['Photons behave as particles when detected', 'Wave interference patterns in double-slit experiment', 'Observer effect influences measurement']
        },
        {
          timestamp: '5:42',
          title: 'Quantum Superposition',
          content: 'Quantum particles can exist in multiple states simultaneously until measured. This principle is fundamental to quantum computing and quantum mechanics.',
          keyPoints: ['Schrödinger\'s cat thought experiment', 'Measurement collapses the wave function', 'Basis for quantum computing qubits']
        },
        {
          timestamp: '8:30',
          title: 'Heisenberg Uncertainty Principle',
          content: 'The more precisely we know a particle\'s position, the less precisely we can know its momentum, and vice versa.',
          keyPoints: ['Fundamental limit of measurement precision', 'Not due to measurement limitations', 'Intrinsic property of quantum systems']
        }
      ]
    },
    biology: {
      title: 'Cell Division and Mitosis',
      notes: [
        {
          timestamp: '1:30',
          title: 'Prophase',
          content: 'Chromatin condenses into visible chromosomes, each consisting of two sister chromatids joined at the centromere.',
          keyPoints: ['Nuclear envelope begins to break down', 'Centrioles move to opposite poles', 'Spindle fibers start forming']
        },
        {
          timestamp: '4:15',
          title: 'Metaphase',
          content: 'Chromosomes align at the cell\'s equatorial plane, forming the metaphase plate. This ensures equal distribution of genetic material.',
          keyPoints: ['Chromosomes attach to spindle fibers', 'Cell cycle checkpoint occurs', 'Ensures proper chromosome alignment']
        },
        {
          timestamp: '6:45',
          title: 'Anaphase',
          content: 'Sister chromatids separate and move toward opposite poles of the cell, ensuring each daughter cell receives identical genetic information.',
          keyPoints: ['Chromatids separate at centromere', 'Motor proteins drive movement', 'Cell elongates in preparation for division']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <a href="#" className="text-blue-600 font-medium">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Smart Notes</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Never Miss a{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Key Concept
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              AI-powered note generation that automatically identifies and highlights the most important concepts from any educational video, complete with timestamps and organized summaries.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Try Smart Notes
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Note Generation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes video content to create comprehensive, structured notes that capture every important detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Timestamps</h3>
            <p className="text-gray-600">
              Every note is linked to the exact moment in the video where the concept was explained, making review effortless.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Concept Highlighting</h3>
            <p className="text-gray-600">
              AI identifies and emphasizes the most important concepts, definitions, and formulas for focused learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Organization</h3>
            <p className="text-gray-600">
              Notes are automatically organized into logical sections with clear hierarchies and bullet points.
            </p>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">Smart Notes Demo</h3>
                  <p className="text-gray-300 text-sm">AI-generated lecture notes</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveDemo('physics')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDemo === 'physics' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Physics
                </button>
                <button
                  onClick={() => setActiveDemo('biology')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDemo === 'biology' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Biology
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{demoContent[activeDemo as keyof typeof demoContent].title}</h2>
            <div className="space-y-6">
              {demoContent[activeDemo as keyof typeof demoContent].notes.map((note, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                      {note.timestamp}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h3>
                      <p className="text-gray-700 mb-4">{note.content}</p>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Points:</h4>
                        <ul className="space-y-1">
                          {note.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Smart Notes?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform hours of video content into organized, actionable knowledge in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Faster Review</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-lg opacity-90">Better Retention</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Accuracy</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Learner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, professional, or lifelong learner, Smart Notes adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Students</h3>
            <p className="text-gray-600 mb-4">
              Transform lecture recordings into comprehensive study guides with key concepts highlighted and organized.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Exam preparation made easy</li>
              <li>• Quick concept review</li>
              <li>• Organized study materials</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionals</h3>
            <p className="text-gray-600 mb-4">
              Extract actionable insights from training videos, webinars, and professional development content.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Training documentation</li>
              <li>• Meeting summaries</li>
              <li>• Skill development tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Educators</h3>
            <p className="text-gray-600 mb-4">
              Create structured lesson summaries and provide students with comprehensive study materials automatically.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Lesson plan creation</li>
              <li>• Student resource generation</li>
              <li>• Curriculum documentation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are already using Smart Notes to accelerate their education
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


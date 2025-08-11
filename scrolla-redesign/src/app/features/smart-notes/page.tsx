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
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Smart Notes in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how AI automatically generates structured, timestamped notes from educational content
          </p>
        </div>

        {/* Demo Content Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveDemo('physics')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDemo === 'physics'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Quantum Physics
            </button>
            <button
              onClick={() => setActiveDemo('biology')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDemo === 'biology'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Cell Biology
            </button>
          </div>
        </div>

        {/* Demo Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{demoContent[activeDemo as keyof typeof demoContent].title}</h3>
            <div className="space-y-6">
              {demoContent[activeDemo as keyof typeof demoContent].notes.map((note, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {note.timestamp}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900">{note.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{note.content}</p>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Key Points:</h5>
                    <ul className="space-y-1">
                      {note.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart Notes combines AI intelligence with educational best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Timestamps</h3>
            <p className="text-gray-600 leading-relaxed">
              Every key concept is automatically linked to its exact location in the video for easy navigation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Concept Highlighting</h3>
            <p className="text-gray-600 leading-relaxed">
              AI identifies and highlights the most important concepts, definitions, and explanations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Organization</h3>
            <p className="text-gray-600 leading-relaxed">
              Notes are automatically organized into logical sections with clear hierarchies and relationships.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Summaries</h3>
            <p className="text-gray-600 leading-relaxed">
              Key concepts are presented with visual aids and diagrams for better understanding.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Export Options</h3>
            <p className="text-gray-600 leading-relaxed">
              Download notes in multiple formats including PDF, Markdown, and interactive HTML.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Generation</h3>
            <p className="text-gray-600 leading-relaxed">
              Notes are generated in real-time as you watch, with instant updates and refinements.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Learning Experience
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of students and educators who have revolutionized their study methods with Smart Notes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Faster Review</div>
              <div className="text-sm text-blue-200 mt-1">Find key concepts instantly</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Better Retention</div>
              <div className="text-sm text-blue-200 mt-1">Structured learning improves memory</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Always Available</div>
              <div className="text-sm text-blue-200 mt-1">Study at your own pace</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For Every Learning Scenario
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, professional, or educator, Smart Notes adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Students</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform long lectures into concise, searchable notes. Never miss important concepts again.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionals</h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly extract key insights from training videos and professional development content.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Educators</h3>
            <p className="text-gray-600 leading-relaxed">
              Create comprehensive study materials and track student engagement with your content.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Revolutionize Your Learning?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start using Smart Notes today and experience the future of educational content consumption
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
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

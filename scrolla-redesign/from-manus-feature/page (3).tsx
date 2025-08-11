'use client';

import { useState } from 'react';

export default function AITutorPage() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [activeDemo, setActiveDemo] = useState('physics');

  const chatDemos = {
    physics: {
      title: 'Quantum Physics Discussion',
      messages: [
        {
          type: 'user',
          content: 'Can you explain the double-slit experiment in simple terms?',
          timestamp: '2:34 PM'
        },
        {
          type: 'ai',
          content: 'The double-slit experiment demonstrates wave-particle duality! When we shoot electrons through two slits, they create an interference pattern like waves. But when we observe which slit they go through, they behave like particles. This shows that observation affects quantum behavior.',
          timestamp: '2:34 PM',
          references: ['Video: 3:45', 'Video: 7:22']
        },
        {
          type: 'user',
          content: 'Why does observation change the behavior?',
          timestamp: '2:35 PM'
        },
        {
          type: 'ai',
          content: 'Great question! In quantum mechanics, particles exist in superposition - multiple states simultaneously. When we measure or observe, we force the particle to "choose" a definite state, collapsing the wave function. It\'s not that our eyes change reality, but that any measurement device must interact with the particle.',
          timestamp: '2:35 PM',
          references: ['Video: 12:15', 'Video: 18:30']
        }
      ]
    },
    math: {
      title: 'Calculus Problem Solving',
      messages: [
        {
          type: 'user',
          content: 'I\'m struggling with integration by parts. Can you walk me through it?',
          timestamp: '3:15 PM'
        },
        {
          type: 'ai',
          content: 'Integration by parts uses the formula: ∫u dv = uv - ∫v du. The key is choosing u and dv wisely. Use LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential - in that order of preference for u.',
          timestamp: '3:15 PM',
          references: ['Video: 5:20', 'Video: 9:45']
        },
        {
          type: 'user',
          content: 'Can you show me an example with ∫x·e^x dx?',
          timestamp: '3:16 PM'
        },
        {
          type: 'ai',
          content: 'Perfect example! Let u = x (algebraic) and dv = e^x dx. Then du = dx and v = e^x. Applying the formula: ∫x·e^x dx = x·e^x - ∫e^x dx = x·e^x - e^x + C = e^x(x-1) + C',
          timestamp: '3:16 PM',
          references: ['Video: 15:30']
        }
      ]
    }
  };

  const currentChat = chatDemos[activeDemo as keyof typeof chatDemos];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <a href="#" className="text-purple-600 font-medium">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>AI Tutor Chat</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Your Personal{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI Tutor
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Get instant, personalized explanations about any video content. Ask questions, clarify concepts, and dive deeper into topics with an AI tutor that understands context and adapts to your learning style.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Start Chatting
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                See Examples
              </button>
            </div>
          </div>
        </div>

        {/* Floating Chat Bubbles */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Interactive Chat Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conversational Learning</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience natural conversations with an AI that understands your video content and learning goals
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">AI Tutor</h3>
                  <p className="text-white/80 text-sm">Always ready to help</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveDemo('physics')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDemo === 'physics' ? 'bg-white text-purple-600' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Physics
                </button>
                <button
                  onClick={() => setActiveDemo('math')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDemo === 'math' ? 'bg-white text-purple-600' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Math
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 h-96 overflow-y-auto">
            <div className="space-y-4">
              {currentChat.messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.references && (
                      <div className="mt-2 pt-2 border-t border-gray-300">
                        <div className="flex flex-wrap gap-1">
                          {message.references.map((ref, refIndex) => (
                            <span key={refIndex} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Ask me anything about the video content..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Tutoring Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI capabilities that make learning more effective and engaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Context Awareness</h3>
            <p className="text-gray-600">
              AI understands the full context of your video content and can reference specific moments, concepts, and explanations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptive Learning</h3>
            <p className="text-gray-600">
              Personalizes explanations based on your learning style, previous questions, and comprehension level.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Source References</h3>
            <p className="text-gray-600">
              Every answer includes references to specific video timestamps, so you can verify and explore further.
            </p>
          </div>
        </div>

        {/* Conversation Examples */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Common Question Types</h3>
            <p className="text-gray-300">
              See how AI Tutor handles different types of learning questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-purple-400 text-sm font-medium mb-2">Clarification</div>
              <div className="text-white mb-3">"Can you explain this concept in simpler terms?"</div>
              <div className="text-gray-300 text-sm">Gets alternative explanations with analogies and examples</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-pink-400 text-sm font-medium mb-2">Deep Dive</div>
              <div className="text-white mb-3">"Why does this principle work this way?"</div>
              <div className="text-gray-300 text-sm">Provides underlying theory and mathematical foundations</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-red-400 text-sm font-medium mb-2">Application</div>
              <div className="text-white mb-3">"How would I use this in real life?"</div>
              <div className="text-gray-300 text-sm">Offers practical examples and use cases</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-blue-400 text-sm font-medium mb-2">Connection</div>
              <div className="text-white mb-3">"How does this relate to what we learned earlier?"</div>
              <div className="text-gray-300 text-sm">Links concepts across different video segments</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-green-400 text-sm font-medium mb-2">Problem Solving</div>
              <div className="text-white mb-3">"Can you walk me through this step by step?"</div>
              <div className="text-gray-300 text-sm">Breaks down complex problems into manageable steps</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="text-yellow-400 text-sm font-medium mb-2">Verification</div>
              <div className="text-white mb-3">"Is my understanding correct?"</div>
              <div className="text-gray-300 text-sm">Validates comprehension and corrects misconceptions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Learn at Your Own Pace</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get personalized support whenever you need it, without waiting for office hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Always Available</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-lg opacity-90">Unlimited Questions</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">0.5s</div>
              <div className="text-lg opacity-90">Response Time</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Patient & Kind</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're struggling with concepts or want to explore deeper, AI Tutor adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Struggling Students</h3>
            <p className="text-gray-600 mb-4">
              Get patient, personalized explanations when concepts don't click the first time.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Concept clarification</li>
              <li>• Step-by-step guidance</li>
              <li>• Alternative explanations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Learners</h3>
            <p className="text-gray-600 mb-4">
              Explore deeper connections and advanced applications of core concepts.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Advanced applications</li>
              <li>• Cross-topic connections</li>
              <li>• Research directions</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Groups</h3>
            <p className="text-gray-600 mb-4">
              Facilitate group discussions with an AI that can answer everyone's questions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Group facilitation</li>
              <li>• Diverse perspectives</li>
              <li>• Collaborative learning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Learning Journey Starts Here
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are already getting personalized help with AI Tutor
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Start Learning
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


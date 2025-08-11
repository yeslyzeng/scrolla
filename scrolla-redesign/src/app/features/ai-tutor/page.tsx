'use client';

import { useState } from 'react';

export default function AITutorPage() {
  const [activeDemo, setActiveDemo] = useState('physics');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hi! I\'m your AI tutor. I\'ve analyzed the video content and I\'m ready to help you understand any concepts. What would you like to know?',
      timestamp: '2 min ago'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const demoContent = {
    physics: {
      title: 'Quantum Physics Concepts',
      videoRef: '3Blue1Brown - Quantum Mechanics',
      questions: [
        'What is wave-particle duality?',
        'How does the double-slit experiment work?',
        'What is quantum superposition?',
        'Can you explain the uncertainty principle?'
      ]
    },
    math: {
      title: 'Calculus Fundamentals',
      videoRef: 'Khan Academy - Derivatives',
      questions: [
        'What is the derivative of x²?',
        'How do I find the slope of a tangent line?',
        'What is the chain rule?',
        'Can you explain integration?'
      ]
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: 'Just now'
    };

    const aiResponse = {
      id: messages.length + 2,
      type: 'ai',
      content: `Great question! Based on the video content about ${activeDemo === 'physics' ? 'quantum physics' : 'calculus'}, I can explain this concept in detail. Let me break it down for you...`,
      timestamp: 'Just now'
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputMessage('');
  };

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
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                AI Tutor
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Get instant, personalized help with any concept from your videos. Ask questions, get detailed explanations, and learn at your own pace with our intelligent AI tutor.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Start Chatting
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Chat Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience AI-Powered Tutoring
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI tutor understands video content and provides personalized explanations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">AI Tutor</h3>
                  <p className="text-purple-100 text-sm">Always here to help you learn</p>
                </div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about the video content..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Demo Content Selector & Features */}
          <div className="space-y-6">
            {/* Content Selector */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Content</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveDemo('physics')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'physics'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Quantum Physics
                </button>
                <button
                  onClick={() => setActiveDemo('math')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'math'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Calculus
                </button>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{demoContent[activeDemo as keyof typeof demoContent].title}</h4>
                <p className="text-sm text-gray-600">{demoContent[activeDemo as keyof typeof demoContent].videoRef}</p>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Questions</h3>
              <div className="space-y-2">
                {demoContent[activeDemo as keyof typeof demoContent].questions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(question)}
                    className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Context-aware responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Video content understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Personalized explanations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Tutoring Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI tutor combines advanced natural language processing with deep video understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Context Understanding</h3>
            <p className="text-gray-600 leading-relaxed">
              AI understands the specific video content and provides relevant, contextual explanations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Adapts explanations to your learning level and provides customized examples.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Get help anytime, anywhere. No need to wait for office hours or schedule appointments.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Explanations</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive comprehensive answers with examples, analogies, and step-by-step breakdowns.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Responses</h3>
            <p className="text-gray-600 leading-relaxed">
              No waiting time. Get immediate answers to your questions as you learn.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual References</h3>
            <p className="text-gray-600 leading-relaxed">
              AI can reference specific moments in videos and provide visual context for explanations.
            </p>
          </div>
        </div>
      </div>

      {/* Common Question Types */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Types of Questions AI Tutor Can Answer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Concept Clarification</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"What does this term mean?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"Can you explain this concept in simpler terms?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"How does this relate to what we learned earlier?"</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem Solving</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"Can you walk me through this step-by-step?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"What's the best approach to solve this?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"Where did I go wrong in my solution?"</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-world Applications</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"How is this used in practice?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"Can you give me a real example?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"What careers use this knowledge?"</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Topics</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"What comes next after this topic?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"Can you explain the advanced version?"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">"How does this connect to other subjects?"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Learning Experience
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of students who have revolutionized their study methods with AI tutoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Always Available</div>
              <div className="text-sm text-purple-200 mt-1">Study anytime, anywhere</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Unlimited</div>
              <div className="text-purple-100">Questions Answered</div>
              <div className="text-sm text-purple-200 mt-1">No question is too small</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Instant</div>
              <div className="text-purple-100">Responses</div>
              <div className="text-sm text-purple-200 mt-1">No waiting time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For Every Learning Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're struggling with concepts or want to dive deeper, AI Tutor adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Struggling Students</h3>
            <p className="text-gray-600 leading-relaxed">
              Get personalized help when you're stuck on difficult concepts. No judgment, just clear explanations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Learners</h3>
            <p className="text-gray-600 leading-relaxed">
              Dive deeper into topics with advanced explanations and explore connections to other subjects.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Groups</h3>
            <p className="text-gray-600 leading-relaxed">
              Use AI Tutor as a study partner to discuss concepts and get different perspectives on topics.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Personal AI Tutoring?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start chatting with your AI tutor today and experience personalized learning like never before
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Start Free Trial
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

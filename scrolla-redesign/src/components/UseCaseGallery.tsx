'use client';

import { useState } from 'react';

interface UseCaseDemo {
  id: string;
  title: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  features: {
    notes: string[];
    transcription: string[];
    search: { text: string; timestamp: string; relevance: number }[];
    quiz: { question: string; options: string[]; correct: number };
    chat: { question: string; answer: string };
  };
}

const useCaseDemos: UseCaseDemo[] = [
  {
    id: 'neural-networks',
    title: 'Neural Networks Deep Dive',
    description: 'Explore the fundamentals of neural networks and deep learning with interactive examples.',
    videoTitle: '3Blue1Brown - Neural Networks',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    features: {
      notes: [
        'Neural networks are computational models inspired by biological neural networks',
        'They consist of interconnected nodes (neurons) that process information',
        'Deep learning uses multiple layers to learn complex patterns',
        'Training involves adjusting weights through backpropagation'
      ],
      transcription: [
        '0:15 - Welcome to neural networks',
        '2:30 - Let\'s start with the basics',
        '5:45 - Here\'s how neurons work',
        '8:20 - Now let\'s see training in action'
      ],
      search: [
        { text: 'neural network basics', timestamp: '2:30', relevance: 95 },
        { text: 'how neurons work', timestamp: '5:45', relevance: 88 },
        { text: 'training process', timestamp: '8:20', relevance: 92 }
      ],
      quiz: {
        question: 'What is a neural network?',
        options: ['A computer program', 'A biological brain', 'A computational model', 'A mathematical equation'],
        correct: 2
      },
      chat: {
        question: 'Can you explain neural networks?',
        answer: 'Neural networks are computational models that mimic how biological brains process information.'
      }
    }
  },
  {
    id: 'sushi-making',
    title: 'Sushi Making Masterclass',
    description: 'Learn the art of sushi making from basic techniques to advanced presentations.',
    videoTitle: 'Epicurious - Sushi Making',
    videoUrl: 'https://www.youtube.com/watch?v=nIoOv6lWYnk',
    features: {
      notes: [
        'Sushi rice preparation is crucial for perfect sushi',
        'Fish selection and freshness are key factors',
        'Proper knife techniques ensure clean cuts',
        'Presentation and plating enhance the dining experience'
      ],
      transcription: [
        '1:20 - Let\'s start with the rice',
        '3:45 - Now for the fish selection',
        '6:15 - Watch the knife technique',
        '9:30 - Time for plating'
      ],
      search: [
        { text: 'sushi rice preparation', timestamp: '1:20', relevance: 94 },
        { text: 'fish selection tips', timestamp: '3:45', relevance: 89 },
        { text: 'knife techniques', timestamp: '6:15', relevance: 91 }
      ],
      quiz: {
        question: 'What is most important for sushi?',
        options: ['Expensive ingredients', 'Fresh fish', 'Complex techniques', 'Beautiful plating'],
        correct: 1
      },
      chat: {
        question: 'How do I make sushi rice?',
        answer: 'Start with short-grain rice, rinse thoroughly, and cook with the right water ratio.'
      }
    }
  }
];

export default function UseCaseGallery({ onBack }: { onBack: () => void }) {
  const [selectedDemo, setSelectedDemo] = useState<UseCaseDemo>(useCaseDemos[0]);
  const [activeFeature, setActiveFeature] = useState<'transcription' | 'notes' | 'search' | 'quiz' | 'chat'>('notes');
  
  // Quiz state variables
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Chat state variables
  const [chatMessages, setChatMessages] = useState<{ id: number; type: 'user' | 'ai'; content: string; timestamp: string }[]>([
    {
      id: 1,
      type: 'ai',
      content: 'Hi! I\'m your AI tutor. I\'ve analyzed the video content and I\'m ready to help you understand any concepts. What would you like to know?',
      timestamp: 'Just now'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Quiz questions data
  const quizQuestions = [
    {
      question: "What is the fundamental principle behind neural networks?",
      options: [
        "They use quantum computing",
        "They mimic biological brain connections",
        "They require human supervision",
        "They only work with text data"
      ],
      correct: 1,
      explanation: "Neural networks are inspired by biological neural networks in the brain, where interconnected neurons process information.",
      videoRef: "2:15"
    },
    {
      question: "Which activation function is commonly used in neural networks?",
      options: [
        "Linear function",
        "ReLU (Rectified Linear Unit)",
        "Constant function",
        "Step function"
      ],
      correct: 1,
      explanation: "ReLU is widely used because it helps with the vanishing gradient problem and is computationally efficient.",
      videoRef: "5:42"
    },
    {
      question: "What is backpropagation used for?",
      options: [
        "Forward data flow",
        "Training neural networks",
        "Data visualization",
        "Input preprocessing"
      ],
      correct: 1,
      explanation: "Backpropagation is the algorithm used to train neural networks by adjusting weights based on error calculations.",
      videoRef: "8:30"
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedQuizAnswer(answerIndex);
    setQuizAnswered(true);
    
    if (answerIndex === quizQuestions[currentQuizQuestion].correct) {
      setQuizScore(quizScore + 10);
    }
  };

  const handleChatSend = () => {
    if (chatInput.trim() && chatInput.length < 100) { // Simple input validation
      setChatMessages(prev => [...prev, { id: Date.now(), type: 'user', content: chatInput, timestamp: 'Just now' }]);
      setChatInput('');
      // In a real app, you'd send this to an AI backend
      // For now, we'll simulate an AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', content: `Great question! Based on the video content about ${selectedDemo.title}, I can explain this concept in detail. Let me break it down for you...`, timestamp: 'Just now' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Use Case Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive demonstrations of Scrolla's powerful features with real educational content
          </p>
        </div>
      </div>

      {/* Use Case Selector */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 mb-3">{demo.description}</p>
                  <p className="text-sm font-medium text-blue-600 mb-3">{demo.videoTitle}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Explore Demo</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Preview Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Video Header */}
          <div className="bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedDemo.title}</h2>
                <p className="text-gray-300">{selectedDemo.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Video Source</p>
                <p className="text-white font-medium">{selectedDemo.videoTitle}</p>
              </div>
            </div>
          </div>

          {/* Video Preview Section */}
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Preview</h3>
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
              {selectedDemo.id === 'neural-networks' ? (
                <iframe
                  src="https://www.youtube.com/embed/aircAruvnKk?modestbranding=1&rel=0&showinfo=0"
                  title="Neural Networks - 3Blue1Brown"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/nIoOv6lWYnk?modestbranding=1&rel=0&showinfo=0"
                  title="Sushi Making - Epicurious"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                This is the actual video content that Scrolla analyzes and transforms into interactive learning materials
              </p>
              <a
                href={selectedDemo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1"
              >
                <span>Watch Full Video</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Feature Navigation */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { key: 'notes', label: 'Smart Notes', icon: '📝' },
                { key: 'transcription', label: 'AI Transcription', icon: '🎙️' },
                { key: 'search', label: 'Visual Search', icon: '🔍' },
                { key: 'quiz', label: 'Smart Quiz', icon: '🧠' },
                { key: 'chat', label: 'AI Tutor Chat', icon: '💬' }
              ].map((feature) => (
                <button
                  key={feature.key}
                  onClick={() => setActiveFeature(feature.key as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                    activeFeature === feature.key
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="min-h-[400px]">
              {/* Smart Notes */}
              {activeFeature === 'notes' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Smart Notes</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Export Notes
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedDemo.features.notes.map((note, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Transcription with Timestamps */}
              {activeFeature === 'transcription' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">AI Transcription with Timestamps</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Download Transcript
                    </button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="space-y-4">
                      {selectedDemo.features.transcription.map((segment, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <button 
                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex-shrink-0"
                            onClick={() => {
                              // Simulate jumping to timestamp
                              const videoPlayer = document.querySelector('iframe');
                              if (videoPlayer) {
                                // This would normally seek to the timestamp
                                console.log(`Jumping to ${segment.split(' - ')[0]}`);
                                // For demo purposes, we'll just show an alert
                                alert(`Jumping to ${segment.split(' - ')[0]} - ${segment.split(' - ')[1].substring(0, 50)}...`);
                              }
                            }}
                          >
                            {segment.split(' - ')[0]}
                          </button>
                          <div className="flex-1">
                            <p className="text-gray-900 leading-relaxed">{segment.split(' - ')[1]}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-sm text-gray-500">Confidence: 98%</span>
                              <span className="text-sm text-gray-500">Speaker: AI Tutor</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Search */}
              {activeFeature === 'search' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Visual Search</h2>
                    <div className="flex items-center space-x-4">
                      <input
                        type="text"
                        placeholder="Search for concepts..."
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Search
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedDemo.features.search.map((result, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {result.timestamp}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">{result.relevance}%</span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{result.text}</h4>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="w-20 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                            Jump to →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Smart Quiz */}
              {activeFeature === 'quiz' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Smart Quiz</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">Score: <span className="font-semibold text-blue-600">{quizScore}</span></span>
                      <span className="text-sm text-gray-600">Question: <span className="font-semibold text-blue-600">{currentQuizQuestion + 1}/{quizQuestions.length}</span></span>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    {currentQuizQuestion < quizQuestions.length ? (
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {quizQuestions[currentQuizQuestion].question}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {quizQuestions[currentQuizQuestion].explanation}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuizAnswer(index)}
                              disabled={quizAnswered}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                quizAnswered && index === quizQuestions[currentQuizQuestion].correct
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : quizAnswered && index === selectedQuizAnswer && index !== quizQuestions[currentQuizQuestion].correct
                                  ? 'border-red-500 bg-red-50 text-red-700'
                                  : selectedQuizAnswer === index
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                              {option}
                            </button>
                          ))}
                        </div>
                        
                        {quizAnswered && (
                          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {selectedQuizAnswer === quizQuestions[currentQuizQuestion].correct ? '🎉 Correct!' : '❌ Incorrect'}
                            </h4>
                            <p className="text-gray-700 mb-3">
                              {quizQuestions[currentQuizQuestion].explanation}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>Points earned: {selectedQuizAnswer === quizQuestions[currentQuizQuestion].correct ? 10 : 0}</span>
                              <span>Video reference: {quizQuestions[currentQuizQuestion].videoRef}</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex justify-between">
                          <button
                            onClick={() => {
                              setCurrentQuizQuestion(0);
                              setQuizScore(0);
                              setSelectedQuizAnswer(null);
                              setQuizAnswered(false);
                            }}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                          >
                            Restart Quiz
                          </button>
                          
                          {quizAnswered && (
                            <button
                              onClick={() => {
                                if (currentQuizQuestion < quizQuestions.length - 1) {
                                  setCurrentQuizQuestion(currentQuizQuestion + 1);
                                  setSelectedQuizAnswer(null);
                                  setQuizAnswered(false);
                                }
                              }}
                              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                            >
                              {currentQuizQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quiz Complete! 🎉</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Final Score: <span className="font-bold text-blue-600">{quizScore}</span> out of {quizQuestions.length * 10}
                        </p>
                        <div className="text-sm text-gray-500 mb-6">
                          {quizScore === quizQuestions.length * 10 ? 'Perfect score! Excellent work!' :
                           quizScore >= (quizQuestions.length * 10) * 0.8 ? 'Great job! You really understand the material!' :
                           quizScore >= (quizQuestions.length * 10) * 0.6 ? 'Good effort! Keep studying to improve!' :
                           'Keep practicing! Review the material and try again!'}
                        </div>
                        <button
                          onClick={() => {
                            setCurrentQuizQuestion(0);
                            setQuizScore(0);
                            setSelectedQuizAnswer(null);
                            setQuizAnswered(false);
                          }}
                          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-lg transition-colors"
                        >
                          Take Quiz Again
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* AI Tutor Chat */}
              {activeFeature === 'chat' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">AI Tutor Chat</h2>
                    <button 
                      onClick={() => {
                        setChatMessages([
                          {
                            id: 1,
                            type: 'ai',
                            content: 'Hi! I\'m your AI tutor. I\'ve analyzed the video content and I\'m ready to help you understand any concepts. What would you like to know?',
                            timestamp: 'Just now'
                          }
                        ]);
                        setChatInput('');
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Reset Chat
                    </button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">AI Tutor</h3>
                          <p className="text-purple-100 text-sm">Always here to help you learn</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                      {chatMessages.map((message) => (
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

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex space-x-3">
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                          placeholder="Ask me anything about the video content..."
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          onClick={handleChatSend}
                          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Questions */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <button
                        onClick={() => setChatInput("What is the main concept discussed in this video?")}
                        className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                      >
                        What is the main concept discussed in this video?
                      </button>
                      <button
                        onClick={() => setChatInput("Can you explain the key principles in simpler terms?")}
                        className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                      >
                        Can you explain the key principles in simpler terms?
                      </button>
                      <button
                        onClick={() => setChatInput("How does this relate to real-world applications?")}
                        className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                      >
                        How does this relate to real-world applications?
                      </button>
                      <button
                        onClick={() => setChatInput("What are the most important takeaways?")}
                        className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                      >
                        What are the most important takeaways?
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

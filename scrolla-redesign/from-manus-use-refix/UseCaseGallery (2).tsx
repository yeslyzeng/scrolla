'use client';

import { useState } from 'react';

interface UseCaseDemo {
  id: string;
  title: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  embedId: string;
  features: {
    notes: { timestamp: string; title: string; content: string; keyPoints?: string[] }[];
    transcription: { timestamp: string; text: string; seconds: number }[];
    search: { text: string; timestamp: string; relevance: number; seconds: number; title: string; description: string }[];
    quiz: { question: string; options: string[]; correct: number; explanation: string; videoRef: string }[];
    chat: { question: string; answer: string }[];
  };
}

const useCaseDemos: UseCaseDemo[] = [
  {
    id: 'neural-networks',
    title: 'Neural Networks Deep Dive',
    description: 'Explore the fundamentals of neural networks and deep learning with interactive examples.',
    videoTitle: '3Blue1Brown - Neural Networks',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    embedId: 'aircAruvnKk',
    features: {
      notes: [
        {
          timestamp: '2:15',
          title: 'Neural Network Basics',
          content: 'Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information through weighted connections.',
          keyPoints: [
            'Inspired by biological brain structure',
            'Made of interconnected nodes (neurons)',
            'Process information through weighted connections',
            'Foundation of modern AI systems'
          ]
        },
        {
          timestamp: '5:42',
          title: 'Deep Learning Architecture',
          content: 'Deep learning uses multiple layers to learn complex patterns. Each layer transforms the input data, allowing the network to learn hierarchical representations.',
          keyPoints: [
            'Multiple layers for complex pattern recognition',
            'Hierarchical feature learning',
            'Each layer transforms input data',
            'Enables learning of abstract concepts'
          ]
        },
        {
          timestamp: '8:30',
          title: 'Training & Backpropagation',
          content: 'Training involves adjusting weights through backpropagation. The network learns by minimizing the difference between predicted and actual outputs.',
          keyPoints: [
            'Backpropagation adjusts network weights',
            'Minimizes prediction errors',
            'Iterative learning process',
            'Gradient descent optimization'
          ]
        }
      ],
      transcription: [
        { 
          timestamp: '0:15', 
          text: 'But what is a neural network? To get started, let me show you what a neural network actually is, assuming no background.', 
          seconds: 15 
        },
        { 
          timestamp: '2:30', 
          text: 'We\'ll start with the most basic component. Here you see a network with just one neuron. This neuron has three inputs, corresponding to the three pixel brightness values.', 
          seconds: 150 
        },
        { 
          timestamp: '5:45', 
          text: 'The neuron itself has some number associated with it, called its activation. And the idea is that this activation represents how positive the corresponding weighted sum is.', 
          seconds: 345 
        },
        { 
          timestamp: '8:20', 
          text: 'But of course, for the network to actually learn, we need some way to adjust these weights and biases based on data. That\'s where backpropagation comes in.', 
          seconds: 500 
        }
      ],
      search: [
        { 
          text: 'neural network definition', 
          timestamp: '2:15', 
          relevance: 95, 
          seconds: 150,
          title: 'What is a Neural Network?',
          description: 'Basic explanation of neural networks and their biological inspiration'
        },
        { 
          text: 'neuron activation function', 
          timestamp: '5:45', 
          relevance: 88, 
          seconds: 345,
          title: 'How Neurons Work',
          description: 'Detailed explanation of neuron activation and weighted sums'
        },
        { 
          text: 'backpropagation training', 
          timestamp: '8:20', 
          relevance: 92, 
          seconds: 500,
          title: 'Training Process',
          description: 'How neural networks learn through backpropagation algorithm'
        }
      ],
      quiz: [
        {
          question: 'What is a neural network?',
          options: ['A computer program', 'A biological brain', 'A computational model inspired by biological brains', 'A mathematical equation'],
          correct: 2,
          explanation: 'Neural networks are computational models that mimic how biological brains process information through interconnected neurons.',
          videoRef: '2:15'
        },
        {
          question: 'What is backpropagation used for?',
          options: ['Forward data flow', 'Training neural networks by adjusting weights', 'Data visualization', 'Input preprocessing'],
          correct: 1,
          explanation: 'Backpropagation is the algorithm used to train neural networks by calculating gradients and adjusting weights to minimize error.',
          videoRef: '8:30'
        }
      ],
      chat: [
        { question: 'Can you explain neural networks?', answer: 'Neural networks are computational models that mimic how biological brains process information. They consist of interconnected nodes called neurons that process data through weighted connections.' },
        { question: 'How do neural networks learn?', answer: 'Neural networks learn through a process called training, where they adjust their internal weights based on examples. This is typically done using backpropagation to minimize prediction errors.' },
        { question: 'What makes deep learning "deep"?', answer: 'Deep learning is called "deep" because it uses neural networks with many layers (typically more than 3). Each layer learns increasingly complex features from the data.' }
      ]
    }
  },
  {
    id: 'sushi-making',
    title: 'Sushi Making Masterclass',
    description: 'Learn the art of sushi making from basic techniques to advanced presentations.',
    videoTitle: 'Epicurious - Sushi Making',
    videoUrl: 'https://www.youtube.com/watch?v=nIoOv6lWYnk',
    embedId: 'nIoOv6lWYnk',
    features: {
      notes: [
        {
          timestamp: '1:30',
          title: 'Rice Preparation',
          content: 'Perfect sushi rice is the foundation of great sushi. The rice must be seasoned with rice vinegar, sugar, and salt while still warm.',
          keyPoints: [
            'Use short-grain Japanese rice',
            'Season while rice is still warm',
            'Rice vinegar, sugar, and salt mixture',
            'Cool to room temperature before use'
          ]
        },
        {
          timestamp: '4:20',
          title: 'Fish Selection & Cutting',
          content: 'Fresh, sushi-grade fish is essential. Learn proper knife techniques for clean, precise cuts that enhance both flavor and presentation.',
          keyPoints: [
            'Only use sushi-grade fish',
            'Sharp knife is essential',
            'Cut against the grain',
            'Consistent thickness for even cooking'
          ]
        }
      ],
      transcription: [
        { timestamp: '0:30', text: 'Today we\'re going to learn how to make authentic sushi at home', seconds: 30 },
        { timestamp: '1:30', text: 'First, let\'s start with the most important component - the rice', seconds: 90 },
        { timestamp: '4:20', text: 'Now we\'ll move on to preparing our fish with proper knife techniques', seconds: 260 }
      ],
      search: [
        { 
          text: 'rice preparation', 
          timestamp: '1:30', 
          relevance: 98, 
          seconds: 90,
          title: 'Perfect Sushi Rice',
          description: 'Learn the traditional method for preparing seasoned sushi rice'
        },
        { 
          text: 'fish cutting technique', 
          timestamp: '4:20', 
          relevance: 94, 
          seconds: 260,
          title: 'Knife Skills',
          description: 'Professional fish cutting techniques for sushi preparation'
        }
      ],
      quiz: [
        {
          question: 'What type of rice is best for sushi?',
          options: ['Long-grain rice', 'Short-grain Japanese rice', 'Brown rice', 'Wild rice'],
          correct: 1,
          explanation: 'Short-grain Japanese rice has the right texture and stickiness needed for sushi.',
          videoRef: '1:30'
        }
      ],
      chat: [
        { question: 'How do I prepare sushi rice?', answer: 'Cook short-grain Japanese rice, then season it with a mixture of rice vinegar, sugar, and salt while it\'s still warm. Let it cool to room temperature before using.' }
      ]
    }
  }
];

export default function UseCaseGallery() {
  const [selectedDemo, setSelectedDemo] = useState<UseCaseDemo>(useCaseDemos[0]);
  const [activeFeature, setActiveFeature] = useState<'notes' | 'transcription' | 'search' | 'quiz' | 'chat'>('notes');
  
  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  // Chat state
  const [chatMessages, setChatMessages] = useState<{ type: 'user' | 'ai'; content: string; timestamp: string }[]>([]);
  const [chatInput, setChatInput] = useState('');

  const jumpToTimestamp = (seconds: number) => {
    alert(`Jumping to ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')} in video`);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === selectedDemo.features.quiz[currentQuizIndex].correct) {
      setQuizScore(prev => prev + 10);
    }
    
    if (!completedQuestions.includes(currentQuizIndex)) {
      setCompletedQuestions(prev => [...prev, currentQuizIndex]);
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex < selectedDemo.features.quiz.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      const userMessage = {
        type: 'user' as const,
        content: chatInput,
        timestamp: new Date().toLocaleTimeString()
      };
      
      // Find relevant answer from predefined responses
      const relevantResponse = selectedDemo.features.chat.find(item => 
        chatInput.toLowerCase().includes(item.question.toLowerCase().split(' ')[2]) || // Simple keyword matching
        item.question.toLowerCase().includes(chatInput.toLowerCase().split(' ')[0])
      );
      
      const aiMessage = {
        type: 'ai' as const,
        content: relevantResponse?.answer || `That's a great question about "${chatInput}". Based on the video content, I can help you understand this concept better. The video covers this topic around the ${selectedDemo.features.notes[0]?.timestamp} mark.`,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatMessages(prev => [...prev, userMessage, aiMessage]);
      setChatInput('');
    }
  };

  const clearChat = () => {
    setChatMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Interactive Use Case Gallery</h1>
              <p className="text-gray-600 mt-2">Experience Scrolla's powerful features with real educational content. Try all the interactive features below!</p>
            </div>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Demo Selection */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {useCaseDemos.map((demo) => (
            <div
              key={demo.id}
              onClick={() => setSelectedDemo(demo)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                selectedDemo.id === demo.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{demo.title}</h3>
              <p className="text-gray-600 mb-3">{demo.description}</p>
              <p className="text-sm text-blue-600 font-medium">{demo.videoTitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Interactive Demo Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Demo Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedDemo.title}</h2>
                <p className="text-blue-100">{selectedDemo.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-200">Video Source</p>
                <p className="font-medium">{selectedDemo.videoTitle}</p>
              </div>
            </div>
          </div>

          {/* Video Section - Top */}
          <div className="p-6 border-b border-gray-200">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video Preview
              </h3>
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden max-w-4xl mx-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedDemo.embedId}?modestbranding=1&rel=0&showinfo=0`}
                  title={selectedDemo.videoTitle}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex items-center justify-between max-w-4xl mx-auto">
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
          </div>

          {/* Feature Navigation */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { key: 'notes', label: 'Smart Notes', icon: '📝', color: 'blue' },
                { key: 'transcription', label: 'AI Transcription', icon: '🎙️', color: 'green' },
                { key: 'search', label: 'Visual Search', icon: '🔍', color: 'purple' },
                { key: 'quiz', label: 'Smart Quiz', icon: '🧠', color: 'orange' },
                { key: 'chat', label: 'AI Tutor Chat', icon: '💬', color: 'pink' }
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
          </div>

          {/* Feature Content */}
          <div className="p-6 min-h-[500px]">
            {/* Smart Notes - Key Insights & Summaries */}
            {activeFeature === 'notes' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Smart Notes</h3>
                    <p className="text-gray-600 mt-1">AI-generated key insights and summaries from the video content</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Export Notes
                  </button>
                </div>
                
                <div className="space-y-4">
                  {selectedDemo.features.notes.map((note, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 cursor-pointer hover:bg-blue-600 transition-colors">
                          {note.timestamp}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <h4 className="text-lg font-semibold text-gray-900">{note.title}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3">{note.content}</p>
                          {note.keyPoints && (
                            <div className="bg-white rounded-lg p-3 border border-blue-100">
                              <p className="text-sm font-medium text-blue-700 mb-2">Key Points:</p>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {note.keyPoints.map((point, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Transcription - Full Spoken Text */}
            {activeFeature === 'transcription' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">AI Transcription with Timestamps</h3>
                    <p className="text-gray-600 mt-1">Complete spoken text from the video with clickable timestamps</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Download Transcript
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <h4 className="text-lg font-semibold text-gray-900">Full Video Transcript</h4>
                  </div>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {selectedDemo.features.transcription.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-green-100 hover:border-green-200 transition-colors">
                        <button
                          onClick={() => jumpToTimestamp(item.seconds)}
                          className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex-shrink-0 hover:bg-green-600 transition-colors flex items-center space-x-1"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m2 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z" />
                          </svg>
                          <span>{item.timestamp}</span>
                        </button>
                        <p className="text-gray-700 leading-relaxed flex-1 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-700">
                      💡 <strong>Tip:</strong> Click any timestamp to jump to that moment in the video above
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Search - Instant Content Finding */}
            {activeFeature === 'search' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Visual Search</h3>
                    <p className="text-gray-600 mt-1">Search and instantly find any moment in the video with AI-powered content recognition</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                  {/* Search Input */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h4 className="text-lg font-semibold text-gray-900">Search Video Content</h4>
                    </div>
                    <input
                      type="text"
                      placeholder="Try searching: 'neural network', 'backpropagation', 'layers'..."
                      className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 bg-white"
                    />
                  </div>
                  
                  {/* Search Results */}
                  <div className="space-y-3">
                    <h5 className="text-md font-semibold text-gray-900 mb-3">Search Results (3 found)</h5>
                    {selectedDemo.features.search.map((result, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-purple-100 hover:border-purple-200 transition-colors">
                        <div className="flex items-start space-x-4">
                          <div className="w-24 h-16 bg-gray-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m2 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <button
                                onClick={() => jumpToTimestamp(result.seconds)}
                                className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors"
                              >
                                {result.timestamp}
                              </button>
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                                {result.relevance}% match
                              </span>
                            </div>
                            <h6 className="font-semibold text-gray-900 mb-1">{result.title}</h6>
                            <p className="text-sm text-gray-600">{result.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <p className="text-sm text-purple-700">
                      🔍 <strong>How it works:</strong> AI analyzes video content, speech, and visuals to find exactly what you're looking for
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Smart Quiz */}
            {activeFeature === 'quiz' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Smart Quiz</h3>
                    <p className="text-gray-600 mt-1">Test your understanding with interactive questions based on the video content</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Score</p>
                    <p className="text-2xl font-bold text-orange-500">{quizScore}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Question {currentQuizIndex + 1} of {selectedDemo.features.quiz.length}
                      </span>
                      <span className="text-sm text-gray-600">
                        Video Reference: {selectedDemo.features.quiz[currentQuizIndex].videoRef}
                      </span>
                    </div>
                    <div className="text-sm text-orange-600 font-medium">
                      +10 points for correct answer
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    {selectedDemo.features.quiz[currentQuizIndex].question}
                  </h4>

                  <div className="space-y-3 mb-6">
                    {selectedDemo.features.quiz[currentQuizIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          showExplanation
                            ? index === selectedDemo.features.quiz[currentQuizIndex].correct
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : index === selectedAnswer && index !== selectedDemo.features.quiz[currentQuizIndex].correct
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-gray-200 bg-gray-50 text-gray-500'
                            : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  {showExplanation && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Explanation</h5>
                          <p className="text-gray-700">{selectedDemo.features.quiz[currentQuizIndex].explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <button
                      onClick={prevQuestion}
                      disabled={currentQuizIndex === 0}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      {selectedDemo.features.quiz.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentQuizIndex
                              ? 'bg-orange-500'
                              : completedQuestions.includes(index)
                              ? 'bg-green-500'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextQuestion}
                      disabled={currentQuizIndex === selectedDemo.features.quiz.length - 1}
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* AI Tutor Chat */}
            {activeFeature === 'chat' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">AI Tutor Chat</h3>
                    <p className="text-gray-600 mt-1">Ask questions about the video content and get instant, contextual answers</p>
                  </div>
                  <button
                    onClick={clearChat}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Clear Chat
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200 overflow-hidden">
                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-6 space-y-4">
                    {chatMessages.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.544-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                        </svg>
                        <p>Start a conversation! Ask me anything about the video content.</p>
                      </div>
                    ) : (
                      chatMessages.map((message, index) => (
                        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.type === 'user'
                              ? 'bg-pink-500 text-white'
                              : 'bg-white text-gray-900 border border-gray-200'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-pink-200' : 'text-gray-500'}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                        placeholder="Ask me anything about the video content..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                      />
                      <button
                        onClick={handleChatSend}
                        disabled={!chatInput.trim()}
                        className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Quick Questions */}
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedDemo.features.chat.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => setChatInput(item.question)}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {item.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


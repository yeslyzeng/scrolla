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
    notes: { timestamp: string; title: string; content: string }[];
    transcription: { timestamp: string; text: string; seconds: number }[];
    search: { text: string; timestamp: string; relevance: number; seconds: number }[];
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
          content: 'Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information through weighted connections.'
        },
        {
          timestamp: '5:42',
          title: 'Deep Learning Layers',
          content: 'Deep learning uses multiple layers to learn complex patterns. Each layer transforms the input data, allowing the network to learn hierarchical representations.'
        },
        {
          timestamp: '8:30',
          title: 'Training Process',
          content: 'Training involves adjusting weights through backpropagation. The network learns by minimizing the difference between predicted and actual outputs.'
        }
      ],
      transcription: [
        { timestamp: '0:15', text: 'Welcome to neural networks', seconds: 15 },
        { timestamp: '2:30', text: 'Let\'s start with the basics of how neural networks work', seconds: 150 },
        { timestamp: '5:45', text: 'Here\'s how individual neurons process information', seconds: 345 },
        { timestamp: '8:20', text: 'Now let\'s see the training process in action', seconds: 500 }
      ],
      search: [
        { text: 'neural network basics', timestamp: '2:30', relevance: 95, seconds: 150 },
        { text: 'how neurons work', timestamp: '5:45', relevance: 88, seconds: 345 },
        { text: 'training process', timestamp: '8:20', relevance: 92, seconds: 500 }
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
          timestamp: '1:20',
          title: 'Sushi Rice Preparation',
          content: 'Sushi rice preparation is crucial for perfect sushi. The rice must be properly seasoned with rice vinegar, sugar, and salt while still warm.'
        },
        {
          timestamp: '3:45',
          title: 'Fish Selection',
          content: 'Fish selection and freshness are key factors. Look for bright colors, firm texture, and no fishy smell when selecting sashimi-grade fish.'
        },
        {
          timestamp: '6:15',
          title: 'Knife Techniques',
          content: 'Proper knife techniques ensure clean cuts. Use a sharp, wet knife and cut in one smooth motion to avoid tearing the fish.'
        }
      ],
      transcription: [
        { timestamp: '1:20', text: 'Let\'s start with the most important part - the sushi rice', seconds: 80 },
        { timestamp: '3:45', text: 'Now for the fish selection - this is crucial', seconds: 225 },
        { timestamp: '6:15', text: 'Watch carefully as I demonstrate the knife technique', seconds: 375 },
        { timestamp: '9:30', text: 'Time for plating and presentation', seconds: 570 }
      ],
      search: [
        { text: 'sushi rice preparation', timestamp: '1:20', relevance: 94, seconds: 80 },
        { text: 'fish selection tips', timestamp: '3:45', relevance: 89, seconds: 225 },
        { text: 'knife techniques', timestamp: '6:15', relevance: 91, seconds: 375 }
      ],
      quiz: [
        {
          question: 'What is most important for good sushi?',
          options: ['Expensive ingredients', 'Fresh, high-quality fish', 'Complex techniques', 'Beautiful plating'],
          correct: 1,
          explanation: 'Fresh, high-quality fish is the foundation of good sushi. Without fresh fish, even perfect technique cannot create great sushi.',
          videoRef: '3:45'
        },
        {
          question: 'How should sushi rice be prepared?',
          options: ['With soy sauce', 'With rice vinegar, sugar, and salt', 'Plain white rice', 'With wasabi mixed in'],
          correct: 1,
          explanation: 'Sushi rice is seasoned with a mixture of rice vinegar, sugar, and salt while the rice is still warm to achieve the proper flavor and texture.',
          videoRef: '1:20'
        }
      ],
      chat: [
        { question: 'How do I make sushi rice?', answer: 'Start with short-grain rice, rinse thoroughly until water runs clear, cook with the right water ratio (1:1.1), then season with rice vinegar, sugar, and salt while warm.' },
        { question: 'What fish is best for beginners?', answer: 'For beginners, I recommend starting with salmon or tuna as they are easier to work with and widely available in sashimi grade from good fish markets.' },
        { question: 'Do I need special equipment?', answer: 'You\'ll need a sharp knife, bamboo mat for rolling, and ideally a wooden bowl for mixing rice. A rice cooker helps but isn\'t essential.' }
      ]
    }
  }
];

export default function UseCaseGallery({ onBack }: { onBack: () => void }) {
  const [selectedDemo, setSelectedDemo] = useState<UseCaseDemo>(useCaseDemos[0]);
  const [activeFeature, setActiveFeature] = useState<'notes' | 'transcription' | 'search' | 'quiz' | 'chat'>('notes');
  
  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  // Chat state
  const [chatMessages, setChatMessages] = useState<{ id: number; type: 'user' | 'ai'; content: string; timestamp: string }[]>([
    {
      id: 1,
      type: 'ai',
      content: `Hi! I'm your AI tutor for "${selectedDemo.title}". I've analyzed the video content and I'm ready to help you understand any concepts. What would you like to know?`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Video player reference (simulated)
  const jumpToTimestamp = (seconds: number) => {
    // In a real implementation, this would control the video player
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timestamp = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    alert(`Jumping to ${timestamp} in the video player`);
    // You would implement actual video seeking here
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
        id: Date.now(),
        type: 'user' as const,
        content: chatInput,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setChatInput('');
      
      // Find relevant answer from predefined responses
      const relevantResponse = selectedDemo.features.chat.find(item => 
        chatInput.toLowerCase().includes(item.question.toLowerCase().split(' ')[2]) || // Simple keyword matching
        item.question.toLowerCase().includes(chatInput.toLowerCase().split(' ')[0])
      );
      
      setTimeout(() => {
        const aiMessage = {
          id: Date.now() + 1,
          type: 'ai' as const,
          content: relevantResponse ? relevantResponse.answer : `That's a great question about ${selectedDemo.title}! Based on the video content, I can help explain this concept. The key points to understand are the fundamental principles shown in the demonstration.`,
          timestamp: new Date().toLocaleTimeString()
        };
        setChatMessages(prev => [...prev, aiMessage]);
      }, 1000);
    }
  };

  // Reset states when demo changes
  const handleDemoChange = (demo: UseCaseDemo) => {
    setSelectedDemo(demo);
    setActiveFeature('notes');
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setCompletedQuestions([]);
    setChatMessages([
      {
        id: 1,
        type: 'ai',
        content: `Hi! I'm your AI tutor for "${demo.title}". I've analyzed the video content and I'm ready to help you understand any concepts. What would you like to know?`,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
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
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Use Case Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience Scrolla's powerful features with real educational content. Try all the interactive features below!
          </p>
        </div>
      </div>

      {/* Use Case Selector - Simplified without cover images */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCaseDemos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => handleDemoChange(demo)}
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
                  <p className="text-sm font-medium text-blue-600">{demo.videoTitle}</p>
                </div>
              </div>
            </button>
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
            {/* Smart Notes */}
            {activeFeature === 'notes' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">Smart Notes</h3>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Export Notes
                  </button>
                </div>
                
                <div className="space-y-4">
                  {selectedDemo.features.notes.map((note, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                          {note.timestamp}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{note.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Transcription with Timestamps - Fixed jumping functionality */}
            {activeFeature === 'transcription' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">AI Transcription with Timestamps</h3>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Download Transcript
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="space-y-4">
                    {selectedDemo.features.transcription.map((segment, index) => (
                      <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <button
                          onClick={() => jumpToTimestamp(segment.seconds)}
                          className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-green-600 transition-colors flex-shrink-0"
                        >
                          {segment.timestamp}
                        </button>
                        <p className="text-gray-700 leading-relaxed flex-1">{segment.text}</p>
                        <button
                          onClick={() => jumpToTimestamp(segment.seconds)}
                          className="text-green-500 hover:text-green-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
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
                  <h3 className="text-2xl font-semibold text-gray-900">Visual Search</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search video content..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                      Search
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDemo.features.search.map((result, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <button
                          onClick={() => jumpToTimestamp(result.seconds)}
                          className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors"
                        >
                          {result.timestamp}
                        </button>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${result.relevance >= 90 ? 'bg-green-500' : result.relevance >= 80 ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                          <span className="text-xs text-gray-500">{result.relevance}%</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{result.text}</p>
                      <button
                        onClick={() => jumpToTimestamp(result.seconds)}
                        className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
                      >
                        Jump to moment →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Smart Quiz - Fully Interactive */}
            {activeFeature === 'quiz' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">Smart Quiz</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600">
                      Score: <span className="font-bold text-orange-600">{quizScore} points</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Question {currentQuizIndex + 1} of {selectedDemo.features.quiz.length}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedDemo.features.quiz[currentQuizIndex].videoRef}
                      </span>
                      <div className="text-sm text-gray-500">
                        +10 points for correct answer
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {selectedDemo.features.quiz[currentQuizIndex].question}
                    </h4>
                  </div>

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

            {/* AI Tutor Chat - Fully Interactive */}
            {activeFeature === 'chat' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">AI Tutor Chat</h3>
                  <button
                    onClick={() => setChatMessages([{
                      id: 1,
                      type: 'ai',
                      content: `Hi! I'm your AI tutor for "${selectedDemo.title}". I've analyzed the video content and I'm ready to help you understand any concepts. What would you like to know?`,
                      timestamp: new Date().toLocaleTimeString()
                    }])}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Clear Chat
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-6 space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-pink-500 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
                        </div>
                      </div>
                    ))}
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
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-sm text-gray-500">Quick questions:</span>
                      {selectedDemo.features.chat.slice(0, 3).map((item, index) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


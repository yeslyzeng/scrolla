'use client';

import { useState } from 'react';

export default function KnowledgeQuestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(1250);
  const [streak, setStreak] = useState(7);

  const questData = {
    title: 'Quantum Physics Mastery',
    progress: 65,
    questions: [
      {
        id: 1,
        question: 'What is the fundamental principle behind the double-slit experiment?',
        options: [
          'Light always behaves as a wave',
          'Particles can exist in multiple states simultaneously',
          'Observation affects quantum behavior',
          'Energy is quantized in discrete packets'
        ],
        correct: 2,
        explanation: 'The double-slit experiment demonstrates that observation affects quantum behavior. When unobserved, particles create interference patterns like waves, but when observed, they behave like particles.',
        points: 100,
        difficulty: 'Medium',
        videoRef: '3:45'
      },
      {
        id: 2,
        question: 'Which equation describes the energy of a photon?',
        options: [
          'E = mc²',
          'E = hf',
          'E = ½mv²',
          'E = mgh'
        ],
        correct: 1,
        explanation: 'The energy of a photon is given by E = hf, where h is Planck\'s constant and f is the frequency of the electromagnetic radiation.',
        points: 75,
        difficulty: 'Easy',
        videoRef: '7:22'
      }
    ]
  };

  const achievements = [
    { name: 'Quick Learner', description: 'Completed 5 quests in one day', icon: '⚡', unlocked: true },
    { name: 'Perfect Score', description: 'Achieved 100% on a quest', icon: '🎯', unlocked: true },
    { name: 'Streak Master', description: 'Maintained 7-day learning streak', icon: '🔥', unlocked: true },
    { name: 'Knowledge Seeker', description: 'Completed 10 different topics', icon: '🔍', unlocked: false },
    { name: 'Quiz Champion', description: 'Answered 100 questions correctly', icon: '👑', unlocked: false },
    { name: 'Deep Thinker', description: 'Completed advanced difficulty quests', icon: '🧠', unlocked: false }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', score: 2850, avatar: '👨‍🎓' },
    { rank: 2, name: 'Sarah Kim', score: 2720, avatar: '👩‍🔬' },
    { rank: 3, name: 'You', score: 1250, avatar: '🎓', isUser: true },
    { rank: 4, name: 'Mike Johnson', score: 1180, avatar: '👨‍💻' },
    { rank: 5, name: 'Emma Davis', score: 1050, avatar: '👩‍🎓' }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
  };

  const currentQ = questData.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
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
              <a href="#" className="text-pink-600 font-medium">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Knowledge Quest</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Turn Learning Into{' '}
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                An Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Gamify your learning experience with interactive quizzes, achievements, and competitive challenges. Test your knowledge, earn points, and climb the leaderboard while mastering new concepts.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Start Your Quest
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quiz Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Interactive Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Knowledge Quest makes learning engaging and competitive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quiz Interface */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Question {currentQuestion + 1}/{questData.questions.length}
                  </span>
                  <span className="text-pink-600 font-medium">Score: {score}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Difficulty</div>
                  <div className="text-pink-600 font-medium">{currentQ.difficulty}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h3>
              
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showResult && index === currentQ.correct
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : showResult && index === selectedAnswer && index !== currentQ.correct
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : selectedAnswer === index
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {selectedAnswer === currentQ.correct ? '🎉 Correct!' : '❌ Incorrect'}
                  </h4>
                  <p className="text-gray-700 mb-3">{currentQ.explanation}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Points earned: {selectedAnswer === currentQ.correct ? currentQ.points : 0}</span>
                    <span>Video reference: {currentQ.videoRef}</span>
                  </div>
                </div>
              )}

              {showResult && (
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => {
                      setShowResult(false);
                      setSelectedAnswer(null);
                      if (currentQuestion < questData.questions.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      }
                    }}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {currentQuestion < questData.questions.length - 1 ? 'Next Question' : 'Finish Quest'}
                  </button>
                  <button
                    onClick={() => {
                      setShowResult(false);
                      setSelectedAnswer(null);
                      setCurrentQuestion(0);
                    }}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Restart
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Progress & Stats */}
          <div className="space-y-6">
            {/* Quest Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quest Progress</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{questData.title}</span>
                  <span className="text-sm font-medium text-pink-600">{questData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${questData.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Current Streak: {streak} days</span>
                <span>Total Score: {score}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border text-center ${
                      achievement.unlocked
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className={`text-sm font-medium ${
                      achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </div>
                    <div className={`text-xs ${
                      achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h3>
              <div className="space-y-3">
                {leaderboard.map((player, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      player.isUser ? 'bg-pink-50 border border-pink-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-400 text-white' :
                        index === 1 ? 'bg-gray-300 text-white' :
                        index === 2 ? 'bg-orange-400 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {player.rank}
                      </div>
                      <span className="text-lg">{player.avatar}</span>
                      <span className={`font-medium ${
                        player.isUser ? 'text-pink-600' : 'text-gray-900'
                      }`}>
                        {player.name}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-700">{player.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quest Types */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Different Types of Quests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from various quest formats to match your learning style and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Fire</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fast-paced questions to test your knowledge and build confidence
            </p>
            <div className="text-sm text-pink-600 font-medium">5-10 questions • 2-3 minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🧩</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Puzzle Mode</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complex problems that require deep thinking and problem-solving skills
            </p>
            <div className="text-sm text-orange-600 font-medium">3-5 questions • 10-15 minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Championship</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Competitive challenges against other learners with real-time rankings
            </p>
            <div className="text-sm text-yellow-600 font-medium">10-15 questions • 20-30 minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Mode</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Comprehensive quizzes covering entire topics with detailed explanations
            </p>
            <div className="text-sm text-green-600 font-medium">15-25 questions • 30-45 minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus Mode</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Targeted practice on specific concepts you want to master
            </p>
            <div className="text-sm text-blue-600 font-medium">5-8 questions • 10-15 minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed Run</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Beat the clock while answering questions as quickly as possible
            </p>
            <div className="text-sm text-purple-600 font-medium">10 questions • 5 minutes</div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Gamification Works
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Proven benefits of turning learning into an engaging game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-pink-100">Higher Engagement</div>
              <div className="text-sm text-pink-200 mt-1">Students stay motivated longer</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-pink-100">Completion Rate</div>
              <div className="text-sm text-pink-200 mt-1">Higher than traditional methods</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5x</div>
              <div className="text-pink-100">Better Retention</div>
              <div className="text-sm text-pink-200 mt-1">Active learning improves memory</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For Every Learning Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classrooms to corporate training, Knowledge Quest adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Classrooms</h3>
            <p className="text-gray-600 leading-relaxed">
              Engage students with interactive quizzes and friendly competition. Track progress and identify areas for improvement.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Study</h3>
            <p className="text-gray-600 leading-relaxed">
              Stay motivated with personal achievements and progress tracking. Learn at your own pace with adaptive difficulty.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2v2m-8 0v2a2 2 0 002 2h8a2 2 0 002-2V8m-8 0V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Training</h3>
            <p className="text-gray-600 leading-relaxed">
              Make employee training engaging and measurable. Track completion rates and knowledge retention across teams.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Learning Adventure?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of learners who have transformed their study experience with Knowledge Quest
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Start Free Quest
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

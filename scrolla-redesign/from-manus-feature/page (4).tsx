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
              Learn Through{' '}
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transform learning into an exciting quest with interactive challenges, achievements, and rewards. Test your understanding, earn points, and compete with friends while mastering new concepts.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
                Start Quest
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                View Challenges
              </button>
            </div>
          </div>
        </div>

        {/* Floating Game Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-bounce delay-2000"></div>
      </div>

      {/* Interactive Quest Demo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gamified Learning Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience learning like never before with quests, achievements, and friendly competition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quest Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Quest Header */}
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold">{questData.title}</h3>
                    <p className="text-pink-100">Question {currentQuestion + 1} of {questData.questions.length}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{score}</div>
                    <div className="text-pink-100 text-sm">Points</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-500"
                      style={{ width: `${questData.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-pink-100 text-sm mt-1">{questData.progress}% Complete</div>
                </div>
              </div>

              {/* Question Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      {currentQ.difficulty}
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      +{currentQ.points} pts
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Referenced at {currentQ.videoRef}
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h4>

                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        showResult
                          ? index === currentQ.correct
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : index === selectedAnswer && index !== currentQ.correct
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-200 bg-gray-50 text-gray-500'
                          : 'border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50'
                      }`}
                    >
                      <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Explanation</h5>
                        <p className="text-gray-700">{currentQ.explanation}</p>
                      </div>
                    </div>
                  </div>
                )}

                {showResult && (
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center space-x-4">
                      {selectedAnswer === currentQ.correct ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">Correct! +{currentQ.points} points</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-red-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">Try again next time!</span>
                        </div>
                      )}
                    </div>
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                      Next Question
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Score</span>
                  <span className="font-bold text-pink-600">{score}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Learning Streak</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-orange-600">{streak}</span>
                    <span className="text-orange-600">🔥</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rank</span>
                  <span className="font-bold text-purple-600">#3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Quests Completed</span>
                  <span className="font-bold text-green-600">12</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.unlocked ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <span className="text-2xl">{achievement.unlocked ? achievement.icon : '🔒'}</span>
                    <div className="flex-1">
                      <div className={`font-medium ${achievement.unlocked ? 'text-green-700' : 'text-gray-500'}`}>
                        {achievement.name}
                      </div>
                      <div className={`text-xs ${achievement.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Leaderboard */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h3>
              <div className="space-y-2">
                {leaderboard.slice(0, 5).map((player, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${
                    player.isUser ? 'bg-pink-50 border border-pink-200' : 'hover:bg-gray-50'
                  }`}>
                    <span className="text-sm font-medium text-gray-500 w-6">#{player.rank}</span>
                    <span className="text-lg">{player.avatar}</span>
                    <div className="flex-1">
                      <div className={`font-medium ${player.isUser ? 'text-pink-700' : 'text-gray-900'}`}>
                        {player.name}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-600">{player.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gamification Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how game mechanics make learning more engaging and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Progressive Challenges</h3>
            <p className="text-gray-600">
              Questions adapt to your skill level, providing the right amount of challenge to keep you engaged and growing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Points & Rewards</h3>
            <p className="text-gray-600">
              Earn points for correct answers, maintain streaks for bonuses, and unlock achievements as you progress.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Competition</h3>
            <p className="text-gray-600">
              Compete with friends and classmates on leaderboards, share achievements, and motivate each other to learn.
            </p>
          </div>
        </div>

        {/* Quest Types */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Quest Types</h3>
            <p className="text-gray-300">
              Different challenge formats to keep learning fresh and exciting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <div className="text-white font-semibold mb-2">Quick Fire</div>
              <div className="text-gray-300 text-sm">Fast-paced questions with time pressure</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧩</div>
              <div className="text-white font-semibold mb-2">Puzzle Mode</div>
              <div className="text-gray-300 text-sm">Complex problems requiring deep thinking</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-white font-semibold mb-2">Lightning Round</div>
              <div className="text-gray-300 text-sm">Rapid-fire questions for maximum points</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <div className="text-white font-semibold mb-2">Boss Battle</div>
              <div className="text-gray-300 text-sm">Challenging final tests for each topic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Made Fun</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the power of gamification in education with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-lg opacity-90">Higher Engagement</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Completion Rate</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">2x</div>
              <div className="text-lg opacity-90">Better Retention</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg opacity-90">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Learning Environment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classrooms to self-study, Knowledge Quest adapts to different learning contexts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Classrooms</h3>
            <p className="text-gray-600 mb-4">
              Engage students with interactive quizzes and friendly competition during lessons.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Real-time class participation</li>
              <li>• Group challenges</li>
              <li>• Progress tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Study</h3>
            <p className="text-gray-600 mb-4">
              Maintain motivation and track progress with personal achievements and goals.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Personal learning streaks</li>
              <li>• Adaptive difficulty</li>
              <li>• Achievement unlocks</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Training</h3>
            <p className="text-gray-600 mb-4">
              Make professional development engaging with team challenges and skill assessments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Team competitions</li>
              <li>• Skill certification</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are already earning points and achievements with Knowledge Quest
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all">
              Begin Your Quest
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all">
              Explore Challenges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


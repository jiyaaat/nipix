export const quiz = {
  topic: 'Forces in Physics',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: 'What is the formula for calculating force?',
      choices: ['F = ma', 'F = mv', 'F = ms', 'F = me'],
      type: 'MCQs',
      correctAnswer: 'F = ma',
    },
    {
      question: 'Which unit is used to measure force?',
      choices: ['Newton', 'Joule', 'Watt', 'Pascal'],
      type: 'MCQs',
      correctAnswer: 'Newton',
    },
    {
      question: 'What happens to an object when an unbalanced force acts on it?',
      choices: ['It accelerates', 'It decelerates', 'It remains at rest', 'It gains potential energy'],
      type: 'MCQs',
      correctAnswer: 'It accelerates',
    },
    {
      question: 'According to Newton\'s third law, for every action, there is an equal and opposite...',
      choices: ['Action', 'Force', 'Reaction', 'Acceleration'],
      type: 'MCQs',
      correctAnswer: 'Reaction',
    },
  ],
};

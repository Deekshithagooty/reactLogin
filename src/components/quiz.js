import React, { useState } from 'react';

const QuizPage = () => {
  const quizData = [
    {
      question: 'What does MongoDB store?',
      options: ['Documents', 'Tables', 'Files', 'Objects'],
      correctAnswer: 'Documents'
    },
    {
      question: 'What is used to build APIs in Node.js?',
      options: ['Express.js', 'Django', 'Flask', 'Spring Boot'],
      correctAnswer: 'Express.js'
    },
    {
      question: 'Which framework is used for building user interfaces in the MERN stack?',
      options: ['Angular', 'React.js', 'Vue.js', 'Ember.js'],
      correctAnswer: 'React.js'
    },
    {
      question: 'What is the server-side JavaScript runtime environment for Node.js?',
      options: ['Node.js', 'Nginx', 'Apache', 'Tomcat'],
      correctAnswer: 'Node.js'
    }
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your score: ${score} out of ${quizData.length}`);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>MERN Stack Quiz</h1>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>Question {currentQuestion + 1} of {quizData.length}</p>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>{quizData[currentQuestion].question}</p>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {quizData[currentQuestion].options.map((option, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              <label style={{ display: 'block', cursor: 'pointer' }}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizPage;

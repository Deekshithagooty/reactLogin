import React, { useState } from 'react';

export default function HomePage() {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <header style={{ backgroundColor: 'RGB(28, 208, 163)', color: 'white', padding: '20px 0' }}>
        <h1>Welcome to Our Learning Management System</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <h2>Featured Course</h2>
        <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '0 auto', width: '300px' }}>
          <h3>MERN Stack Development</h3>
          <p>A comprehensive course on building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
          {!enrolled && <button onClick={handleEnroll} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Enroll Now</button>}
          {enrolled && <p>Enrollment Successful!</p>}
        </div>
      </main>
      <footer style={{ backgroundColor: '#RGB(28, 208, 163)', color: 'white', padding: '20px 0' }}>
        <p>&copy; 2024 Learning Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

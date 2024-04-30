import React, { useState } from 'react';

function App({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can add your logic to handle login
    console.log('Username:', username);
    console.log('Password:', password);

    // Assuming you have an API endpoint for login, you can make a POST request here
    // For simplicity, let's assume login is successful if username and password are not empty
    if (username && password) {
      setLoggedIn(true);
      // Redirect to the next page after successful login
     
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        {loggedIn ? ( // If logged in, show logout button
          <>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout} style={buttonStyle}>
              Logout
            </button>
          </>
        ) : ( // If not logged in, show login form
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={inputStyle}
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

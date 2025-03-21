// SignUpForm.jsx
import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  onst [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {passwordError && <p className="input-error">{passwordError}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
// Authenticate.jsx
import React from 'react';

const Authenticate = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setSuccessMessage(result.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div><h2>Authenticate</h2>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    <button onClick={handleClick}>Authenticate Token</button></div>

  );
};

export default Authenticate;
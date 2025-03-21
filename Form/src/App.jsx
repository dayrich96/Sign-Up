//app.jsx
import React from 'react';
import SignUpForm from './SignUpForm';
import Authenticate from './Authenticate';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [authenticatedUsername, setAuthenticatedUsername] = useState(null);

  return (
    <div>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setAuthenticatedUsername={setAuthenticatedUsername}/>
      {authenticatedUsername && (
        <p className="authenticated-username">
          Authenticated User: {authenticatedUsername}
        </p>
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { auth } from '../firebase';

function SignIn() {
  const [authError, setAuthError] = useState(null);

  const handleSignIn = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      await auth().signInWithPopup(provider);
    } catch (error) {
      setAuthError(error);
    }
  };

  return (
    <div className="SignIn">
      <h1>Chat</h1>
      <button className="btn" onClick={handleSignIn}>
        Sign in with Google
      </button>
      {authError && (
        <>
          <p>Sorry, there was a problem</p>
          <p>
            <em>{authError.message}</em>
          </p>
          <p>Please try again</p>
        </>
      )}
    </div>
  );
}

export default SignIn;

import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { useAppState } from './utils';
import { Loading, Primary, Secondary, Sidebar, SignIn } from './components';

function App() {
  const { authAttempted, user, state, dispatch } = useAppState();

  if (!authAttempted) {
    return (
      <div className="App no-auth">
        <Loading message="Authenticating..." />
      </div>
    );
  }

  return user ? (
    <div className={`app${state.secondary ? '' : ' hide-secondary'}`}>
      <Sidebar user={user} state={state} dispatch={dispatch} />
      <Routes>
        <Route
          path="channel/:channelId"
          element={
            <>
              <Primary user={user} dispatch={dispatch} />
              <Secondary dispatch={dispatch} />
            </>
          }
        />
        <Redirect path="/" to="channel/general" />
      </Routes>
    </div>
  ) : (
    <div className="App no-auth">
      <SignIn />
    </div>
  );
}

export default App;

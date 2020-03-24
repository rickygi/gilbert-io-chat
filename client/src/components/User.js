import React from 'react';
import { auth } from '../firebase';

function User({ user }) {
  return (
    <div className="User">
      <img className="UserImage" alt={user.displayName} src={user.photoUrl} />
      <div>
        <div>{user.displayName}</div>
        <div>
          <button className="SignOut btn" onClick={() => auth().signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;

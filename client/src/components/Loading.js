import React from 'react';

function Loading({ message }) {
  return (
    <div className="Loading">
      <h1>Chat</h1>
      <p>{message}</p>
    </div>
  );
}

export default Loading;

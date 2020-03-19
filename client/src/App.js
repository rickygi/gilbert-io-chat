import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    return db.collection('channels').onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setChannels(docs);
    });
  }, []);

  return (
    <div className="container">
      <h1>Firebase Chat</h1>
      <ul>{channels && channels.map(({ id }) => <li key={id}>{id}</li>)}</ul>
    </div>
  );
}

export default App;

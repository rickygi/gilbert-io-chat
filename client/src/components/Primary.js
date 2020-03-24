import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { ChannelInfo, MessageInputBox, Messages } from '../components';

function Primary({ user, dispatch }) {
  const { channelId } = useParams();

  useEffect(() => {
    firestore.doc(`users/${user.uid}`).update({
      [`channels.${channelId}`]: true
    });
  }, [user.uid, channelId]);

  return (
    <div className="primary">
      <header className="primary-header">
        <ChannelInfo channelId={channelId} dispatch={dispatch} />
      </header>
      <main role="main" className="primary-content">
        <Messages channelId={channelId} />
      </main>
      <footer className="primary-footer">
        <MessageInputBox user={user} channelId={channelId} />
      </footer>
    </div>
  );
}

export default Primary;

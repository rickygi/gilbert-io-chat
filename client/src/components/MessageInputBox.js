import React from 'react';
import { firestore } from '../firebase';

function MessageInputBox({ user, channelId }) {
  const member = firestore.collection('users').doc(user.uid);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        firestore.collection(`channels/${channelId}/messages`).add({
          user: member,
          text: value,
          createdAt: new Date()
        });
        event.target.reset();
      }}
      className="MessageInputBox"
    >
      <input className="MessageInput" placeholder={`Message #${channelId}`} />
    </form>
  );
}

export default MessageInputBox;

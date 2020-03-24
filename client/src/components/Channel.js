import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { ChannelInfo, Members, MessageInputBox, Messages } from './';

function Channel({ user }) {
  const { channelId } = useParams();

  useEffect(() => {
    firestore.doc(`users/${user.uid}`).update({
      [`channels.${channelId}`]: true
    });
  }, [user.uid, channelId]);

  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo channelId={channelId} />
        <Messages channelId={channelId} />
        <MessageInputBox user={user} channelId={channelId} />
      </div>
      <Members channelId={channelId} />
    </div>
  );
}

export default Channel;

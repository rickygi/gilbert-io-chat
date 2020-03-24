import React, { useEffect, useRef } from 'react';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import { useCollection, useDocWithCache } from '../firebase/utils';

function Messages({ channelId }) {
  const messages = useCollection(`channels/${channelId}/messages`, 'createdAt');

  return (
    <MessageScrollWindow className="Messages">
      <div className="EndOfMessages">
        <h2>That's every message!</h2>
      </div>
      {messages &&
        messages.map((message, index) => {
          const previous = messages[index - 1];
          const showAvatar = shouldShowAvatar(previous, message);
          const showDay = showShowDay(previous, message);

          return showAvatar ? (
            <MessageWithAvatar
              key={message.id}
              message={message}
              showDay={showDay}
            />
          ) : (
            <div key={index}>
              <div className="Message no-avatar">
                <div className="MessageContent">{message.text}</div>
              </div>
            </div>
          );
        })}
    </MessageScrollWindow>
  );
}

function MessageScrollWindow(props) {
  const ref = useRef();
  const shouldScrollRef = useRef(true);

  const handleScroll = () => {
    const node = ref.current;
    const { clientHeight, scrollHeight, scrollTop } = node || {};
    const atBottom = scrollHeight === clientHeight + scrollTop;
    shouldScrollRef.current = atBottom;
  };

  useEffect(() => {
    if (shouldScrollRef.current) {
      const node = ref.current;
      node.scrollTop = node.scrollHeight;
    }
  });

  return <div {...props} ref={ref} onScroll={handleScroll} />;
}

function MessageWithAvatar({ message, showDay }) {
  const member = useDocWithCache(message.user.path);
  const dateText = new Date(
    message.createdAt.seconds * 1000
  ).toLocaleDateString();
  const timeStamp = format(message.createdAt.seconds * 1000, 'h:mm a');
  return (
    <div>
      {showDay && (
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">{dateText}</div>
          <div className="DayLine" />
        </div>
      )}
      <div className="Message with-avatar">
        <div
          className="Avatar"
          style={{ backgroundImage: member ? `url(${member.photoUrl})` : '' }}
        />
        <div>
          <div className="MessageInfo">
            <span className="UserName">{member && member.displayName}</span>{' '}
            <span className="TimeStamp">{timeStamp}</span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  );
}

function shouldShowAvatar(previous, message) {
  // is first
  if (!previous) return true;
  // is different user
  if (previous.user.id !== message.user.id) return true;
  // has been awhile
  if (message.createdAt.seconds - previous.createdAt.seconds > 180) return true;
}

function showShowDay(previous, message) {
  // is first
  if (!previous) return true;
  // is new day
  if (
    !isSameDay(
      previous.createdAt.seconds * 1000,
      message.createdAt.seconds * 1000
    )
  )
    return true;
}

export default Messages;

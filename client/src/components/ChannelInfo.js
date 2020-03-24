import React from 'react';
import { useDoc } from '../firebase/utils';
import { InfoIcon, MenuIcon } from '../icons';

function ChannelInfo({ channelId, dispatch }) {
  const channel = useDoc(`channels/${channelId}`);
  return (
    <div className="ChannelInfo">
      <button
        className="btn toggle-sidebar"
        onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
      >
        <MenuIcon className="icon stroke-gray-900" title="Menu" />
      </button>
      <div className="Topic">
        <div className="ChannelName">#{channelId}</div>
        <input
          className="TopicInput"
          value={channel ? channel.topic : ''}
          onChange={() => {}}
        />
      </div>
      <button
        className="btn toggle-secondary"
        onClick={() => dispatch({ type: 'TOGGLE_SECONDARY' })}
      >
        <InfoIcon className="icon gray-900 stroke-gray-900" title="Info" />
      </button>
    </div>
  );
}

export default ChannelInfo;

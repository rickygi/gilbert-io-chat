import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCollection } from '../firebase/utils';

function ChannelNav() {
  const channels = useCollection('channels');

  return (
    <nav className="ChannelNav">
      {channels.map(channel => (
        <NavLink
          key={channel.id}
          to={`/channel/${channel.id}`}
          activeClassName="active"
        >
          # {channel.id}
        </NavLink>
      ))}
    </nav>
  );
}

export default ChannelNav;

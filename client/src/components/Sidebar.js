import React from 'react';
import { ChannelNav, User } from '../components';
import { CloseIcon } from '../icons';

function Sidebar({ user, state, dispatch }) {
  return (
    <div className={`sidebar${state.sidebar ? ' z-10' : ''}`}>
      <header className="sidebar-header">
        <User user={user} />
        <button
          className="btn btn-dark close-sidebar"
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        >
          <CloseIcon className="icon gray-100" title="Close" />
        </button>
      </header>
      <div className="sidebar-nav">
        <ChannelNav />
      </div>
    </div>
  );
}

export default Sidebar;

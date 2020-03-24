import React from 'react';
import { useParams } from 'react-router-dom';
import { Members } from '../components';
import { CloseIcon } from '../icons';

function Secondary({ dispatch }) {
  const { channelId } = useParams();

  return (
    <div className="secondary">
      <header className="secondary-header">
        <button
          className="btn close-secondary"
          onClick={() => dispatch({ type: 'TOGGLE_SECONDARY' })}
        >
          <CloseIcon className="icon gray-900" title="Close" />
        </button>
      </header>
      <div className="secondary-content">
        <Members channelId={channelId} />
      </div>
    </div>
  );
}

export default Secondary;

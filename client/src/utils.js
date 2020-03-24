import { useReducer } from 'react';
import { useAuth } from './firebase/utils';

function useAppState() {
  const { authAttempted, user } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  return { authAttempted, user, state, dispatch };
}

const initialState = { secondary: false, sidebar: false };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SECONDARY':
      return { ...state, secondary: !state.secondary };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
}

export { useAppState };

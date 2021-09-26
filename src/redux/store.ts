import { combineReducers, createStore } from '@reduxjs/toolkit';

import socketReducer from './reducers/socketReducer';
import roomReducer from './reducers/roomReducer';
import currentUserReducer from './reducers/currentUserReducer';
import usersReducer from './reducers/usersReducer';
import issuesReducer from './reducers/issuesReducer';
import settingsReducer from './reducers/settingsReducer';
import messagesReducer from './reducers/messagesReduser';

const rootReducer = combineReducers({
  socket: socketReducer,
  room: roomReducer,
  currentUser: currentUserReducer,
  users: usersReducer,
  issues: issuesReducer,
  settings: settingsReducer,
  messages: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
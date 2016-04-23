import {combineReducers, createStore} from 'redux'
import exampleTwits from './exampleTwits'

const twits = (state = exampleTwits, action)=> {
  switch (action.type) {
    case 'ADD_TWIT':
      return [...state, twit(undefined, action)];
    case 'ADD_TWIT_COMMENT':
      return state.map(t => twit(t, action));
    default:
      return state;
  }
};

const twit = (state = {}, action)=> {
  switch (action.type) {
    case 'ADD_TWIT':
      return {
        id: action.nextTwitId,
        user: action.user,
        text: action.text,
        comments: []
      };
    case 'ADD_TWIT_COMMENT':
      if (state.id !== action.twitId)
        return state;

      return {...state, comments: comments(state.comments, action)};
    default:
      return state;
  }
};

const comments = (state = [], action)=> {
  switch (action.type) {
    case 'ADD_TWIT_COMMENT':
      return [...state, comment(undefined, action)];
    default:
      return state;
  }
};

const comment = (state = {}, action)=> {
  switch (action.type) {
    case 'ADD_TWIT_COMMENT':
      return {
        user: action.user,
        text: action.text
      };
    default:
      return state;
  }
};

const user = (state = '', action)=> {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
};

const twitterApp = combineReducers({twits, user});

export default createStore(twitterApp);

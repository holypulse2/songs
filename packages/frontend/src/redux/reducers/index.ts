import { combineReducers } from 'redux';
import { default as songs } from './songs';

const rootReducer = combineReducers({
  songs
})

export default function root(state: any, action: any) {
  return rootReducer(state, action);
}

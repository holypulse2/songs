import { RECEIVE_SONGS, SEARCHED_SONGS, ON_ERROR } from '../actions/songs';

const initialState = {
  searchText: '',
  songs: [],
  error: null,
};

function receiveSongs(state = initialState, action: any) {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        songs: action.payload && state.songs.concat(action.payload?.data?.results)
      };
    case SEARCHED_SONGS:
      return {
        ...state,
        songs: action.payload && action.payload?.data?.results
      };
    case ON_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default receiveSongs;

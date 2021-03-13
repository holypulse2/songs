import { onError, receiveSongs,searchSongs } from '../redux/actions/songs';
import { songs } from '../services/api/songs';

export function fetchSongs(searchText: string='', page: number=0) {
  return function (dispatch: any) {
    songs(searchText, page)
      .then((response) => dispatch(receiveSongs(response)))
      .catch(() => dispatch(onError()));
  }
}

export function fetchSearch(searchText: string='', page: number=0) {
  return function (dispatch: any) {
    songs(searchText, page)
      .then((response) => dispatch(searchSongs(response)))
      .catch(() => dispatch(onError()));
  }
}

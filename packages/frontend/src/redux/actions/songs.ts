export const GET_SONGS = 'GET_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const GET_SEARCH_SONGS = 'GET_SEARCH_SONGS';
export const SEARCHED_SONGS = 'SEARCHED_SONGS';
export const ON_ERROR = 'ON_ERROR';

export function getSongs(searchText: string, page: number) {
  return {
    type: GET_SONGS,
    searchText,
    page,
  };
}

export function getSearch(searchText: string, page: number) {
  return {
    type: GET_SEARCH_SONGS,
    searchText,
    page,
  };
}

export function receiveSongs(payload: any) {
  return {
    type: RECEIVE_SONGS,
    payload,
  };
}

export function searchSongs(payload: any) {
  return {
    type: SEARCHED_SONGS,
    payload,
  };
}

export function onError() {
  return {
    type: ON_ERROR,
  };
}

import { REACT_APP_API_BASE_URL, PAGE_LIMIT, REACT_APP_API_PORT } from '../../constants';
import { get } from './axios';

export function songs(searchText: string, page: number) {
  const url = `${REACT_APP_API_BASE_URL}:${REACT_APP_API_PORT}/api/getsongs/${searchText || 'tracks'}&${page || 0}&${PAGE_LIMIT}`;

  return get(url);
}

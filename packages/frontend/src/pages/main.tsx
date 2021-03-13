import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PAGE_LIMIT } from '../constants';
import Songs from '../components/organisms/Songs';
import { fetchSongs, fetchSearch } from '../thunk';

const Main = () => {
  const FIRST_PAGE = 0;
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(FIRST_PAGE);
  const {songs} = useSelector((state: any) => state);

  const onSearch = (event: any) => {
    const searchText = event.target.value;
    dispatch(fetchSearch(searchText, FIRST_PAGE));
    setSearch(searchText);
    setPage(FIRST_PAGE);
  }

  const onScroll = () => {
    const nextPage = page + PAGE_LIMIT;
    dispatch(fetchSongs(search, nextPage));
    setPage(nextPage);
  }

  return (
    <Songs searchText={search} onSearch={onSearch} onScroll={onScroll} songs={songs.songs} />
  );
}

export default Main;

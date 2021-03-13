import React from 'react';
import Heading from '../../atoms/Heading';
import SongCard from '../../molecules/SongCard';
import SearchBar from '../../molecules/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledSongsContainer, StyledSongsWrapper, StyledSongWrapper, StyledSongsResultFound } from './Styled';
import Loading from '../../atoms/Loading';

const Songs = ({ searchText, onSearch, onScroll, songs }: { searchText: string, onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void, onScroll: () => void, songs: any }) => {
	return (
		<StyledSongsContainer>
			<SearchBar value={searchText} placeholder='Search By Artist Name Or Song Name' onChange={onSearch} />
			<StyledSongsResultFound>
				<Heading>{`${songs.length} Results Found`}</Heading>
			</StyledSongsResultFound>
			<InfiniteScroll
					dataLength={songs.length}
					next={onScroll}
					hasMore={true || false}
					loader={<Loading />}
				>
				<StyledSongsWrapper>
					{songs && songs.map((song: any, index: number) => (
						<StyledSongWrapper>
							<SongCard key={index} imgSrc={song.artworkUrl100} text={song.artistName || song.name} />
						</StyledSongWrapper>
					))}
				</StyledSongsWrapper>
				</InfiniteScroll>
		</StyledSongsContainer>
	);
}

export default Songs;

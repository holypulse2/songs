import React from 'react';
import { StyledSongCard, StyledSongCardImage, StyledSongCardDescription } from './Styled';

const SongCard = ({ imgSrc, text }: { imgSrc: string, text: string }) => {
	return (
		<StyledSongCard>
            <StyledSongCardImage src={imgSrc} />
            <StyledSongCardDescription>{text}</StyledSongCardDescription>
		</StyledSongCard>
	);
}

export default SongCard;

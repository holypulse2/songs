import styled from 'styled-components';
import { Flex, Text } from 'rebass/styled-components';

export const StyledSongCard = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

export const StyledSongCardImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 15px;
`;

export const StyledSongCardDescription = styled(Text)`
  font-size: 1rem;
  padding-left: 15px;
`;

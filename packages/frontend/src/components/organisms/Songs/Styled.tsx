import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

export const StyledSongsContainer = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const StyledSongsWrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const StyledSongWrapper = styled(Flex)`
  width: 33%;
`;


export const StyledSongsResultFound = styled(Flex)`
  margin-top: 16px;
  margin-bottom: 16px;
`;


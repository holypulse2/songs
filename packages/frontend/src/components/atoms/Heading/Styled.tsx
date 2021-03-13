import styled from 'styled-components';
import { Box as RebassHeading } from 'rebass/styled-components';

type HeadingProps = {
  as?: any;
};

export const StyledHeading = styled(RebassHeading)<HeadingProps>`
  ${props => props.as};
`;

import React from 'react';
import { HeadingProps } from 'rebass';
import { StyledHeading } from './Styled';

interface Props extends HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading = React.forwardRef(({ as = 'h2', children, ...rest }: Props, ref) => (
  <StyledHeading ref={ref} as={as} {...(rest as any)}>
    {children}
  </StyledHeading>
));

export default Heading;

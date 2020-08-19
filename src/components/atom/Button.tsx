import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

type Props = {
  primary: boolean;
  children: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  href?: string | undefined;
  ref?: any;
};

type ButtonProps = Pick<Props, 'primary'>;

const StyledButton = styled.div<ButtonProps>`
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
  padding: 6px 8px;
  border: 2px solid #202020;
  border-radius: 4px;
  ${props => props.primary ? `
    color: #FFF;
    background-color: ${theme.palette.primary.main};
    border: 2px solid ${theme.palette.primary.main};
  ` : ``}
`

export const Button = React.forwardRef<HTMLAnchorElement, Props>(({onClick, href, children, primary}, ref) => (
  <a ref={ref} onClick={onClick} href={href}>
    <StyledButton primary={primary}>
      { children }
    </StyledButton>
  </a>
));

export default Button;

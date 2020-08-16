import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  href?: string | undefined;
  ref?: any;
};

export const PrimaryButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(({onClick, href, children}, ref) => (
  <a ref={ref} onClick={onClick} href={href}>
    <Button>
      { children }
    </Button>
  </a>
));

export const SecondaryButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(({onClick, href, children}, ref) => (
  <a ref={ref} onClick={onClick} href={href}>
    <Button>
      { children }
    </Button>
  </a>
));

const Button = styled.div`
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
  color: #202020;
  border: 2px solid #202020;
  border-radius: 4px;
`
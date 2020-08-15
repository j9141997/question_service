import React, { FC, forwardRef } from 'react';

type ButtonProps = {
  children: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  href?: string | undefined;
  ref?: any;
} ;

export const PrimaryButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(({onClick, href, children}, ref) => (
  <a ref={ref} onClick={onClick} href={href}>
    { children }
  </a>
));

export const SecondaryButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(({onClick, href, children}, ref) => (
  <a ref={ref} onClick={onClick} href={href}>
    { children }
  </a>
));
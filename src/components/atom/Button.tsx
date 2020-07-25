import React from 'react';
import MaterialButton from '@material-ui/core/Button';

type Props = {
  color: "inherit" | "primary" | "secondary" | "default"
  children: string
}

export const Button = ({
  color,
  children
}: Props) => (
  <MaterialButton color={color}>
    {children}
  </MaterialButton>
);
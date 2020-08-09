import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  children: ReactNode;
}

const Form = ({ children }: Props) => {
  return (
    <React.Fragment>
      <form action="">
        {children}
      </form>
    </React.Fragment>
  );
}

export default Form;
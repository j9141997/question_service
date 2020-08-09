import React from 'react';
import Button from '@material-ui/core/Button';


const Form = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <form action="">
        {props.children}
      </form>
    </React.Fragment>
  );
}

export default Form;
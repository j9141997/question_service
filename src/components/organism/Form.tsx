import React from 'react';
import Button from '@material-ui/core/Button';


const Form = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <form action="">
        <input type="text" name={name} />
        <Button variant="contained" color="primary">
          回答
        </Button>
      </form>
    </React.Fragment>
  );
}

export default Form;
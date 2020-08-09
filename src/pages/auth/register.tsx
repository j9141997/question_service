import React, { ComponentProps } from 'react'
import Button from '@material-ui/core/Button';
import { QuestionList } from '../../components/organism/QuestionList';
import Form from '../../components/organism/Form';

const register = (props) => (
  <React.Fragment>
    <input type="nickname" placeholder="ニックネームを入力してください" required/>
    <h1>こちらは遷移しました。</h1>
  </React.Fragment>
);

export default register;
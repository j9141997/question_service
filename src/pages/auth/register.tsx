import React, { ComponentProps } from 'react'

import styled from 'styled-components';
import AuthContainer from '../../components/organism/AuthContainer';
import Button from '@material-ui/core/Button';
import { QuestionList } from '../../components/organism/QuestionList';
import Form from '../../components/organism/Form';

const RegisterTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
`

const register = (props) => (
  <AuthContainer>
    <RegisterTitle>Shitumonへようこそ！</RegisterTitle>
    <input type="nickname" placeholder="ニックネームを入力してください" required/>
  </AuthContainer>
);

export default register;
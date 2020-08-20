import React, { ComponentProps } from 'react'
import styled from 'styled-components';

import AuthContainer from '../../components/organism/AuthContainer';
import InputGroup from '../../components/molecule/InputGroup';
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
      <InputGroup labelName="ニックネーム" name="nickname" placeholder="Shitumonmon" />
      <InputGroup labelName="メールアドレス" name="email" placeholder="shitumon@shitumon.com" />
      <InputGroup labelName="パスワード" name="password" placeholder="6文字以上で入力してください" />
  </AuthContainer>
);

export default register;
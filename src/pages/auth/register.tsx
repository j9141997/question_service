import React, { FC } from 'react'
import styled from 'styled-components'

import AuthContainer from '../../components/organism/AuthContainer'
import Form from '../../components/organism/Form'
import InputGroup from '../../components/molecule/InputGroup'
import SubmitButton from '../../components/atom/SubmitButton'

const RegisterTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
`

const register: FC = () => (
  <AuthContainer>
    <Form action="hogehoge">
      <RegisterTitle>Shitumonへようこそ！</RegisterTitle>
      <InputGroup
        labelName="ニックネーム"
        name="nickname"
        placeholder="Shitumonmon"
      />
      <InputGroup
        labelName="メールアドレス"
        name="email"
        placeholder="shitumon@shitumon.com"
      />
      <InputGroup
        labelName="パスワード"
        name="password"
        placeholder="6文字以上で入力してください"
      />
      <SubmitButton value="メールアドレスで登録" />
    </Form>
  </AuthContainer>
)

export default register

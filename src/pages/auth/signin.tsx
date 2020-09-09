import { FC } from 'react'

import AuthContainer from '../../components/organism/AuthContainer'
import Form from '../../components/organism/Form'
import InputGroup from '../../components/molecule/InputGroup'
import SubmitButton from '../../components/atom/SubmitButton'

const Signin: FC = () => (
  <AuthContainer>
    <Form action="hogehoge">
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
      <SubmitButton value="ログインする" />
    </Form>
  </AuthContainer>
)

export default Signin

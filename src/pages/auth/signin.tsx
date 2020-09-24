import { FC, useEffect, useContext } from 'react'
import Router from 'next/router'
import firebase from '../../utils/firebase'

import AuthContainer from '../../components/organism/AuthContainer'
import Form from '../../components/organism/Form'
import InputGroup from '../../components/molecule/InputGroup'
import SubmitButton from '../../components/atom/SubmitButton'
import { AuthContext } from '../../hooks/Auth'

const Signin: FC = () => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser && Router.push('/')
  }, [currentUser])
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  return (
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
      <button onClick={login}>googleでログインする</button>
    </AuthContainer>
  )
}

export default Signin

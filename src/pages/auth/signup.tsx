import React, { FC, useState, useEffect, useContext } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import AuthContainer from '../../components/organism/AuthContainer'
import Form from '../../components/organism/Form'
import InputGroup from '../../components/molecule/InputGroup'
import SubmitButton from '../../components/atom/SubmitButton'

import auth from '../../utils/firebase'
import { AuthContext } from '../../context/Auth'

type valueProps = {
  nickname: string
  email: string
  password: string
}

const Signup: FC = () => {
  const { currentUser } = useContext(AuthContext)
  const [value, setValue] = useState<valueProps>({
    nickname: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    currentUser && Router.push('/')
  }, [currentUser])

  const changeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const registerAuth = async () => {
    try {
      await auth.createUserWithEmailAndPassword(value.email, value.password)
      Router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <AuthContainer>
      <React.Fragment>
        {/* <RegisterTitle>Shitumonへようこそ！</RegisterTitle> */}
        <InputGroup
          labelName="ニックネーム"
          name="nickname"
          placeholder="Shitumonmon"
          value={value.nickname}
          onChange={changeValue}
        />
        <InputGroup
          labelName="メールアドレス"
          name="email"
          placeholder="shitumon@shitumon.com"
          value={value.email}
          onChange={changeValue}
        />
        <InputGroup
          labelName="パスワード"
          name="password"
          placeholder="6文字以上で入力してください"
          type="password"
          value={value.password}
          onChange={changeValue}
        />
        <SubmitButton
          value="メールアドレスで登録"
          onClick={registerAuth}
        ></SubmitButton>
      </React.Fragment>
    </AuthContainer>
  )
}

const RegisterTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
`

export default Signup

import React, { FC, useContext } from 'react'
import firebase from '../../utils/firebase'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '../atom/Button'
import { AuthContext } from '../../context/Auth'

const HeaderItem: FC = () => {
  const { currentUser } = useContext(AuthContext)

  const logout = () => {
    firebase.auth().signOut()
  }
  return (
    <React.Fragment>
      <HeaderItemContainer>
        {currentUser ? (
          <button onClick={logout}>ログアウト</button>
        ) : (
          <React.Fragment>
            <Link href="/auth/signin" passHref>
              <Button primary={false}>ログイン</Button>
            </Link>
            <Link href="/auth/signup" passHref>
              <Button primary={true}>新規登録</Button>
            </Link>
          </React.Fragment>
        )}
      </HeaderItemContainer>
    </React.Fragment>
  )
}

const HeaderItemContainer = styled.div`
  margin: 0 6px;
`

export default HeaderItem

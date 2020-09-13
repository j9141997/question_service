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
      {currentUser ? (
        <HeaderItemContainer>
          <button onClick={logout}>ログアウト</button>
        </HeaderItemContainer>
      ) : (
        <React.Fragment>
          <HeaderItemContainer>
            <Link href="/auth/signin" passHref>
              <Button primary={false}>ログイン</Button>
            </Link>
          </HeaderItemContainer>
          <HeaderItemContainer>
            <Link href="/auth/signup" passHref>
              <Button primary={true}>新規登録</Button>
            </Link>
          </HeaderItemContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const HeaderItemContainer = styled.div`
  margin: 0 6px;
`

export default HeaderItem

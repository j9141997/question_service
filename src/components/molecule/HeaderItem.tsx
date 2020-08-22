import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '../atom/Button'

const HeaderItemContainer = styled.div`
  margin: 0 6px;
`
export const HeaderItem = () => (
  <React.Fragment>
    <HeaderItemContainer>
      <Link href="/auth/login" passHref>
        <Button primary={false}>ログイン</Button>
      </Link>
    </HeaderItemContainer>
    <HeaderItemContainer>
      <Link href="/auth/register" passHref>
        <Button primary={true}>新規登録</Button>
      </Link>
    </HeaderItemContainer>
  </React.Fragment>
)

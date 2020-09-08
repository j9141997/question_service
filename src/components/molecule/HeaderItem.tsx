import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '../atom/Button'

const HeaderItem: FC = () => (
  <React.Fragment>
    <HeaderItemContainer>
      <Link href="/auth/login" passHref>
        <Button primary={false}>ログイン</Button>
      </Link>
    </HeaderItemContainer>
    <HeaderItemContainer>
      <Link href="/auth/signup" passHref>
        <Button primary={true}>新規登録</Button>
      </Link>
    </HeaderItemContainer>
  </React.Fragment>
)

const HeaderItemContainer = styled.div`
  margin: 0 6px;
`

export default HeaderItem

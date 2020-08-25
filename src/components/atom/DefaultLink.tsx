import React, { FC } from 'react'

import theme from '../theme'
import styled from 'styled-components'

type Props = {
  href?: string
}

const DefaultLink: FC<Props> = ({ children, href = '/' }) => (
  <CommonLink href={href}>{children}</CommonLink>
)

const CommonLink = styled.a`
  a {
    color: ${theme.palette.common.black};
  }
`

export default DefaultLink

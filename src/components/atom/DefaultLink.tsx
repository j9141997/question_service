import React from 'react';

import theme from '../theme'
import styled from 'styled-components';

type Props = {
  href? : string,
  children: string
}

const DefaultLink = ({
  children
}: Props) => (
  <CommonLink>
    { children }
  </CommonLink>
)

DefaultLink.defaultProps = {
  href: "/"
}

const CommonLink = styled.a`
  a {
    color: ${theme.palette.common.black};
  }
`;



export default DefaultLink;
import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

type Props = {
  primary: boolean
  children: string
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
  href?: string | undefined
  ref?: any
}

type ButtonProps = Pick<Props, 'primary'>

const Button = React.forwardRef<HTMLAnchorElement, Props>(
  ({ onClick, href, children, primary }, ref) => (
    <a ref={ref} onClick={onClick} href={href}>
      <StyledButton primary={primary}>{children}</StyledButton>
    </a>
  )
)

const StyledButton = styled.div<ButtonProps>`
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
  border: 1px solid #202020;
  border-radius: 4px;
  padding: 6px 8px;
  font-weight: 500;
  &:hover {
    color: #000;
    background-color: #e8e8e8;
  }
  ${({ primary }) =>
    primary &&
    `
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.primary.main}; 
    border: 1px solid ${theme.palette.primary.main};
    &:hover {
      color: ${theme.palette.common.white};
      background-color: #3e6f50;
    }
  `}
`

export default Button

import React, { memo } from 'react'
import styled from 'styled-components'

import theme from '../theme'

type Props = {
  value: string
}

const SubmitButton = memo<Props>(({ value }) => {
  return <Button type="submit">{value}</Button>
})

const Button = styled.button`
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  height: 48px;
  padding: 12px 40px;
  min-width: 290px;
  color: ${theme.palette.common.white};
  border: 1px solid transparent;
  background-color: ${theme.palette.primary.main};
  border-color: ${theme.palette.primary.main};
  border-radius: 40px;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    color: ${theme.palette.common.white};
    background-color: #3e6f50;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    min-width: 170px;
  }
`

export default SubmitButton

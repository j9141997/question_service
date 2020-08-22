import React from 'react'
import MaterialButton from '@material-ui/core/Button'

type Props = {
  color: 'inherit' | 'primary' | 'secondary' | 'default'
  children: string
}

export const SubButton = ({ color, children }: Props) => (
  <a>
    <MaterialButton color={color}>{children}</MaterialButton>
  </a>
)

SubButton.defaultProps = {
  color: 'default',
}

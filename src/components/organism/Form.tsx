import React, { FC, ReactNode } from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  children: ReactNode
  action: string
}

const Form: FC<Props> = ({ children, action }) => {
  return (
    <React.Fragment>
      <form action={action}>{children}</form>
    </React.Fragment>
  )
}

export default Form

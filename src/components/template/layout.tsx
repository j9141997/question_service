import React, { FC } from 'react'
import Header from '../organism/Header'
import Container from '@material-ui/core/Container'

const Layout: FC = ({ children }) => (
  <div className="layout">
    <Header />
    <Container maxWidth="sm">{children}</Container>
  </div>
)

export default Layout

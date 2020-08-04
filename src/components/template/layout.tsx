import React, { ReactNode } from 'react';

import Header from '../organism/header';
import Container from '@material-ui/core/Container';


type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className='layout'>
    <Header />
    <Container maxWidth="sm">
      { children }
    </Container>
  </div>
);


export default Layout;
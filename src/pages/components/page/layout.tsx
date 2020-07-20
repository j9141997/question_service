import react from 'react';
import Header from '../organism/header';

const Layout = props => {
  const { children } = props;
  return (
    <div className='layout'>
      <Header />
      { children }
    </div>
  );
}

export default Layout;
import react from 'react';
import Header from '../organism/header';

const Layout = props => {
  const { children } = props;
  return (
    <div className='layout'>
      <Header />
      <h1>yoshida</h1>
      { children }
    </div>
  );
}

export default Layout;
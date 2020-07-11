import React, { FC } from 'react';
import Head from 'next/head';
import PostPanel from './components/post';
import Post from './components/post';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Yoshida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
      <PostPanel />
   </div>
  );
}

export default Home;
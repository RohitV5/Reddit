import type { NextPage } from 'next';
import Head from 'next/head';
import PostBox from '../components/PostBox';

const Home: NextPage = function () {
  return (
    <div className="max-w-5xl mx-auto my-7">
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostBox />

      <div>{/* Feed */}</div>
    </div>
  );
};

export default Home;

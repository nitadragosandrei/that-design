import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-paint-brushes bg-no-repeat bg-center bg-cover bg-fixed">
      <Head>
        <title>That Design</title>
        <link rel="icon" href="/black_heart.ico" />
      </Head>
    <h1>That Design</h1>


    </div>
  );
};

export default Home;

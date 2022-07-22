import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2 bg-paint-brushes bg-contain">
      <Head>
        <title>That Design</title>
        <link rel="icon" href="/black_heart.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;

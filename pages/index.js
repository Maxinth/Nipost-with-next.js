import Head from "next/head";
import HomePage from "../components/HomePageComponents/index";
import TransitionBox from "../components/TransitionBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionBox>
        <HomePage />
      </TransitionBox>
    </>
  );
}

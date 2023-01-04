import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Landing } from "../components/Landing";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Adrian Nare</title>
        <meta name="description" content="Adrian Nare's personal site." />
        <link rel="icon" href="/a-logo.png" />
      </Head>
      <div className="relative">
        <div className="bg-mygreen-light">
          <Navbar />
          <Landing />
        </div>
        <Projects />
        <Technologies />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

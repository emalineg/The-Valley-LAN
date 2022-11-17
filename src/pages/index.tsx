import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import About from "../components/About";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>The Valley | A Rocket League Championship</title>
        <meta
          name="description"
          content="A Rocket League Championship by Irvine Valley College"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="w-screen bg-cover"
        style={{ backgroundImage: `url('/bg.svg')` }}
      >
        <Nav />
        <Banner />
        <About />
        <Rsvp />
        <Footer />
      </div>
    </>
  );
};

export default Home;

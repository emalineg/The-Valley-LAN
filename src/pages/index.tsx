import { type NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import About from "../components/About";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Valley | A Rocket League Championship</title>
        <meta
          name="description"
          content="A Rocket League Championship by Irvine Valley College"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div
        className="w-screen bg-cover"
        style={{ backgroundImage: `url('/bg.svg')` }}
      >
        <Nav />
        <div className="grid grid-cols-1 mx-2 sm:gap-10 p-5">
          <Banner />
          <About />
          <Rsvp />
          <Sponsors />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

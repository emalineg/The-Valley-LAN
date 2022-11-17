import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import FeaturedTeams from "../components/FeaturedTeams";
import localFont from "@next/font/local";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const montliFont = localFont({ src: "/fonts/Mont-ExtraLightDEMO.otf" });
  const montheFont = localFont({ src: "/fonts/Mont-HeavyDEMO.otf" });
  const theboldFont = localFont({ src: "/fonts/THEBOLDFONT.otf" });
  const nextFont = localFont({ src: "/fonts/Next.otf" });
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
        <FeaturedTeams />
      </div>
    </>
  );
};

export default Home;

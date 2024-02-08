import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import TopProfiles from "../components/TopProfiles";
import { Main } from "../components/Main";
import { Highlights } from "../components/Highlights";
import { OtherLinks } from "../components/OtherLinks";
import { Footer } from "../components/Footer";
import { OL2 } from "../components/OL2";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>VBSPU 2.O</title>
        <meta name="description" content="an app for students" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <Header />
      <Banner />
      <Main />
      <TopProfiles />
      <Highlights />
      <OtherLinks />
      <OL2 />
      <Footer />
    </div>
  );
}

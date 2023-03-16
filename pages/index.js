import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Head from 'next/head';
import Image from 'next/image';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Sekesan | Full-Stack Developer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </>
  );
}

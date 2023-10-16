import type { AppProps } from "next/app";
import { Kalam } from "next/font/google";
import styled from "styled-components";

import Footer from "@/components/layout/Footer";
import MainHeader from "@/components/layout/MainHeader";

import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    font-family: var(--font-kalam);
    flex-grow: 1;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContainer>
        <MainHeader />
        <main className={kalam.variable}>
          <Component {...pageProps} />
        </main>
        <Footer font={kalam.variable} />
      </MainContainer>
    </>
  );
}

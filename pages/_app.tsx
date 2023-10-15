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
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device, initial-sclae=1" />
      </Head>
      <MainContainer>
        <MainHeader />
        <Main className={`${kalam.className}`}>
          <Component {...pageProps} />
        </Main>
        <Footer font={kalam.className} />
      </MainContainer>
    </>
  );
}

import Check from "@/components/checklist/Check";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Check Items</title>
        <meta name="description" content="Basic checklist demo project." />
      </Head>
      <Check />
    </>
  );
}

export default HomePage;

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const [moreResults, setMoreResults] = useState(results);
  const router = useRouter();
  useEffect(() => {
    setMoreResults(results);
  }, [results]);
  console.log(router);
  return (
    <div>
      <Head>
        <title>Padam 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results moreResults={moreResults} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://yts.mx/api/v2${requests[genre]?.url || requests.fetchAction.url}`
  ).then((res) => res.json());
  return {
    props: {
      results: request.data.movies,
    },
  };
}

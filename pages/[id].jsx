import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import Nav from "../components/Nav";

const Movie = ({ result }) => {
  return (
    <div>
      <Head>
        <title>Padam 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />
      <MovieDetails result={result} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const movieId = context.params.id;
  const request = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_Cast=true`
  ).then((res) => res.json());
  return {
    props: {
      result: request.data,
    },
  };
}

export default Movie;

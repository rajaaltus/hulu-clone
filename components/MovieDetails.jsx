import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import YouTube from "react-youtube";

const MovieDetails = ({ result }) => {
  return (
    <div className="p-2 m-10 max-w-4xl  mx-auto">
      <div className="flex items-start justify-betweeen">
        <div className="mr-8 w-full">
          <Image
            alt={result.movie.title}
            src={result.movie.large_cover_image}
            layout="intrinsic"
            width={400}
            height={600}
            placeholder="blur"
            blurDataURL={result.movie.small_cover_image}
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-100">
            {result.movie.title || result.movie.english_title}
          </h2>
          <Moment fromNow>{result.movie.date_uploaded}</Moment>
          <p className="my-2">
            {result.movie.description_full || result.movie.description_intro}
          </p>
          <div className="my-4 font-medium text-sm tracking-wide">
            <ul>
              <li>
                Year:{" "}
                <span className="font-semibold text-lg">
                  {result.movie.year}
                </span>{" "}
                &middot; IMDB Rating:{" "}
                <span className="font-semibold text-lg">
                  {result.movie.rating}
                </span>{" "}
                &middot; Runtime:{" "}
                <span className="font-semibold text-lg">
                  {result.movie.runtime}
                </span>
                m
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex space-x-2">
              <h2>Genres:</h2>
              {result.movie.genres.map((genre, index) => (
                <li
                  className="bg-green-200 text-gray-800 px-4 rounded-full text-xs flex items-center justify-center"
                  key={index}
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full bg-gray-700/40 mt-8 h-full px-4 py-6 rounded-md">
            <ul className="flex space-x-2">
              {result.movie.torrents.map((item, index) => (
                <li key={index} className="">
                  <Link href={item.url}>
                    <a className="px-12 py-2 bg-green-600 rounded-md shadow-sm hover:bg-green-700 text-white">
                      {item.quality}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {result.movie.yt_trailer_code && (
        <div className="mt-6">
          <YouTube
            videoId={result.movie.yt_trailer_code}
            id={result.movie.title}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

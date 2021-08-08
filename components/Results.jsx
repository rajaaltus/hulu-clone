import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <div className="px-5 my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 3xl:flex flex-wrap justify-center">
      {results.map((result, key) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

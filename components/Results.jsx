import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <div className="p-2 my-10  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:px-10 3xl:flex flex-wrap justify-center">
      {results.map((result, key) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

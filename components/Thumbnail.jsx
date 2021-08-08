import React, { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }) => {
  return (
    <div className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        alt={result.title}
        src={result.medium_cover_image}
        layout="responsive"
        height={345}
        width={230}
        className="object-cover"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.description_full}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.title_english}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.torrents[0].quality && `${result.torrents[0].quality} · `}{" "}
          {result.year || result.year} · <ThumbUpIcon className="h-5 mx-2" />{" "}
          {result.rating}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";
export default Thumbnail;

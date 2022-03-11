import React from "react";
import Link from "next/link";
import PrismicDOM from "prismic-dom";

function TrendingCard({ title, category, duration, publishedAt, id, number }) {
  var timestamp = PrismicDOM.Date(publishedAt);

  var formattedTimestamp = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp);

  return (
    <Link href={`${id}`}>
      <div
        className="flex space-x-3 max-w-md shadow-sm p-2 cursor-pointer h-40"
        style={{ height: 160 }}
      >
        <h2 className="text-3xl text-text-shade0 font-bold space-x-2">
          {number}
        </h2>
        <div className="my-2 flex justify-between flex-col overflow-clip">
          <p className="text-base text-text-shade1 font-semibold max-h-6">
            {category && category}
          </p>
          <h2 className="text-lg text-text-black font-bold line-clamp-2">
            {title}
          </h2>
          <p className="text-text-shade0 text-sm font-bold ">
            {formattedTimestamp} . {duration}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TrendingCard;

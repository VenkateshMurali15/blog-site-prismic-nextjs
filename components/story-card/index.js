import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/dist/client/link";
import defaultImage from "../../public/image.jpg";
import { Date } from "prismic-reactjs";
import PrismicDOM from "prismic-dom";

function StoryCard({ title, description, duration, image, publishedAt, id }) {
  var timestamp = PrismicDOM.Date(publishedAt);

  var formattedTimestamp = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp);

 
  return (
    <Fragment>
      <Link href={`/${id}`}>
        <div className="hidden md:grid grid-cols-2 justify-items-center align-middle lg:grid-cols-3 group cursor-pointer transtion duration-200 ease-in transform sm:hover:scale-105 hover:z-50 shadow-md p-2 rounded-lg">
          <div className=" md:col-span-1 lg:col-span-2">
            <h2 className="text-text-black transition-all duration-100 ease-in-out font-bold text-2xl line-clamp-2">
              {title}
            </h2>
            <p className="mt-2 md:mt-5 text-text-shade1 font-semibold text-base line-clamp-3">
              {description}
            </p>
            <p className="sm:mt-3 md:mt-10 text-text-shade0 text-sm font-bold lg:opacity-0 group-hover:opacity-100">
              {formattedTimestamp} . {duration}
            </p>
          </div>
          <div className=" md:col-span-1 lg:col-span-1">
            <Image
              src={image || defaultImage}
              height={220}
              width={218}
              alt=""
              className="object-cover rounded-md"
              // placeholder="blur"
            />
          </div>
        </div>
      </Link>
      <Link href={`${id}`}>
        <div className="visible md:hidden shadow-md p-2 rounded-md">
          <Image
            src={image || defaultImage}
            height={220}
            width={420}
            layout="responsive"
            alt=""
            className="object-cover rounded-md"
            // placeholder="blur"
          />
          <div className="mt-4">
            <h2 className="text-text-black transition-all duration-100 ease-in-out font-bold text-2xl line-clamp-2">
              {title}
            </h2>
            <p className="text-text-shade1 font-semibold text-base mt-3 line-clamp-2">
              {description}
            </p>
            <p className="text-text-shade0 text-sm font-bold mt-3 line-clamp-1">
              {formattedTimestamp} . {duration}
            </p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default StoryCard;

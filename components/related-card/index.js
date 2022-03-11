import React from "react";
import Image from "next/image";
import defaultImage from "../../public/image.jpg";
import Link from "next/link";

function RelatedCard({ title, image, id }) {
  return (
    <Link href={`${id}`}>
      <div className="flex max-w-md gap-5">
        <Image
          src={image}
          alt=""
          width={200}
          height={112}
          className="rounded"
        />
        <h4 className="text-base font-semibold text-text-black">{title}</h4>
      </div>
    </Link>
  );
}

export default RelatedCard;

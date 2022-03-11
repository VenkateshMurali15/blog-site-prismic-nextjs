import React from "react";
import Image from "next/dist/client/image";

function ImageSlice({ data }) {
  return (
    <div>
      <Image
        src={data.primary.image.url}
        width={769}
        height={500}
        alt={data.primary.image.alt}
        layout="responsive"
        className="object-cover rounded-md"
      />
    </div>
  );
}

export default ImageSlice;

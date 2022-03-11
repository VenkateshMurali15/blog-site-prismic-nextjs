import React from "react";
import DescriptionSlice from "../../components/slices/description";
import HighlightSlice from "../../components/slices/highlight-slice";
import ImageSlice from "../../components/slices/image-credits";
import InstagramSlice from "../../components/slices/instagram-slice";
import SubtitleCenter from "../../components/slices/subtitle-center";
import SubtitleLeft from "../../components/slices/subtitle-left";
import TwitterSlice from "../../components/slices/twitter-slice";
import YoutubeSlice from "../../components/slices/youtube-slice";
import { client } from "../../prismic-configuration";
import Image from "next/dist/client/image";

import Prismic from "prismic-javascript";

function About({ details }) {
  return (
    <div className=" m-5 md:m-20  grid md:grid lg:grid-cols-4 lg:gap-36 md:place-items-center">
      <div className="lg:col-span-2 ">
        <Image
          src={details.results[0].data.profile_picture.url}
          width={50}
          height={50}
          alt="Tippler"
          layout="responsive"
          className="object-cover rounded-md"
        />
        <div className="bg-primary-shade2 p-3 rounded-lg mt-3">
          <p className="text-text-white font-bold text-center">
            Subscribe to my Newsletter!
          </p>
          <div className="flex gap-3 items-center justify-center mt-3">
            <input
              placeholder="Enter you mail"
              className="rounded-sm  h-10 px-1"
            />
            <button className="h-10 bg-brown-shade1 text-text-white rounded-sm px-1 w-32">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        {details?.results[0]?.data?.body.map((item, index) => {
          switch (item.slice_type) {
            case "descriptionslice":
              return (
                <div key={index}>
                  <DescriptionSlice data={item} />
                </div>
              );
            case "imagecredits":
              return (
                <div key={index}>
                  <ImageSlice data={item} />
                </div>
              );
            case "highlightslice":
              return (
                <div key={index}>
                  <HighlightSlice data={item} />
                </div>
              );
            case "subtitle_-_center":
              return (
                <div key={index}>
                  <SubtitleCenter data={item} />
                </div>
              );
            case "subtitle_-_left":
              return (
                <div key={index}>
                  <SubtitleLeft data={item} />
                </div>
              );
            case "linkslice":
              return (
                <div key={index}>
                  <InstagramSlice data={item} />
                </div>
              );
            case "youtubeslice":
              return (
                <div key={index}>
                  <YoutubeSlice data={item} />
                </div>
              );
            case "twitterslice":
              return (
                <div key={index}>
                  <TwitterSlice data={item} />
                </div>
              );

              break;
          }
        })}
      </div>
    </div>
  );
}

export default About;

export async function getServerSideProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;

  const details = await client.query(
    Prismic.Predicates.at("document.type", "about")
  );

  return {
    props: {
      details,
    },
  };
}

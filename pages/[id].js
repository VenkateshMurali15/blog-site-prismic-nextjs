import React from "react";
import { client } from "../prismic-configuration";
import DescriptionSlice from "../components/slices/description";
import ImageSlice from "../components/slices/image-credits";
import { Date } from "prismic-reactjs";
import HighlightSlice from "../components/slices/highlight-slice";
import SubtitleCenter from "../components/slices/subtitle-center";
import SubtitleLeft from "../components/slices/subtitle-left";
import InstagramSlice from "../components/slices/instagram-slice";

import YoutubeSlice from "../components/slices/youtube-slice";
import TwitterSlice from "../components/slices/twitter-slice";

function BlogDetail({ details }) {
 
  const formatedDate = Date(details.data.published_at).toString();

  return (
    <div>
      <div>
        <div className="m-7 md:m-9 lg:max-w-3xl lg:m-auto">
          {/* title */}
          <h1 className="mt-8 text-3xl text-text-black font-bold">
            {details.data.title[0].text}
          </h1>
          {/* Author */}
          <div className="mt-8 flex space-x-2">
            <p className="text-sm text-text-shade0 font-bold">
              {details &&
                details.data &&
                details.data.author[0] &&
                details.data.author[0].text}
            </p>
            <p className="text-sm text-text-shade0 font-bold"> . </p>
            <p className="text-sm text-text-shade0 font-bold">{formatedDate}</p>
          </div>
          {details.data.body.map((item, index) => {
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
          {/* description */}

          {/* Published */}
          <p className="mt-8 text-lg text-text-shade0 font-bold">
            Published : {formatedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

export async function getServerSideProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;
  const details =
    (await client.getByUID("story", params.id, ref ? { ref } : null)) || {};
  return {
    props: {
      details,
    },
  };
}

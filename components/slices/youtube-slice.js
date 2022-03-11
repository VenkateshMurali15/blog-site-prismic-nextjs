import React from "react";

function YoutubeSlice({ data }) {
  return (
    <div className="m-6 ">
      {data.items.map((item, index) => {
        return (
          <div key={index}>
            <p className="my-8 lg:my-8 text-lg to-primary-shade0 font-bold ">
              {item &&
                item.link_description[0] &&
                item.link_description[0].text}
            </p>
            <div className="aspect-w-16 aspect-h-9 ">
              <iframe
                src={`${item && item.youtube_link && item.youtube_link.url}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default YoutubeSlice;

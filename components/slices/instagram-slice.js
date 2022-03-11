import React from "react";
import InstagramEmbed from "react-instagram-embed";

function InstagramSlice({ data }) {
  return (
    <div className="m-8">
      {data.items.map((item, index) => {
        return (
          <div key={index}>
            <p className="my-8 lg:my-8 text-lg to-primary-shade0 font-bold ">
              {item &&
                item.link_description[0] &&
                item.link_description[0].text}
            </p>
            <div className="aspect-w-8 aspect-h-10">
              <iframe
                src={`${
                  item && item.instagram_link && item.instagram_link.url
                }/embed`}
                scrolling="no"
                allowtransparency="true"
                frameBorder="1"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InstagramSlice;

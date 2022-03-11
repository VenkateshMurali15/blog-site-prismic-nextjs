import React from "react";
import TweetEmbed from "react-tweet-embed";

function TwitterSlice({ data }) {
  return (
    <div className="m-6 ">
      {/* <p className="my-8 lg:my-8 text-lg to-primary-shade0 font-bold ">
        {item && item.link_description[0] && item.link_description[0].text}
      </p>
      <TweetEmbed id={item.twitter_id} /> */}

      {data.items.map((item, index) => {
     
        return (
          <div key={index}>
            <p className="my-8 lg:my-8 text-lg to-primary-shade0 font-bold ">
              {item &&
                item.link_description[0] &&
                item.link_description[0].text}
            </p>
            <div className="grid justify-center sm:justify-items-center align-middle">
              <TweetEmbed
                id={item && item.twitter_id[0] && item.twitter_id[0].text}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TwitterSlice;

import React from "react";
import RelatedCard from "../related-card";

function RelatedSection({ data }) {
  return (
    <div className="mt-10 md:mt-0 lg:col-span-1">
      <h4 className="text-text-black font-bold text-2xl border-b-2 border-common-black pb-1">
        Also Read
      </h4>
      <div className="mt-8 grid gap-8">
        {data &&
          data.results &&
          data.results.map((story) => {
            return (
              <div key={story.id}>
                <RelatedCard
                  image={story.data.thumbnail_image.url}
                  title={story.data.title[0].text}
                  id={story.uid}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RelatedSection;

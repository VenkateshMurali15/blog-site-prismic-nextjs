import React from "react";
import StoryCard from "../story-card";

function StorySection({ data }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-text-black font-bold text-2xl border-b-2 border-common-black pb-1">
        Stories
      </h4>
      <div className="mt-8 grid grid-flow-row gap-8">
        {data &&
          data.results &&
          data.results.map((story) => {
            return (
              <div key={story.id}>
                <StoryCard
                  title={
                    story && story.data.title[0] && story.data.title[0].text
                  }
                  description={
                    story &&
                    story.data.thumbnail_description[0] &&
                    story.data.thumbnail_description[0].text
                  }
                  image={story.data.thumbnail_image.url}
                  duration={
                    story &&
                    story.data &&
                    story.data.time_to_read[0] &&
                    story.data.time_to_read[0].text
                  }
                  publishedAt={story && story.data && story.data.published_at}
                  id={story.uid}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default StorySection;

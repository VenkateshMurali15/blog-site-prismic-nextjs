import React from "react";
import TrendingCard from "../trending-card";

function TrendingSection({ data }) {
  return (
    <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data &&
        data.results &&
        data.results.map((article, index) => {
       
          return (
            <div key={article.uid}>
              <TrendingCard
                number={index + 1}
                title={
                  article && article.data.title[0] && article.data.title[0].text
                }
                id={article.uid}
                category={article?.data?.category[0]?.text}
                duration={article.data.time_to_read[0].text}
                publishedAt={article.data.published_at}
              />
            </div>
          );
        })}
    </div>
  );
}

export default TrendingSection;

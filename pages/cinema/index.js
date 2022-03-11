import React from "react";
import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import TrendingSection from "../../components/trending-section";
import StorySection from "../../components/story-section";
import RelatedSection from "../../components/related-section.js";

function Cinema({ cinema, trendingCinema }) {
  return (
    <div className="m-5 md:m-20">
      <section>
        <TrendingSection data={trendingCinema} />
      </section>
      <section>
        <div className="mt-11 sm:grid md:grid justify-items-center lg:grid-cols-3 gap-11 3xl:flex">
          <StorySection data={cinema} />
          <RelatedSection data="" />
        </div>
      </section>
    </div>
  );
}

export default Cinema;

export async function getServerSideProps({ req }) {
  const cinema = await client.query(
    Prismic.Predicates.at("document.tags", ["cinema"])
  );

  const trendingCinema = await client.query(
    Prismic.Predicates.at("document.tags", ["trending_cinema"])
  );

  return {
    props: {
      cinema,
      trendingCinema,
    },
  };
}

import React from "react";
import { client } from "../../prismic-configuration";

import Prismic from "prismic-javascript";
import TrendingSection from "../../components/trending-section";
import StorySection from "../../components/story-section";
import RelatedSection from "../../components/related-section.js";

function Technology({ technology, trendingTechnology }) {
  return (
    <div className="m-5 md:m-20">
      <section>
        <TrendingSection data={trendingTechnology} />
      </section>
      <section>
        <div className="mt-11 sm:grid md:grid justify-items-center lg:grid-cols-3 gap-11 3xl:flex">
          <StorySection data={technology} />
          <RelatedSection data="" />
        </div>
      </section>
    </div>
  );
}

export default Technology;

export async function getServerSideProps({ req }) {
  const technology = await client.query(
    Prismic.Predicates.at("document.tags", ["technology"])
  );

  const trendingTechnology = await client.query(
    Prismic.Predicates.at("document.tags", ["trending_technology"])
  );

  return {
    props: {
      technology,
      trendingTechnology,
    },
  };
}

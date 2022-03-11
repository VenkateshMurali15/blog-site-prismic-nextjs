import React from "react";
import RelatedSection from "../../components/related-section.js";
import StorySection from "../../components/story-section";
import TrendingSection from "../../components/trending-section";
import { client } from "../../prismic-configuration.js";
import Prismic from "prismic-javascript";

function Finance({ finance, trendingFinance }) {
  return (
    <div className="m-5 md:m-20">
      <section>
        <TrendingSection data={trendingFinance} />
      </section>
      <section>
        <div className="mt-11 sm:grid md:grid justify-items-center lg:grid-cols-3 gap-11 3xl:flex">
          <StorySection data={finance} />
          <RelatedSection data="" />
        </div>
      </section>
    </div>
  );
}

export default Finance;

export async function getServerSideProps({ req }) {
  const finance = await client.query(
    Prismic.Predicates.at("document.tags", ["finance"])
  );

  const trendingFinance = await client.query(
    Prismic.Predicates.at("document.tags", ["trending_finance"])
  );

  return {
    props: {
      finance,
      trendingFinance,
    },
  };
}

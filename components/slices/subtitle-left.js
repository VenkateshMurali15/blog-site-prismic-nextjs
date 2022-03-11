import React from "react";

function SubtitleLeft({ data }) {
  return (
    <p className="text-lg font-bold text-text-black mt-8">
      {data.primary &&
        data.primary.subtitle[0] &&
        data.primary.subtitle[0].text}
    </p>
  );
}

export default SubtitleLeft;

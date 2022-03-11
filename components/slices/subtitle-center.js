import React from "react";

function SubtitleCenter({ data }) {
  return (
    <p className="text-lg font-bold text-text-black text-center mt-8">
      {data.primary.subtitle[0].text}
    </p>
  );
}

export default SubtitleCenter;

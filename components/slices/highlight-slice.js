import React from "react";

function HighlightSlice({ data }) {
 
  return (
    <div className="bg-brown-shade1 p-4 rounded-md mt-8">
      <p className="text-sm text-text-white font-bold leading-7 ">
        {data.primary.highlight_content[0].text}
      </p>
    </div>
  );
}

export default HighlightSlice;

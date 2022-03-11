import React from "react";

function DescriptionSlice({ data }) {
  return (
    <div>
      {data.items[0].description.map((item, index) => {
        return (
          <p
            className="mt-8 text-sm text-text-shade1 font-bold leading-7"
            key={index}
          >
            {item.text}
          </p>
        );
      })}
    </div>
  );
}

export default DescriptionSlice;
{
  /* <p className="mt-8 text-sm text-text-shade1 font-bold leading-7">
{data.items[0].description[0].text}
</p> */
}

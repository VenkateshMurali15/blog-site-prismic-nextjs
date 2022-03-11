import React from "react";

const name = [
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
  { title: "cinema" },
];

function Nav() {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {name.map((item, index) => {
          return (
            <h2
              key={index}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-text-black active:text-primary-shade0"
            >
              Cinema
            </h2>
          );
        })}
      </div>
      {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-primary-shade2 to-primary-shade1 h-10 w-1/12" /> */}
    </nav>
  );
}

export default Nav;

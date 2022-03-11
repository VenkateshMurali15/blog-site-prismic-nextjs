import React from "react";
import Link from "next/link";

function HeaderItem({ title, Icon, href }) {
  return (
    <Link href={`${href}`}>
      <div className="flex flex-col items-center cursor-pointer group  w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default HeaderItem;
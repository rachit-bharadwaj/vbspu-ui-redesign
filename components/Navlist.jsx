import Link from "next/link";
import React from "react";

const Navlist = ({ navItem, link, active }) => {
  return (
    <div
      className={`justify-center px-5 p-2 hover:bg-blue-500 hover:text-white m-2 rounded-xl ${
        active && 'bg-blue-600 text-white'
      }`}
    >
      <Link href={link}>
        <a> {navItem}</a>
      </Link>
    </div>
  );
};

export default Navlist;
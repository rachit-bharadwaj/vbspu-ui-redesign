import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="hidden lg:flex mt-5 bg-blue-600 p-4 shadow-md justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/vbspu-logo.png"
          objectFit="contain"
          height={50}
          width={50}
        />
      </div>

      <div className=" text-white vbspu">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl font-extrabold">
            VEER BAHADUR SINGH PURVANCHAL UNIVERSITY
          </h1>
        </div>
        <p className="flex justify-center">
          (a UP state university celebrating 30+ years of excellence)
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src="/vbs-img.png"
          objectFit="contain"
          height={50}
          width={50}
        />
      </div>
    </div>
  );
}

export default Header;

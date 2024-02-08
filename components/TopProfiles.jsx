import Link from "next/link";
import React from "react";

const TopProfiles = () => {
  function Cards(props) {
    return (
      <div>
        <div className="flex justify-center my-2 md:mx-14">
          <div className="border rounded-lg grid justify-center w-80 py-2">
            <h3 className="flex justify-center">{props.designation}</h3>
            <div className="flex justify-center">
              <img className="h-44 rounded-full" src={props.img} alt="" />
            </div>
            <h3 className="flex justify-center font-bold">{props.title}</h3>
            <p className="flex justify-center">{props.occupation}</p>
            <div className="flex justify-center">
              <Link href={props.readmore}>
                <p className="text-sm text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer border rounded-full p-2">
                  {" "}
                  read more{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:inline-flex justify-center w-full">
      <Cards
        designation="Our Hon'ble Chancellor"
        img="./top-profiles/anandi.jpg"
        title="Smt. Anandiben Patel"
        occupation="Chancellor of VBSPU & Governor of UP"
        readmore="http://164.100.190.32/en/page/profile"
      />

      <Cards
        designation="Our Hon'ble Vice Chancellor"
        img="./top-profiles/nirmala.jpg"
        title="Prof. Nirmala S. Mourya"
        occupation="Vice Chancellor of VBSPU"
        readmore="http://www.vbspu.ac.in/vice-chancellor"
      />
    </div>
  );
};

export default TopProfiles;

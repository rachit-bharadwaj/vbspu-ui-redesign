
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import Navlist from "./Navlist";
import Header from "./header";

export default function Navbar() {
  const [mobMenu, setMobMenu] = useState(false);
  return (
    <div>
      <div className="hidden lg:flex justify-center shadow-md">
        <Navlist navItem="Home" link="/" active />
        <Navlist
          navItem="Tender"
          link="http://vbspu.ac.in/vbspu/list-of-tenders"
        />
        <Navlist
          navItem="Downloads"
          link="http://vbspu.ac.in/vbspu/download/"
        />
        <Navlist
          navItem="Contact Us"
          link="http://vbspu.ac.in/vbspu/contact-us/"
        />
        <Navlist
          navItem="Student Grievance"
          link="http://www.vbspu.ac.in/student-grievance/"
        />
      </div>

      {/* Mobile nav */}

      <div className="lg:hidden flex justify-between p-2 shadow bg-blue-600">
        <div className="text-3xl font-extrabold tracking-wider vbspu text-white">VBSPU</div>
        <div className="flex justify-end">
          <HiMenuAlt4
            onClick={() => setMobMenu(true)}
            className={
              !mobMenu
                ? "text-4xl cursor-pointer text-white p-1"
                : "hidden"
            }
          />
        </div>
      </div>

      {mobMenu && (
        <div className={!mobMenu ? "hidden" : " flex z-50 absolute right-0"}>
          <div>
            <div className="flex justify-end px-2 -mt-11 z-40">
              <HiX
                onClick={() => setMobMenu(false)}
                className="text-4xl cursor-pointer rounded-full bg-blue-700 text-white p-1.5 shadow-xl"
              />
            </div>

            <div className="lg:hidden flex-col text-lg p-2 m-2 border rounded shadow-md z-40 bg-white">
              <div className="max-w-fit" onClick={() => setMobMenu(false)}>
                <Navlist navItem="Home" link="/" />
              </div>
              <Navlist
                navItem="Tender"
                link="http://vbspu.ac.in/vbspu/list-of-tenders"
              />
              <Navlist
                navItem="Downloads"
                link="http://vbspu.ac.in/vbspu/download/"
              />
              <Navlist
                navItem="Contact Us"
                link="http://vbspu.ac.in/vbspu/contact-us/"
              />
              <Navlist
                navItem="Student Grievance"
                link="http://www.vbspu.ac.in/student-grievance/"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

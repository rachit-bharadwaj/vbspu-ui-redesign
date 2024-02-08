import Link from "next/link";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { BiFootball } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineStop } from "react-icons/ai";

export const OtherLinks = () => {
  return (
    <div>
      <div className="hidden md:inline-flex justify-center w-full">
        <div className="border max-w-fit p-2 mx-10 max-h-fit flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://www.vbspu.ac.in/wp-content/uploads/2016/02/ignou.pdf">
            <a>
              <div className="flex justify-center items-center text-center">
                <CgNotes />
              </div>
              <p>IGNOU</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-2 mx-10 max-h-fit  flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://www.vbspu.ac.in/vbspu/sports-council/">
            <a>
              <div className="flex justify-center items-center text-center">
                <BiFootball />
              </div>
              <p>Sports</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-2 mx-10 max-h-fit  flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://vbspurvanchaluniversity.blogspot.com/">
            <a>
              <div className="flex justify-center items-center text-center">
                <FaGraduationCap />
              </div>
              <p>University Blog</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-2 max-h-fit mx-10 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://vbspuexams.com/">
            <a>
              <div className="flex justify-center items-center text-center">
                <RiPagesLine />
              </div>
              <p>Examination Forms</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-2 max-h-fit mx-10 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://www.vbspu.ac.in/feedback-form/">
            <a>
              <div className="flex justify-center items-center text-center">
                <VscFeedback />
              </div>
              <p>Feedback Form</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-2 max-h-fit mx-10 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
          <Link href="http://www.vbspu.ac.in/vbspu/anti-ragging/">
            <a>
              <div className="flex justify-center items-center text-center">
                <AiOutlineStop />
              </div>
              <p>Anti Ragging</p>
            </a>
          </Link>
        </div>
      </div>

      {/* For mobile */}
      <div className="md:hidden">
        {/* row 1 */}
        <div className="inline-flex justify-center w-full">
          <div className="border max-w-fit p-2 mx-5 max-h-fit flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://www.vbspu.ac.in/wp-content/uploads/2016/02/ignou.pdf">
              <a>
                <div className="flex justify-center">
                  <CgNotes />
                </div>
                <p>IGNOU</p>
              </a>
            </Link>
          </div>
          <div className="border max-w-fit p-2 mx-5 max-h-fit  flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://www.vbspu.ac.in/vbspu/sports-council/">
              <a>
                <div className="flex justify-center">
                  <BiFootball />
                </div>
                <p>Sports</p>
              </a>
            </Link>
          </div>
          <div className="border max-w-fit p-2 mx-5 max-h-fit  flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://vbspurvanchaluniversity.blogspot.com/">
              <a>
                <div className="flex justify-center">
                  <FaGraduationCap />
                </div>
                <p>University Blog</p>
              </a>
            </Link>
          </div>
        </div>

        {/* row 2 */}
        <div className="inline-flex justify-center w-full py-5">
          <div className="border max-w-fit p-2 max-h-fit mx-2 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://vbspuexams.com/">
              <a>
                <div className="flex justify-center">
                  <RiPagesLine />
                </div>
                <p>Examination Forms</p>
              </a>
            </Link>
          </div>
          <div className="border max-w-fit p-2 max-h-fit mx-2 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://www.vbspu.ac.in/feedback-form/">
              <a>
                <div className="flex justify-center">
                  <VscFeedback />
                </div>
                <p>Feedback Form</p>
              </a>
            </Link>
          </div>
          <div className="border max-w-fit p-2 max-h-fit mx-2 flex justify-center items-center hover:text-blue-700 hover:border-blue-700 rounded-md">
            <Link href="http://www.vbspu.ac.in/vbspu/anti-ragging/">
              <a>
                <div className="flex justify-center">
                  <AiOutlineStop />
                </div>
                <p>Anti Ragging</p>
              </a>
            </Link>
          </div>
        </div>
      </div>


      
    </div>
  );
};

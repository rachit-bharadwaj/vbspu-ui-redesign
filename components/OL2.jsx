import React from "react";
import Link from "next/link";

export const OL2 = () => {
  return (
    <div>
      <div className="hidden md:inline-flex justify-center w-full my-5">
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://vbspu.ac.in/online">
            <a>
              <p>Online Generation of Provisional/Migration Certificate</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/verify-migration-provisional-certificate/">
            <a>
              <p>Verify Migration/Provisional Certificate</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://heecontent.upsdc.gov.in/Home.aspx">
            <a>
              <p>UP Higher Education Digital Library</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/new-education-policy-faq/">
            <a>
              <p>नई शिक्षा नीति 2020</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://tr.vbspuexams.com/">
            <a>
              <p>Award Verification</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/university-vdo/">
            <a>
              <p>University Video</p>
            </a>
          </Link>
        </div>
        <div className="border max-w-fit p-1 w-full max-h-fit mx-3 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/training-placement/">
            <a>
              <p>Training & Placement</p>
            </a>
          </Link>
        </div>
      </div>

      {/* For mobile */}
      <div className="md:hidden">
        {/* row 1 */}
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://vbspu.ac.in/online">
            <a>
              <p>Online Generation of Provisional/Migration Certificate</p>
            </a>
          </Link>
        </div>
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/verify-migration-provisional-certificate/">
            <a>
              <p>Verify Migration/Provisional Certificate</p>
            </a>
          </Link>
        </div>
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://heecontent.upsdc.gov.in/Home.aspx">
            <a>
              <p>UP Higher Education Digital Library</p>
            </a>
          </Link>
        </div>
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/new-education-policy-faq/">
            <a>
              <p>नई शिक्षा नीति 2020</p>
            </a>
          </Link>
        </div>

        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://tr.vbspuexams.com/">
            <a>
              <p>Award Verification</p>
            </a>
          </Link>
        </div>
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/university-vdo/">
            <a>
              <p>University Video</p>
            </a>
          </Link>
        </div>
        <div className="border p-1 max-h-fit mx-5 my-2 flex justify-center items-center hover:text-white hover:bg-blue-700 bg-gray-100 rounded-md">
          <Link href="http://www.vbspu.ac.in/training-placement/">
            <a>
              <p>Training & Placement</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

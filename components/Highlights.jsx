import React from "react";
import Link from "next/link"

export const Highlights = () => {
  return (
      <div className="md:inline-flex justify-center w-full">

      {/* Highlights */}
    <div className="mx-2 my-7 md:w-1/3"> 
      <h3 className="text-xl bg-blue-700 rounded-lg p-2 text-white max-w-fit">
        Highlights
      </h3>
      <div className="border mt-1 p-2 rounded-lg">
        <ul>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/admission-4/"> Click here for new admission through PUCAT 2021 for the session
            2021-22 </Link>
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/online-fee20"> Click here for submitting online fees (session 2021-22) for
            university campus students </Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://upgovernor.nic.in/"> Website of the Raj Bhavan, Uttar Pradesh</Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.nad.gov.in/">Website of of National Academic Depository (NAD) </Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/training-placement/"> More than 1000 students are placed in three consecutive academic
            sessions. </Link> 
          </li>
        </ul>
      </div>
      </div>


      {/* Latest News */}
      <div className="mx-2 my-7 md:w-1/3"> 
      <h3 className="text-xl bg-blue-700 rounded-lg p-2 text-white max-w-fit">
        Latest News
      </h3>
      <div className="border mt-1 p-2 rounded-lg">
        <ul>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/schedule"> परीक्षा से सम्बंधित सूचनाएं</Link>
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/admission-4/">प्रवेश से संबंधित सूचना</Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/noticescircular/">महाविद्यालय से सम्बंधित सूचनाएं</Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/notice-4/">Notice for Colleges</Link> 
          </li>
        </ul>
      </div>
      </div>


      {/* Announcement */}
      <div className="mx-2 my-7 md:w-1/3"> 
      <h3 className="text-xl bg-blue-700 rounded-lg p-2 text-white max-w-fit">
        Announcement
      </h3>
      <div className="border mt-1 p-2 rounded-lg">
        <ul>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://phdsupervisor.vbspuexams.com/PHD_Registration.aspx">Click here for applying Ph.D Guide</Link>
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/campus-courses/">Examination Notice(Campus Courses)</Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/cctv">मुख्य परीक्षा २०२२ हेतु cctv से निगरानी हेतु सूचना</Link> 
          </li>
          <li className="list-disc list-inside hover:text-blue-700">
            <Link href="http://www.vbspu.ac.in/wp-content/uploads/2022/03/Supervisor-notice.jpg">शोध निर्देशकों हेतु ऑनलाइन आवेदन पत्र भरे जाने के सम्बन्ध में</Link> 
          </li>
        </ul>
      </div>
      </div>






    </div>
  );
};

import React from 'react'
import Link from 'next/link'

// Icons import
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='bg-black border border-t-4 border-x-0 border-b-0 border-gray-200 mt-5 text-white p-2'>
      {/* <h3> Veer Bahadur Singh Purvanchal University</h3> */}
      <div className='flex justify-between my-2 md:items-center'>
      <ul className='lg:inline-flex'>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://vbspu.ac.in/wp-admin">Login</Link></li>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://www.vbspu.ac.in/terms-conditions/">Terms & Conditions</Link></li>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://www.vbspu.ac.in/privacy-policy/">Privacy Policy</Link></li>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://www.vbspu.ac.in/copyright-statement/">Copyright Statement</Link></li>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://www.vbspu.ac.in/hyperlinking-policy/">Hyperlinking Policy</Link></li>
        <li className='py-1 mx-2 lg:mx-5 hover:underline'><Link href="http://www.vbspu.ac.in/statement/">Statement</Link></li>
      </ul>

      <div>
      <p>Connect with us</p>
      <ul className='inline-flex'>
      <li className='mx-1 text-3xl hover:text-blue-600'><Link href="https://www.facebook.com/Vbspusocial/"><a><AiFillFacebook/></a></Link></li>
      <li className='mx-1 text-3xl hover:text-blue-500'><Link href="https://twitter.com/vbspu_official"><a><AiFillTwitterSquare/></a></Link></li>
      <li className='mx-1 text-3xl hover:text-red-600'><Link href="https://youtube.com/c/VBSPurvanchalUniversityJaunpurUttarPradesh"><a><AiFillYoutube/></a></Link></li>
      <li className='mx-1 text-3xl hover:text-pink-700'><Link href="https://www.instagram.com/veer_bahadur_singh_purvanchal_/?hl=en"><a><AiFillInstagram/></a></Link></li>
      <li className='mx-1 text-3xl hover:text-blue-700'><Link href="https://www.linkedin.com/company/veer-bahadur-singh-purvanchal-university-jaunpur-official"><a><AiFillLinkedin/></a></Link></li>
      </ul>
      </div>

      </div>
      <div className='flex justify-center'>
        &copy;2022 VBSPU
      </div>
    </div>
  )
}

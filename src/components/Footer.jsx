import React from 'react'
import { FaDribbble } from "react-icons/fa";
import spink from "../assets/smalllogo.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className=' absolute bottom-0 w-[100%]'>
        <div className='bg-[#f7f6f2]'>
          <div className=' grid grid-cols-12 px-14 h-[400px]'>
            <div className=" col-span-2">
              <img src={spink} height={"40px"} width={"100px"}></img>
              <p className='font-medium '>Dribbble is the world's leading community for creatives to share, grow, and get hired</p>
              <div className='flex flex-nowrap gap-3 mt-4'>
                <span >< FaDribbble/></span>
                <span>< FaTwitter/></span>
                <span>< FaFacebookSquare/></span>
                <span>< FaInstagram/></span>
                <span>< FaPinterestSquare/></span>
              </div>
            </div>
            <div className="col-span-2 py-12">
              <thead className='font-medium mt-12'>For designers</thead>
              
                <tr className="py-12">Go Pro</tr>
                <tr>Explore design work</tr>
                <tr>Design blog</tr>
                <tr>Overtime podcast</tr>
                <tr>Playoffs</tr>
                <tr>Weekly Warm-Up</tr>
                <tr>Refer a Friend</tr>
                <tr>Code of conduct</tr>
              
            </div>
            <div className=" col-span-2 py-12">
            <thead className='font-medium mt-12'>Hire designers</thead>
            <tr>Post a job opening</tr>
            <tr>Post a freelance project</tr>
            <tr>Search for designers</tr>
            <thead className='font-medium mt-12'>Brands</thead>
            <tr>Advertise with us</tr>
            </div>
            <div className=" col-span-2 py-12">
            <thead className='font-medium mt-12'>Company</thead>
            <tr>About</tr>
            <tr>Careers</tr>
            <tr>Support</tr>
            <tr>Media </tr>
            <tr>Testimonials</tr>
            <thead className='font-medium mt-12'>Company</thead>
            <tr>Terms of service</tr>
            <tr>Privacy policy</tr>
            <tr>Cookie policy</tr>
            </div>
            <div className=" col-span-2 py-12">
            <thead className='font-medium mt-12'>Directories</thead>
            <tr>Design jobs</tr>
            <tr>Designers for hire</tr>
            <tr>Freelance designers for hire</tr>
            <tr>Tags</tr>
            <tr>Places</tr>
            <thead className='font-medium mt-12'>Design assets</thead>
            <tr>Dribbble Marketplace</tr>
            <tr>Creative Market</tr>
            <tr>Fontspring</tr>
            <tr>Font Squirrel</tr>
            
            </div>
            <div className=" col-span-2 py-12">
            <thead className='font-medium mt-12'>Design Resources</thead>
            <tr>Freelancing</tr>
            <tr>Design Hiring</tr>
            <tr>Design Portfolio</tr>
            <tr>Design Education</tr>
            <tr>Creative Process</tr>
            <tr> Design Industry</tr>
            <tr>Trends</tr>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 p-6">2023 Dribbble. All rights reserved</div>
            <div className="col-span-1 text-end p-6"><span className='font-bold '>20,501,853 shots</span> dribbbled </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer

import React from "react";
import footer from "../../../../assets/footer.jpg";
import logo from "../../../../assets/logo.png";
import logoText from "../../../../assets/logoText.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="mt-0 md:mt-8 mx-0 sm:mx-4 py-4 md:py-8 flex justify-around rounded-3xl items-center bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url('../../../../assets/footer.jpg')`}}>
        <div className="text-base sm:text-2xl md:text-5xl text-white font-bold flex flex-col">
          <p>join our core</p> <p> team member</p>
        </div>
        <div className="">
          <input
            className="pl-3 rounded-md mr-2 w-36 sm:w-44 md:w-52"
            placeholder="enter email"
          ></input>
          <button className="bg-[rgb(39,76,91)] p-1 rounded-md text-[#ffff]">
            JOIN
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly bg-green-100 mt-4 p-[3vw]">
        <div>
          <div className="flex items-center">
            <img className="h-[50px]" src={logo} alt=""></img>
            <img className="h-[30px]" src={logoText} alt="" />
          </div>
          <div className="py-2 text-md md:text-lg font-bold">Contact Details</div>
          <div className="flex items-center pb-1">
            <i className="icon-[subway--call] text-lg mr-2" /> +91 0000000000
          </div>
          <div className="flex items-center pb-1">
            <i className="icon-[mingcute--mail-fill] text-lg mr-2" />{" "}
            support@rezilla.com
          </div>
        </div>

        <div className="sm:flex-col hidden sm:flex">
          <div className="flex text-md md:text-lg py-2 font-bold">
            Quick Links
          </div>
          <Link to="/" className="font-medium">
            Home
          </Link>
          <Link to="/event" className="font-medium">
            Event
          </Link>
          <Link to="/team" className="font-medium">
            Team
          </Link>
          <Link to="/about" className="font-medium">
            About Us
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="text-md md:text-lg font-bold py-2">
            Follow us on
          </div>
          <div className="flex justify-between w-1/4">
            <Link to="/">
              <i className="icon-[ri--linkedin-fill] text-[#20BD8A] text-2xl"></i>
            </Link>
            <Link to="/">
              <i className="icon-[ri--facebook-fill] text-[#20BD8A] text-2xl"></i>
            </Link>
            <Link to="/">
              <i className="icon-[ri--instagram-line] text-[#20BD8A] text-2xl"></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-md md:text-lg font-bold py-2">
            <p>Get Latest Event Updates</p>
          </div>
          <div className="flex items-center">
            <input placeholder="Enter Your Email" className=""></input>
            <button className="icon-[solar--round-arrow-right-bold] bg-[#20BD8A] text-5xl" />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-row-reverse text-gray-400 px-[6vw] py-1">
        <p className="pl-6">Terms and Conditions</p>
        <p className="pl-6">Privacy Policy</p>
        <p className="pl-6">Disclaimer</p>
      </div>
    </>
  );
}

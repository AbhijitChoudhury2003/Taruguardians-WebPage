import React from "react";
import img1 from "../../../assets/f2.jpg";
import imgChairman from '../../../assets/founder-chairman.jpeg'
import imgNonTech from '../../../assets/founder-nonTech.jpeg'
import imgTech from '../../../assets/founder-tech.jpeg'

const foundersDetail=[
  {
    name:"Utkarsh Bhaskar",
    post:"Chairperson",
    img:imgChairman
  },{
    name:"Sunny Agarwal",
    post:"JS(Non-Tech)",
    img:imgNonTech
  },{
    name:"Varsha Kaushal",
    post:"JS(Tech)",
    img:imgTech
  },{
    name:"Rishav Bose",
    post:"Management Head",
    img:img1
  }
]
const Main = () => {
  return (
    <div className="main-container flex justify-between flex-col mx-0 sm:mx-14 lg:mx-28">

      {/*Read More  */}
      <div className="container1 flex flex-col md:flex-row-reverse justify-center mb-8 md:mb-16">
        {/* image */}
        <div className="w-[100%] md:w-[50%] max-h-96 h-[70vh] mt-8 mb-10 md:mb-0 shadow-[10px_10px_20px_#4e4e4e62] overflow-hidden rounded-[70px] border-[10px] border-solid border-[#30B58A]">
          <img src={img1} alt="" className="object-cover w-full h-full" />
        </div>
        {/* text */}
        <div className="w-[100%] md:w-[50%] p-4 md:pr-8 md:p-0">
          <h1 className="text-4xl font-bold text-[#274C5B] mb-7">
            Hi, we are TaruGuardians, the green club of HIT
          </h1>
          <p className="mb-4">
            Welcome to the National Hookah Community Association "NHCA". We are
            a diverse alliance of businesses from all ends of the Hookah
            experience, from manufacturers and importers of molasses, pipes and
            accessories to distributors, Hookah lounges and Hookah/shisha retail
            stores. <br />
            <br />
            If you are a Hookah business, please join us and help us defend and
            protect your business, our culture and community. <br />
            <br />
            If you are an interested member of the public, welcome. Please enjoy
            learning about Hookah and its unique culture and practice.
          </p>
          <button className="bg-[#20BD8A] text-white text-lg font-bold rounded-md w-[200px] ml-4 my-6 px-6 py-3">
            Read More
          </button>
        </div>
        
      </div>

      {/* Why Taru */}
      <div className="container2 flex flex-col md:flex-row justify-center mt-2 mb-8 md:mb-16">
        {/* image */}
        <div className="w-[100%] md:w-[50%] max-h-[450px] h-[90vh] md:mt-8 mb-10 md:mb-0 shadow-[10px_10px_20px_#4e4e4e62] overflow-hidden rounded-[70px] border-[10px] border-solid border-[#30B58A]">
          <img src={img1} alt="" className="object-cover w-full h-full" />
        </div>
        {/* text */}
        <div className="w-[100%] md:w-[50%] p-4 md:pl-8 md:p-0">
          <h2 className="text-3xl font-[Yellowtail] text-[#7EB693] mb-3">Why taru?</h2>

          <h1 className="text-3xl font-bold mb-4">
            TARU IS YOUR GUARDIANS
          </h1>
          <p className="my-6 text-xl font-serif">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div className="my-2">
            <div className="rounded-full px-4 py-3 flex bg-gray-300 w-2/4 min-w-fit">
              <div className="font-semibold text-lg ml-3 flex justify-center items-center whitespace-no-wrap">
                <div className="text-emerald-950 flex items-center"><i className="icon-[ph--circle-bold] mr-1 text-[#20BD8A]"/> Self Improvement</div>
              </div>
            </div>
            <p className="ml-12 w-[70%] my-3">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
          <div className="my-2">
            <div className="rounded-full px-4 py-3 flex  bg-gray-300 w-2/4 min-w-fit">
              <div className="font-semibold text-lg ml-3 flex justify-center items-center whitespace-no-wrap">
                <div className="text-emerald-950 flex items-center"><i className="icon-[ph--circle-bold] mr-1 text-[#20BD8A]"/> Self Improvement</div>
              </div>
            </div>
            <p className="ml-12 w-[70%] my-3">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>

          <div className="my-2">
            <div className="rounded-full px-4 py-3 flex  bg-gray-300 w-2/4 min-w-fit">
              <div className="font-semibold text-lg ml-3 flex justify-center items-center whitespace-no-wrap">
                <div className="text-emerald-950 flex items-center"><i className="icon-[ph--circle-bold] mr-1 text-[#20BD8A]"/> Self Improvement</div>
              </div>
            </div>
            <p className="ml-12 w-[70%] my-3">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
        </div>
      </div>

      {/* founders */}
      <div className="text-center">
        <div className="text-[#20BD8A] text-xl font-bold">
          <h2>INTRODUCE YOURSELF TO</h2>
        </div>
        <div className="text-5xl font-semibold mt-2">
          <h1>Our Founders</h1>
        </div>
      </div>
      <div className="flex my-0 sm:my-8 w-full flex-wrap">
        {foundersDetail.map((e)=>{
          return(
            <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col justify-between p-4 hover:scale-105 duration-300">
              <img
                className="w-min-[100px] w-full h-[35vh] sm:h-[55vh] object-cover mx-auto bg-white rounded-xl"
                src={e.img}
                alt="/"
              />
              <h2 className="text-xl lg:text-2xl font-bold text-center py-2 md:py-4">
                {e.name}
              </h2>
              <p className="text-center text-lg font-bold text-[#20BD8A]">
                {e.post}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Main;

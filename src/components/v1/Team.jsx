import React from 'react'
import Banner from '../../../assets/banner.jpg'
import Image1 from '../../../assets/T1.jpg'
import Image2 from '../../../assets/T2.jpg'
import Image3 from '../../../assets/T3.jpg'
import Image4 from '../../../assets/T4.jpg'
import Image5 from '../../../assets/T5.jpg'
import Image6 from '../../../assets/T6.jpg'
import Image7 from '../../../assets/T7.jpg'
import Image8 from '../../../assets/T8.jpg'
import Image9 from '../../../assets/T9.jpg'
import Image10 from '../../../assets/T10.jpg'
import Image11 from '../../../assets/T11.jpg'
import Image12 from '../../../assets/T12.jpg'
import Image13 from '../../../assets/T13.jpg'

const teamData = [
  {
    imgSrc:Image1 ,
    name: "Harshit Agarwal",
    post: "President",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc: Image2 ,
    name : 'Astush Sharma',
    post: "Vice President",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc : Image3,
    name: "Vibhor Shandilya",
    post: "Js-Tech",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image4 ,
    name: "Abhir Adhikari",
    post: "Js-Non Tech",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc : Image5,
    name: "Sushil Kumar",
    post: "Treasurer",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image6 ,
    name: "Sakshi Mishra",
    post: "Technical Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image7 ,
    name: "Kumar Aditya",
    post: "Management Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image8 ,
    name: "Sonu Shekhar",
    post: "Administrative Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image9 ,
    name: "Shah Al Faisal",
    post: "Media Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image10 ,
    name: "Khushi Kumari",
    post: "Program Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image11 ,
    name: "Ayushi Gupta",
    post: "Public Relation Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image12 ,
    name: "Rohit Yadav",
    post: "Public Relation Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
  {
    imgSrc:Image13 ,
    name: "Ritik Roshan Kr.",
    post: "Membership Head",
    instaLink: "#",
    faceLink: "#",
    twitterLink: "#"
  },
];

const Team = () => {
  return (
    < div className='mx-0 sm:mx-14 lg:mx-28'>
      <img src={Banner} alt="" className=' w-[100%]' />
      <h2 className='  text-center text-[#7EB693] font-[Yellowtail]  text-3xl pt-4 '>Team</h2>
      <h1 className=' text-center font-bold text-[#274C5B] text-5xl pt-1  font-poppins '>TaruGuardian</h1>
      <div className='text-center text-[#525C60] text-[18px] break-words  font-mono font-poppins max-w-[900px] mx-auto py-5'>
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.
      </div>
      <div className='flex flex-wrap my-10 justify-between'>
        {teamData.map((data) =>{
          return(
            <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[23%] min-w-[120px] flex flex-col rounded-3xl shadow-xl hover:shadow-2xl pb-4 mb-10 justify-between'>
              <img src={data.imgSrc} alt='' className='w-full h-[55vh] object-cover rounded-t-3xl mx-auto' />
                <h1 className='  text-[#274C5B] text-[24px] font-semibold break-words font-[Roboto] py-4 px-3'>{data.name}</h1>
                <div className="flex flex-row justify-between px-3 items-center">
                  <p className=' text-[#7EB693] text-[18px] font-semibold break-words font-[Yellowtail] pt-[-5px] pl-0.5 '>{data.post}</p>
                  <div className='flex'>
                    <i className='icon-[uil--instagram] cursor-pointer mx-1'>{data.instaLink}</i>  
                    <i className='icon-[uil--facebook] cursor-pointer mx-1'>{data.faceLink }</i>
                    <i className='icon-[uil--twitter] cursor-pointer mx-1'>{data.twitterLink}</i>
                  </div >
                </div>
            </div>
          )
          })}
      </div>
    </div>
  )
};
export default Team

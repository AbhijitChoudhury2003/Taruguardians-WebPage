import React from "react";
import Slider from "react-slick";
import imgChairman from "../../../assets/founder-chairman.jpeg";
import imgNonTech from "../../../assets/founder-nonTech.jpeg";
import imgTech from "../../../assets/founder-tech.jpeg";
import img1 from "../../../assets/f2.jpg";
import bannerBackground from "../../../assets/banner background.png";
import Soil from "../../../assets/soil.jpg";
import classRoom from "../../../assets/classroom.png";
import night from "../../../assets/night.jpg";
import carasol1 from "../../../assets/carasol.jpg";
import event1 from "../../../assets/event1.jpg";
import event2 from "../../../assets/event2.png";
import event3 from "../../../assets/event3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Home = () => {
  const foundersDetail = [
    {
      name: "Utkarsh Bhaskar",
      post: "Chairperson",
      img: imgChairman,
    },
    {
      name: "Sunny Agarwal",
      post: "JS(Non-Tech)",
      img: imgNonTech,
    },
    {
      name: "Varsha Kaushal",
      post: "JS(Tech)",
      img: imgTech,
    },
    {
      name: "Rishav Bose",
      post: "Management Head",
      img: img1,
    },
  ];
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(156,163,175)",
          // color: "gray",
          borderRadius:"100%",
          width:"24px",
          height:"24px",
          textAlign:"center",
        }}
        onClick={onClick}
      />
    );
  }
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  const settings = {
    className: "center",
    centerMode: true,
    centerColor: "white",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  const event = [
    { img: event1, heading: "The standard package to grow your business" },
    { img: event2, heading: "boost your promotion" },
    { img: event3, heading: "The basic package to start your promotion" },
  ];
  return (
    <div className="mx-0 sm:mx-14 lg:mx-28">
      <div className="flex flex-col bg-no-repeat bg-center bg-[length:100%_100%] px-8" style={{backgroundImage: `url('../../../assets/banner background.png')`}}>
        <div className="flex h-[23vw] items-center justify-end">
          <img
            src={Soil}
            alt=""
            className="h-[90%] w-[14vw] rounded-xl object-cover mr-4"
          ></img>
          <div className="flex flex-col justify-between h-full">
            <img
              src={classRoom}
              alt=""
              className="h-[45%] rounded-xl object-cover"
            ></img>
            <img
              src={night}
              alt=""
              className="h-[45%] rounded-xl object-cover"
            ></img>
          </div>
        </div>
        {/* carasol------------------------------- */}

        <div className="w-[30vw] mt-[-20vw]">
          <h3 className="text-[#20BD8A] text-[1.5vw] w-[15vw]">
            TARU GURDIANS
          </h3>
          <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl text-left font-bold mb-4">
            THE GREEN CLUB OF HIT
          </h1>
          <Slider {...settings1}>
            <div className="bg-slate-300 rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={carasol1}
                alt=""
              ></img>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>

      <div className="p-[2vw] shadow-boxshadow my-[4vw]">
        <h1 className="text-[3vw] font-bold text-center m-[1vw]">
          About our institute
        </h1>
        <h1 className="text-gray-400 text-[2vw] w-[80%] m-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </h1>
      </div>
      <div className='h-fit mb-[3vw] bg-gradient-to-r from-green-400 from-2% via-cyan-500 via-24% to-emerald-400 to-85%' >
        <p className="text-2xl lg:text-3xl text-center pt-4 font-bold">Events & Latest News</p>
        <div className="w-[80%] mx-auto mtz-auto h-full">
          <Slider {...settings}>
            {event.map((item, index) => {
              return (
                <div className="p-[2vw] h-full">
                  <div className="w-fit sm:w-[25vw] p-[2vw] rounded-2xl border-solid border-white border-[2px] ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[20vw] h-[15vw]  rounded-2xl"
                    ></img>
                    <h1 className="text-[2vw] font-bold text-white">
                      {item.heading}
                    </h1>
                    <div className="relative">
                      <div className="w-[3vw] h-[3vw] rounded-[50%] bg-white"></div>
                      <div className="w-[3vw] h-[3vw] rounded-[50%] bg-yellow-300 absolute left-[2vw] top-0"></div>
                      <div className="w-[3vw] h-[3vw] rounded-[50%] bg-gray-400 absolute left-[4vw] top-0"></div>
                      <h1 className="absolute left-[8vw] top-[0.5vw] text-[1.5vw] text-gray-300">
                        140k views
                      </h1>
                      <h1 className="absolute left-[18vw] top-[0.5vw] text-[1.5vw] text-gray-300">
                        $100
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* founders */}
      <div className="text-center pt-4">
        <div className="text-[#20BD8A] font-bold">
          <h2>INTRODUCE YOURSELF TO</h2>
        </div>
        <div className="text-[3vw] font-semibold mb-2">
          <h1>Our team of experts</h1>
        </div>
      </div>
      <div className="flex flex-wrap">
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

      <div className='p-[2vw] shadow-boxshadow mx-[2vw] my-[2vw] bg-gradient-to-r from-green-400 from-2% via-cyan-500 via-24% to-emerald-400 to-85%' >
        <h1 className="text-[3vw] font-bold text-center">About TaruGuardians</h1>
        <h1 className="text-white text-[2vw] w-[80%] m-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </h1>
      </div>
    </div>
  );
};
export default Home;

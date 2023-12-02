import React from "react";
import EventImg from "../../../assets/event_poster.png";
import Item1 from "../../../assets/item-1.png"
import Item2 from "../../../assets/item-2.png";
import Item3 from "../../../assets/item-3.png";
import Item4 from "../../../assets/item-4.png";
import Item5 from "../../../assets/item-5.png";
import Item6 from "../../../assets/item-6.png";

const Event = () => {
  const eventsData = [
    {
      day: "17",
      month: "AUG",
      image: Item1,
      heading: "CodeScape",
      subHeading: "This was the most awaited and exciting event of the semester which was organized by team Taruguardians, in collaboration with @GeeksforGeeks where ome can put their skills to the test and compete against other talented coders. This event helped the 2nd and 3rd year students in how the placement is done in the college and everyone participated in it actively."
    },
    {
      day: "30",
      month: "JUL",
      image: Item2,
      heading: "Bridging-The-Gap",
      subHeading: " The primary goal of the event was to provide one to one mentorship with the industry experts out there to help and guide you for your career and to keep you updated about the exciting opportunities like GSoC and much more.",
    },
    {
      day: "5",
      month: "JUN",
      image: Item3,
      heading: "Aamsotsav",
      subHeading: "On the occasion of World Environment Day ,Tarugurdians, the green club of the college, organised a unique campaign called Aamotsav to promote environmental sustainability and encourage people to grow their own mango trees. The campaign revolves around the simple ritual of eating a mango and washing and drying its seeds.",
    },
    {
      day: "15",
      month: "MAY",
      image: Item4,
      heading: "Quiz-o-Mania",
      subHeading: "Team Taruguardians is proud to announce Quiz-o-mania. An event that will give you an environment to test your knowledge on various topics like Entertainment, Sports, Science and Tech , our Heritage .It's an excellent opportunity to showcase your erudition.",
    },
    {
      day: "10",
      month: "MAR",
      image: Item5,
      heading: "Cryptocurrency Workshop",
      subHeading: " A super interactive and fun workshop orgainsed by team TaruGuardians about Cryptocurrency,teaching and empowering students about the new age coins. Benefits of attending the workshop: Training on the latest fin-tech, An advantage over your peers, Hands-on experience, Self reliable Trader.",
    },
    {
      day: "5",
      month: "JUN",
      image: Item6,
      heading: "Nirmana",
      subHeading: "In this event, TaruGardians  came up with a fantastic opportunity where one can bring out their deep-sorted ideas in front of like-minded people and be recognized and also be able to 'Turn perceived risk into an asset'.",
    },
    {
      day: "5",
      month: "JUN",
      image: Item6,
      heading: "Paryavaran Quiz Time",
      subHeading: "In this event, We came up with a fun quiz about Paryavaranam which aimed at circulating consciousness about the Environment.",
    },
  ];

  return (
    <div className="mx-0 sm:mx-14 lg:mx-28">
      {/* <img className=" w-[100%]" src={EventImg} alt=""/> */}
      <div className="w-full flex flex-wrap justify-between mt-8">
        {eventsData.map((item) => {
        return (
          <div className="w-full sm:w-[45%] lg:w-[30%] mb-[15vh] md:mb-[25vh] relative">
            <div>
              <img className="rounded-3xl w-[100%]" src={item.image} alt=""></img>
            </div>
            <div className="flex absolute top-3">
              <div className="flex flex-col rounded-full h-[5.2vw] w-[5.2vw] bg-slate-100 ml-3 text-center text-[1.5vw] p-1 justify-center">
                <p className="leading-none">{item.day}</p>
                <div className="">{item.month}</div>
              </div>
            </div>
            <div className="w-[90%] bg-white absolute top-[60%] left-[5%] rounded-2xl px-4 pb-4 pt-1 shadow-2xl flex flex-col overflow-hidden">
              <div className="text-xl font-bold h-[56px] sm:py-0 flex justify-center items-center text-center text-[#274C5B]">
                {item.heading}
              </div>
              <div className="text-gray-400 overflow-hidden h-[100px] ">
                {item.subHeading}
              </div>
              <p className="flex font-bold text-gray-600 mt-1 items-center">
                Read More <i className="icon-[emojione-monotone--right-arrow] ml-1"></i>
              </p>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}

export default Event

import { useState } from "react";
import { Navbar } from "../../components";
import launch_vehicle_landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launch_vehicle_portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import space_capsule from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "../../assets/technology/image-spaceport-landscape.jpg";

export default function Technology() {
  const data = [
    {
      heading: "the terminology...",
      title: "launch vehicle",
      body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      heading: "the terminology...",
      title: "spaceport",
      body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      heading: "the terminology...",
      title: "space capsule",
      body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [selected, setSelected] = useState(0);
  const buttons = [0, 1, 2];

  let renderedImage;

  switch (selected) {
    case 0:
      renderedImage = (
        <>
          <img
            className="lg:hidden lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 w-full h-auto object-contain"
            src={launch_vehicle_landscape}
            alt="launch vehicle"
          />
          <div className="sm:hidden bg-no-repeat  md:block lg:col-start-3 lg:col-end-4 lg:row-start-2  lg:row-end-3 w-full md:h-auto object-contain bg-launch_vehicle_landscape lg:bg-launch_vehicle_portrait"></div>
        </>
      );
      break;
    case 1:
      renderedImage = (
        
        <>
          <img
            className="lg:hidden lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 w-full h-auto object-contain"
            src={spaceport}
            alt="launch vehicle"
          />
          <div className="sm:hidden md:block lg:col-start-3 lg:col-end-4 lg:row-start-2  lg:row-end-3 w-full md:h-auto object-contain bg-spaceport_landscape lg:bg-spaceport_portrait"></div>
        </>
      );
      break;
    case 2:
      renderedImage = (
        <>
          <img
            className="lg:hidden lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 w-full h-auto object-contain"
            src={space_capsule}
            alt="launch vehicle"
          />
          <div className="sm:hidden md:block lg:col-start-3 lg:col-end-4 lg:row-start-2  lg:row-end-3 w-full md:h-auto object-contain bg-space_capsule_portrait lg:bg-space_capsule_portrait"></div>
        </>
      );
      break;
    default:
      renderedImage = "";
  }

  return (
    <main className="bg-cover min-h-screen min-w-screen bg-technology_mobile md:bg-tecnology_tablet bg-no-repeat lg:bg-technology_desktop">
      <Navbar active="technology" />
      <div className="custom-grid lg:grid box-border lg:pl-28 text-center pb-12">
        <h2 className="lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2 md:pl-6 lg:text-3xl font-barlow-condensed md:text-left uppercase text-white tracking-widest my-6 mt-4">
          <span className="text-gray-100 opacity-25">03</span> space launch 101
        </h2>
        {renderedImage}
        <div className="lg:flex justify-center lg:items-end lg:flex-col lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          {buttons.map((item) => (
            <button
              onClick={() => setSelected(item)}
              className={`lg:m-0 lg:mb-8 lg:h-20 lg:w-20 my-8 mr-4 ${
                item === selected
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              } border border-white border-solid w-10 h-10 rounded-full box-border`}
            >
              {item + 1}
            </button>
          ))}
        </div>
        <div className="lg:flex lg:justify-center lg:flex-col lg:col-start-2 lg:col-end-3 lg:w-10/12 lg:row-start-2 lg:row-end-3 text-center md:w-3/5 md:mx-auto">
          <p className="lg:w-full lg:text-left w-11/12 mx-auto tracking-widest font-barlow-condensed uppercase text-center text-off-pink">
            {data[selected].heading}
          </p>
          <p className="lg:w-full lg:text-6xl md:text-5xl lg:text-left w-11/12 py-1 mx-auto font-Bellefair trac uppercase text-2xl text-center text-white">
            {data[selected].title}
          </p>
          <p className="lg:w-full lg:text-lg lg:text-left py-4 pt-2 w-11/12 mx-auto font-barlow text-center text-off-pink">
            {data[selected].body}
          </p>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import { Navbar } from "../../components";
import Douglas from "../../assets/crew/image-douglas-hurley.webp";
import Mark from "../../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../../assets/crew/image-victor-glover.webp";
import Anu from "../../assets/crew/image-anousheh-ansari.webp";

export default function Crew() {
  const crew = [
    {
      pos: "commander",
      name: "douglas hurley",
      about:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      pos: "mission specialist",
      name: "mark shuttleworth",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      pos: "pilot",
      name: "victor glover",
      about:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      pos: "flight engineer",
      name: "anousheh ansari",
      about:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const [selected, setSelected] = useState(0);

  const buttons = [0, 1, 2, 3];

  let renderdImage;

  switch (selected) {
    case 0:
      renderdImage = (
        <img
          className="lg:h-auto lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 md:order-3 md:h-96 w-11/12 h-56 object-contain mx-auto"
          src={Douglas}
          alt="astronaut"
        />
      );
      break;
    case 1:
      renderdImage = (
        <img
          className="lg:h-auto lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 md:order-3 md:h-96 w-11/12 h-56 object-contain mx-auto"
          src={Mark}
          alt="astronaut"
        />
      );
      break;
    case 2:
      renderdImage = (
        <img
          className="lg:h-auto lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 md:order-3 md:h-96 w-11/12 h-56 object-contain mx-auto"
          src={Victor}
          alt="astronaut"
        />
      );
      break;
    case 3:
      renderdImage = (
        <img
          className="lg:h-auto lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 md:order-3 md:h-96 w-11/12 h-56 object-contain mx-auto"
          src={Anu}
          alt="astronaut"
        />
      );
      break;
    default:
      renderdImage = "";
  }

  return (
    <main className="bg-cover min-h-screen min-w-screen bg-crew_mobile md:bg-crew_tablet bg-no-repeat lg:bg-crew_desktop">
      <Navbar active="crew" />
      <div className="lg:px-12 lg:grid lg:grid-row-3 lg:grid-cols-2 md:flex md:flex-col text-center w-11/12 mx-auto">
        <h2 className="lg:col-start-1 lg:col-end-2 lg:text-3xl font-barlow-condensed md:text-left uppercase text-white tracking-widest my-6 mt-4">
          <span className="text-gray-100 opacity-25">02</span> meet your crew
        </h2>
        {renderdImage}
        <hr className="opacity-20 md:hidden" />

        <div className="lg:row-start-3 lg:text-left lg:row-end-4 lg:col-start-1 lg:col-end-2 my-4 md:my-0 md:mb-4 mb-2 md:order-2">
          {buttons.map((item) => (
            <button
              onClick={() => setSelected(item)}
              className={`${
                item !== selected && "opacity-25"
              } w-2 h-2 rounded-full bg-white mr-4`}
            ></button>
          ))}
        </div>
        <div className="lg:w-full lg:text-left lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2 pb-12 md:order-1 md:pb-2 md:w-3/4 md:mx-auto md:h-48">
          <p className="lg:text-3xl uppercase text-white opacity-25 md:text-2xl font-Bellafair">
            {crew[selected].pos}
          </p>
          <p className="lg:text-5xl uppercase text-white text-2xl tracking-wide md:text-4xl font-Bellafair">
            {crew[selected].name}
          </p>
          <p className="lg:text-xl lg:w-full text-white w-11/12 text-justify lg:text-left lg:mx-0 md:text-center mx-auto my-4 font-barlow">
            {crew[selected].about}
          </p>
        </div>
      </div>
    </main>
  );
}

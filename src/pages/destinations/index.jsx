import { useState } from "react";
import { Navbar, DestinationNav } from "../../components";
import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";

export default function Destinations() {
  //const data = ["moon", "mars", "europa", "titan"];
  const [selected, setSelected] = useState("moon");
  let renderComponent;

  switch (selected) {
    case "moon":
      renderComponent = (
        <div>
          <h2 className="text-6xl md:my-2 text-white uppercase text-center lg:text-left lg:text-7xl">
            moon
          </h2>
          <div className="mb-6">
            <p class="mx-auto md:w-4/6 w-11/12 lg:w-full text-center text-white lg:text-left">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <hr className="w-11/12 mx-auto lg:w-full" />
          <div className="md:flex md:pt-8 md:pb-12 md:justify-evenly lg:justify-between md:align-center lg:align-start">
            <div className=" md:mt-0 text-center mt-4">
              <p className="text-white uppercase">avg. distance</p>
              <p className="text-white uppercase text-3xl">384, 400 KM</p>
            </div>
            <div className="md:py-0 text-center py-6">
              <p className="text-white uppercase ">Est. travel time</p>
              <p className="text-white uppercase text-3xl">3 days</p>
            </div>
          </div>
        </div>
      );
      break;
    case "mars":
      renderComponent = (
        <div>
          <h2 className="text-6xl md:my-2 text-white uppercase text-center lg:text-left lg:text-7xl">
            mars
          </h2>
          <div className="mb-6">
            <p class="mx-auto md:w-4/6 w-11/12 lg:w-full text-center text-white lg:text-left">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <hr className="w-11/12 mx-auto lg:w-full" />
          <div className="md:flex md:pt-8 md:pb-12 md:justify-evenly lg:justify-between md:align-center lg:align-start">
            <div className=" md:mt-0 text-center mt-4">
              <p className="text-white uppercase">avg. distance</p>
              <p className="text-white uppercase text-3xl">225 mil. KM</p>
            </div>
            <div className="md:py-0 text-center py-6">
              <p className="text-white uppercase ">Est. travel time</p>
              <p className="text-white uppercase text-3xl">9 months</p>
            </div>
          </div>
        </div>
      );
      break;
    case "europa":
      renderComponent = (
        <div>
          <h2 className="text-6xl md:my-2 text-white uppercase text-center lg:text-left lg:text-7xl">
            europa
          </h2>
          <div className="mb-6">
            <p class="mx-auto md:w-4/6 w-11/12 lg:w-full text-center text-white lg:text-left">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
          <hr className="w-11/12 mx-auto lg:w-full" />
          <div className="md:flex md:pt-8 md:pb-12 md:justify-evenly lg:justify-between md:align-center lg:align-start">
            <div className=" md:mt-0 text-center mt-4">
              <p className="text-white uppercase">avg. distance</p>
              <p className="text-white uppercase text-3xl">628 mil. KM</p>
            </div>
            <div className="md:py-0 text-center py-6">
              <p className="text-white uppercase ">Est. travel time</p>
              <p className="text-white uppercase text-3xl">3 years</p>
            </div>
          </div>
        </div>
      );
      break;
    case "titan":
      renderComponent = (
        <div>
          <h2 className="text-6xl md:my-2 text-white uppercase text-center lg:text-left lg:text-7xl">
            titan
          </h2>
          <div className="mb-6">
            <p class="mx-auto md:w-4/6 w-11/12 lg:w-full text-center text-white lg:text-left">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <hr className="w-11/12 mx-auto lg:w-full" />
          <div className="md:flex md:pt-8 md:pb-12 md:justify-evenly lg:justify-between md:align-center lg:align-start">
            <div className=" md:mt-0 text-center mt-4">
              <p className="text-white uppercase">avg. distance</p>
              <p className="text-white uppercase text-3xl">1.6 bil. KM</p>
            </div>
            <div className="md:py-0 text-center py-6">
              <p className="text-white uppercase ">Est. travel time</p>
              <p className="text-white uppercase text-3xl">7 years</p>
            </div>
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  let renderedImage;

  switch (selected) {
    case "moon":
      renderedImage = (
        <img
          className="w-40 h-40 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96"
          src={moon}
          alt={`${selected}`}
        />
      );
      break;
    case "mars":
      renderedImage = (
        <img
          className="w-40 h-40 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96"
          src={mars}
          alt={`${selected}`}
        />
      );
      break;
    case "europa":
      renderedImage = (
        <img
          className="w-40 h-40 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96"
          src={europa}
          alt={`${selected}`}
        />
      );
      break;
    case "titan":
      renderedImage = (
        <img
          className="w-40 h-40 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96"
          src={titan}
          alt={`${selected}`}
        />
      );
      break;

    default:
      break;
  }

  return (
    <div className="bg-cover min-h-screen min-w-screen bg-destination_mobile md:bg-destination_tablet lg:bg-destination_desktop lg:min-h-screen  bg-no-repeat">
      <Navbar active="destination" />
      <div className="lg:w-11/12 lg:mx-auto pt-6 md:px-6">
        <h3 class="text-center lg:text-3xl md:text-xl md:text-left">
          <span className="text-gray-100 mr-4">01</span>
          <span className="inline tracking-wider uppercase text-white">
            pick your destination
          </span>
        </h3>
        <div className="lg:flex  ">
          <div className="w-full text-center my-6">{renderedImage}</div>
          <div class="lg:flex lg:w-4/6 lg:align-left lg:flex-col lg:justify-between ">
            <DestinationNav setSelected={setSelected} active={selected} />
            {renderComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

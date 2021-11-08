import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as ROUTES from "../constant/routes";

export default function Navbar({ active }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex relative py-5 justify-between">
      <div className="flex-1 pl-4 lg:py-4 lg:pl-10 md:flex md:items-center">
        <RouterLink to={ROUTES.HOME}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z"
              fill="#0B0D17"
            />
          </svg>
        </RouterLink>
      </div>
      <button className="md:hidden mr-4" onClick={() => setMenu(true)}>
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="3" fill="#D0D6F9" />
          <rect y="9" width="24" height="3" fill="#D0D6F9" />
          <rect y="18" width="24" height="3" fill="#D0D6F9" />
        </svg>
      </button>

      <div
        className={`z-50 md:hidden transition-transfrom duration-500 transform ${
          menu ? "translate-x-0" : "translate-x-72"
        } fixed backdrop-filter backdrop-blur-xl right-0 top-0 px-4 py-7 w-72 h-screen text-right bg-transparent`}
      >
        <button onClick={() => setMenu(false)}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.5752"
              y="0.954102"
              width="24"
              height="3"
              transform="rotate(45 2.5752 0.954102)"
              fill="#D0D6F9"
            />
            <rect
              x="0.454102"
              y="17.9246"
              width="24"
              height="3"
              transform="rotate(-45 0.454102 17.9246)"
              fill="#D0D6F9"
            />
          </svg>
        </button>
        <ul className="py-8 text-left px-4">
          <li className={`font-barlow-condensed  py-6 text-white tracking-tighter`}>
            <RouterLink>
              <span className="font-semibold">00</span> HOME
            </RouterLink>
          </li>
          <li className={`font-barlow-condensed  py-6 text-white tracking-tighter`}>
            <RouterLink to="/destinations">
              <span className="font-semibold">01</span> DESTINATION
            </RouterLink>
          </li>
          <li className={`font-barlow-condensed  py-6 text-white tracking-tighter`}>
            <RouterLink to="/technology">
              <span className="font-semibold">02</span> TECHNOLOGY
            </RouterLink>
          </li>
          <li className={`font-barlow-condensed  py-6 text-white tracking-tighter`}>
            <RouterLink to="/crew">
              <span className="font-semibold">03</span> CREW
            </RouterLink>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:hidden  pr-4 mr-1 bg-transparent backdrop-filter backdrop-blur-xl justify-between w-3/5 text-left px-4">
        <li
          className={`font-barlow-condensed ${
            active === "home" && "border-solid border-white border-b-2"
          }  border-solid border-white border-b-2 py-6 text-white tracking-widest`}
        >
          
            <RouterLink>
              <span className="font-semibold">00</span> HOME
            </RouterLink>
    
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "destination" && "border-solid border-white border-b-2"
          } py-6 text-white tracking-widest`}
        >
          <RouterLink to="/destination">
            <span className="font-semibold">02</span> DESTINATION
          </RouterLink>
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "technology" && "border-solid border-white border-b-2"
          }  py-6 text-white tracking-widest`}
        >
          <RouterLink to="/technology">
            <span className="font-semibold">02</span> TECHNOLOGY
          </RouterLink>
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "crew" && "border-solid border-white border-b-2"
          }  py-6 text-white tracking-widest`}
        >
          <RouterLink to="/crew">
            <span className="font-semibold">03</span> CREW
          </RouterLink>
        </li>
      </ul>
      <ul className="hidden md:flex pr-4 mr-1 bg-transparent backdrop-filter backdrop-blur-xl justify-evenly w-3/5 text-left md:pl-4 lg:pl-24">
        <li
          className={`font-barlow-condensed ${
            active === "home" && "border-solid border-white border-b-2"
          } lg:-ml-12 py-6 text-white tracking-widest`}
        >
          <RouterLink to="/">HOME</RouterLink>
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "destination" && "border-solid border-white border-b-2"
          }  py-6 text-white tracking-widest`}
        >
          <RouterLink to="/destinations">DESTINATION</RouterLink>
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "technology" && "border-solid border-white border-b-2"
          }  py-6 text-white tracking-widest`}
        >
          <RouterLink to="/technology">TECHNOLOGY</RouterLink>
        </li>
        <li
          className={`font-barlow-condensed ${
            active === "crew" && "border-solid border-white border-b-2"
          }  py-6 text-white tracking-widest`}
        >
          <RouterLink to="/crew">CREW</RouterLink>
        </li>
      </ul>
    </div>
  );
}

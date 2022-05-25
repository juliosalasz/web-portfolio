import { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logoIcon from "../../assets/logoIcon.svg";

import { Link } from "react-scroll";

const NavigationMobile = () => {
  const listItemMobile = "border-b-2 border-zinc-300 w-full";

  const [navmobile, setNavMobile] = useState(false);
  const mobileMenuHandler = () => {
    setNavMobile(!navmobile);
  };
  const linkMenuHandler = () => {
    setNavMobile(false);
  };

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg text-black bg-slate-100">
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex w-10 items-center">
          <img src={logoIcon} alt="Logo Icon" />
        </div>
        <div onClick={mobileMenuHandler}>
          {!navmobile ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5" />
          )}
        </div>
      </div>
      <ul
        className={
          !navmobile ? "hidden" : "absolute bg-zinc-200 w-full px-8 text-black"
        }
      >
        <li className={listItemMobile}>
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={linkMenuHandler}
          >
            HOME
          </Link>
        </li>
        <li className={listItemMobile}>
          <Link
            to="AboutMe"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={linkMenuHandler}
          >
            ABOUT ME
          </Link>
        </li>
        <li className={listItemMobile}>
          <Link
            to="WebDeveloper"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={linkMenuHandler}
          >
            WEB DEVELOPER
          </Link>
        </li>
        <li className={listItemMobile}>
          <Link
            to="GraphicDesigner"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={linkMenuHandler}
          >
            GRAPHIC DESIGNER
          </Link>
        </li>
        <li className={listItemMobile}>
          <Link
            to="ContactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={linkMenuHandler}
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMobile;

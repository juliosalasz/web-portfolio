import { useState } from "react";

import logoIcon from "../../assets/logoIcon.svg";
import logoIconWhite from "../../assets/logoIconWhite.svg";

import { Link } from "react-scroll";

const NavigationDesktop = () => {
  const [navScroll, setNavScroll] = useState(false);
  const colorHandler = () => {
    if (window.scrollY >= 740) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  //listener of scroll number
  window.addEventListener("scroll", colorHandler);

  const listColorScroll = `${navScroll ? "text-black" : "text-white"}`;

  const listItemMobile = "hover:font-medium";

  return (
    //first div selects color for font and background
    //interior div holds the icon list, desktop list and hidden hamburger button
    //final ul handles the mobile list
    <div
      className={`w-screen h-[80px] z-10 fixed drop-shadow-lg ${
        navScroll ? "  bg-slate-100" : " bg-t"
      } `}
    >
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex w-10 items-center">
          {navScroll ? (
            <img src={logoIcon} alt="Logo Icon" />
          ) : (
            <img src={logoIconWhite} alt="Logo Icon" />
          )}
        </div>
        <div className="flex pr-4">
          <ul className="flex md:text-xs lg:text-lg xl:text-xl lg:font-light ">
            <li className={listItemMobile}>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={listColorScroll}
              >
                HOME
              </Link>
            </li>
            <li className={listItemMobile}>
              <Link
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={listColorScroll}
              >
                ABOUT ME
              </Link>
            </li>
            <li className={listItemMobile}>
              <Link
                to="WebDeveloper"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={listColorScroll}
              >
                WEB DEVELOPER
              </Link>
            </li>
            <li className={listItemMobile}>
              <Link
                to="GraphicDesigner"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className={listColorScroll}
              >
                GRAPHIC DESIGNER
              </Link>
            </li>
            <li className={listItemMobile}>
              <Link
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={listColorScroll}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;

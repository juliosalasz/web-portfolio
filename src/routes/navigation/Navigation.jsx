import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import useScreenType from "react-screentype-hook";

const Navigation = () => {
  const listItemMobile = "border-b-2 border-zinc-300 w-full";
  const [navmobile, setNavMobile] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const mobileMenuHandler = () => {
    setNavMobile(!navmobile);
  };

  const colorHandler = () => {
    if (window.scrollY >= 740) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", colorHandler);

  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1440,
  });

  return (
    <div
      className={`w-screen h-[80px] z-10 fixed drop-shadow-lg ${
        navScroll ? " text-black bg-slate-100" : "text-white bg-t"
      } `}
    >
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">JS</h1>
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex md:text-xs lg:text-lg xl:text-xl lg:font-light ">
            <li className=" hover:font-medium">HOME</li>
            <li className=" hover:font-medium">ABOUT ME</li>
            <li className=" hover:font-medium">WEB DEVELOPER</li>
            <li className=" hover:font-medium">GRAPHIC DESIGNER</li>
            <li className=" hover:font-medium">CONTACT ME</li>
          </ul>
        </div>
        <div className="md:hidden" onClick={mobileMenuHandler}>
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
        <li className={listItemMobile}>HOME</li>
        <li className={listItemMobile}>ABOUT ME</li>
        <li className={listItemMobile}>WEB DEVELOPER</li>
        <li className={listItemMobile}>GRAPHIC DESIGNER</li>

        <li className={listItemMobile}>CONTACT ME</li>
      </ul>
    </div>
  );
};

export default Navigation;

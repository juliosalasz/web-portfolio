import { Icon } from "@iconify/react";
import { Fragment } from "react";

import techItOut from "../../assets/techitout.jpg";
import clips from "../../assets/clips.jpg";

import "./webProjects.css";

const WebProjects = () => {
  function scaleHeader() {
    var scalable = document.querySelectorAll(".scale--js");
    var margin = 10;
    for (var i = 0; i < scalable.length; i++) {
      var scalableContainer = scalable[i].parentNode;
      scalable[i].style.transform = "scale(1)";
      var scalableContainerWidth = scalableContainer.offsetWidth - margin;
      var scalableWidth = scalable[i].offsetWidth;
      scalable[i].style.transform =
        "scale(" + scalableContainerWidth / scalableWidth + ")";
      scalableContainer.style.height =
        scalable[i].getBoundingClientRect().height + "px";
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var myScaleFunction = debounce(function () {
    scaleHeader();
  }, 250);

  myScaleFunction();

  window.addEventListener("resize", myScaleFunction);
  return (
    <Fragment>
      <section className="w-full py-5 md:py-20 bg-black mx-auto px-0 md:px-5 relative">
        <div className="my-0 py-[8rem] w-[80%] mx-auto">
          <h2 className="text-white text-[13rem] font-black leading-[11rem]">
            BIG <span className="text-[#02ffc0]">IDEAS</span>
          </h2>
          <h2 className="text-white text-[11rem] leading-[12rem]  font-black">
            BIG <span className="text-[#ffbb02]">PROJECTS</span>
          </h2>
        </div>
        <div className="flex justify-end ">
          <Icon className="text-white text-9xl" icon="la:angle-down" />
        </div>
      </section>
      <section className="bg-[#02ffea] py-40">
        <div class="scale__container--js">
          <h2 class="scale--js font-black">ECOMMERCE SITE</h2>
        </div>
        <div className="w-full px-40 py-20 flex">
          <div className="w-[70%]">
            <img src={techItOut} alt="" />
          </div>
          <div className="pl-10 w-[30%]">
            <h2 className="text-6xl font-black"> TECHItOut</h2>
            <p className=" py-10">
              A <b>fullstack</b> web app. Created using <b>React</b> and{" "}
              <b>Typescript</b> from scratch. This ecommerce site uses its own{" "}
              <b>NodeJs</b> server and a <b>Mongo DB</b> database. The cart can
              hold items based on different categories of items and stock
              keeping units.
            </p>
            <div class="inline-flex">
              <a
                href="https://techitout-v3.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none border-r-2 border-[#02ffea]">
                  See it live
                </button>
              </a>
              <a
                href="https://github.com/juliosalasz/ecommerce-client-typescript-v3"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#02ffea] pb-20">
        <div class="scale__container--js">
          <h2 class="scale--js font-black">UPLOADING CLIPS SITE</h2>
        </div>
        <div className="w-full px-40 py-20 flex">
          <div className="w-[70%]">
            <img src={clips} alt="" />
          </div>
          <div className="pl-10 w-[30%]">
            <h2 className="text-6xl font-black"> CLIPZ</h2>
            <p className=" py-10">
              <b>Fullstack</b> web app created using <b>AngularJS</b>. This site
              will let you upload small video clips and store them in a{" "}
              <b>Google Firebase</b> server. Users will need to register first
              and will be able to upload videos using drag and drop. It can take
              dynamic thumbnails and process videos using <b>FFMPEG</b>.
            </p>
            <div class="inline-flex">
              <a
                href="https://clips-site-angular.vercel.app//"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none border-r-2 border-[#02ffea]">
                  See it live
                </button>
              </a>
              <a
                href="https://github.com/juliosalasz/clips-site-angular"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

//
export default WebProjects;

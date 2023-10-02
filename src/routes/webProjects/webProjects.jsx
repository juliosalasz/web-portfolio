import { Icon } from "@iconify/react";

import techItOut from "../../assets/techitout.jpg";
import pkj from "../../assets/pkj.jpg";
import clips from "../../assets/clips.jpg";

import "./webProjects.css";

const smallIdeas = [
  {
    title: "Chancellor",
    secondTitle: "Real State appartment frontsite",
    description:
      "An App to calculate your products shelf life. Just choose your type of product and the storage temperature to get your results. Made using Bootstrap and javascript. Real calulations still pending.",
    img: "https://i.ibb.co/F8y5mNm/chancellor2.gif",
    url: "https://melodious-dragon-b41fdc.netlify.app/",
    githubUrl: "https://github.com/juliosalasz/chancellor-appartments",
  },
  {
    title: "AnaTime",
    secondTitle: "Keep track of your products shelf life",
    description:
      "An App to calculate your products shelf life. Just choose your type of product and the storage temperature to get your results. Made using Bootstrap and javascript. Real calulations still pending.",
    img: "https://i.ibb.co/bH6p8JS/anatime.gif",
    url: "https://cute-dusk-eb7052.netlify.app/",
    githubUrl: "https://github.com/juliosalasz/clientHtml",
  },
  {
    title: "Rent Cafe",
    secondTitle: "Find your best rent",
    description:
      "Rentcafe.com front site. Recreated using bootstrap and Jquery. Fully responive and uses a tabs and slider component for mobile display.",
    img: "https://i.ibb.co/Dr7XHpX/netcafe.gif",
    url: "https://scintillating-pasca-3481d6.netlify.app/",
    githubUrl: "https://github.com/juliosalasz/netCafe-html",
  },
  {
    title: "Just Do it",
    secondTitle: "To do App with Login",
    description:
      "A to do app created using react. It uses google firebase to handle its own user login and can save to do's in local storage. It keep tracks if user is logged in and persists through session.",
    img: "https://i.ibb.co/ZHQp46H/justdoit.gif",
    url: "https://delightful-twilight-2441a4.netlify.app/",
    githubUrl: "https://github.com/juliosalasz/Just-Do-It",
  },
  {
    title: "Green Coffee Gold Coffee",
    secondTitle: "Producers Association",
    description:
      "Small landing page, created for a coffee producers association. The site can change between EN and ES versions",
    img: "https://i.ibb.co/0qhMhW1/green.gif",
    url: "https://animated-lamington-52d0d2.netlify.app/en/index.html",
    githubUrl: "https://github.com/juliosalasz/GreenGoldCoffee",
  },
  {
    title: "Gorilla Coffee",
    secondTitle: "Coffee Landing page",
    description:
      "Small proyect done over the weekend. Made by using bootstrap.",
    img: "https://i.ibb.co/98LK9r6/gorila.jpg",
    url: "https://ornate-kleicha-a93961.netlify.app/",
  },
  {
    title: "California Mountains",
    secondTitle: "Tourism Landing site",
    description:
      "Landing site for a skying and climbing company. It uses bootstrap and has a responsive carousel and responsive tabs.",
    img: "https://i.ibb.co/RC6qfSd/californiamountains.gif",
    url: "https://jovial-chimera-346c90.netlify.app/",
  },
  {
    title: "Image Effects",
    secondTitle: "Turn your Png Image to grayscale",
    description:
      " Full stack web app. It takes an image and removes its color into a grayscale color palette. Uses a Rust backend and connects to the frontend by using webpack.",
    img: "https://i.ibb.co/8dfb6hT/Imageeffects.gif",
    url: "https://cheery-eclair-586c16.netlify.app/",
  },
];

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
    <div class="projects">
      <section className="w-full py-5 md:py-20 bg-black mx-auto px-0 md:px-5 relative">
        <div className="flex flex-col my-0 pt-[8rem] pb-[4rem] md:py-[8rem] w-[80%] mx-auto">
          <h2 className="text-white text-[6rem] md:text-[13rem] font-black leading-[5rem] md:leading-[11rem]">
            BIG <span className="text-[#02ffc0]">IDEAS</span>
          </h2>
          <h2 className="text-white text-4xl md:text-[8rem] lg:text-[10rem] leading-10 md:leading-[7rem] lg:leading-[10rem] xl:leading-[12rem]  font-black">
            BIG <span className="text-[#ffbb02]">PROJECTS</span>
          </h2>
        </div>
        <div className="flex justify-end ">
          <Icon className="text-white text-9xl" icon="la:angle-down" />
        </div>
      </section>
      <section className="bg-[#02ffea] py-10 lg:py-40">
        <div className="scale__container--js">
          <h2 className="scale--js font-black">VIDEOGAME</h2>
        </div>
        <div className="w-full px-5 md:px-40 py-5 md:py-20 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-[70%]">
            <img src={pkj} alt="pokemon battle" />
          </div>
          <div className="pt-10 md:pt-5 pl-0 md:pl-10 w-full md:w-[30%]">
            <h2 className="text-6xl font-black"> BATTLE FOR THE BEST PKMN</h2>
            <p className=" py-10">
              Videogame created in <b>NEXTJS 13</b>. Challenge and debate your
              friends into choosing which Pokémon is better. Great game for
              enjoying time with friends or siblings and get to know each other.
            </p>
            <div className="inline-flex">
              <a
                href="https://pkmn-battle-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none border-r-2 border-[#02ffea]">
                  See it live
                </button>
              </a>
              <a
                href="https://github.com/juliosalasz/PKMNBattle"
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
      <section className="bg-[#02ffea] py-10 lg:py-40">
        <div className="scale__container--js">
          <h2 className="scale--js font-black">ECOMMERCE SITE</h2>
        </div>
        <div className="w-full px-5 md:px-40 py-5 md:py-20 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-[70%]">
            <img src={techItOut} alt="" />
          </div>
          <div className="pt-10 md:pt-5 pl-0 md:pl-10 w-full md:w-[30%]">
            <h2 className="text-6xl font-black"> TECHItOut</h2>
            <p className=" py-10">
              A <b>fullstack</b> web app. Created using <b>React</b> and{" "}
              <b>Typescript</b> from scratch. This ecommerce site uses its own{" "}
              <b>NodeJs</b> server and a <b>Mongo DB</b> database. The cart can
              hold items based on different categories of items and stock
              keeping units.
            </p>
            <div className="inline-flex">
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
      <section className="bg-[#02ffea] py-10 lg:py-40">
        <div className="scale__container--js">
          <h2 className="scale--js font-black">UPLOADING CLIPS SITE</h2>
        </div>
        <div className="w-full px-5 md:px-40 py-5 md:py-20 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-[70%]">
            <img src={clips} alt="" />
          </div>
          <div className="pt-10 md:pt-5 pl-0 md:pl-10 w-full md:w-[30%]">
            <h2 className="text-6xl font-black"> CLIPZ</h2>
            <p className=" py-10">
              <b>Fullstack</b> web app created using <b>AngularJS</b>. This site
              will let you upload small video clips and store them in a{" "}
              <b>Google Firebase</b> server. Users will need to register first
              and will be able to upload videos using drag and drop. It can take
              dynamic thumbnails and process videos using <b>FFMPEG</b>.
            </p>
            <div className="inline-flex">
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
        <section className="pt-10 md:pt-0">
          <h2 className="text-7xl md:text-[13rem] font-black leading-20 md:leading-[11rem] p-1 md:p-0 text-black">
            SMALL PROYECTS - BIGGER IDEAS
          </h2>
          <ul className="flex flex-col md:grid md:grid-cols-3 py-20 md:py-40 px-1 md:px-14">
            {smallIdeas.map((entry) => {
              return (
                <li key={entry.img}>
                  <div>
                    <img src={`${entry.img}`} alt={entry.title} />
                  </div>
                  <div className="py-6">
                    <h2 className="text-2xl font-black">{entry.title}</h2>
                    <h3 className="text-xl font-semibold pb-6">
                      {entry.secondTitle}
                    </h3>
                    <p>{entry.description}</p>
                  </div>
                  <div>
                    <a href={entry.url} target="_blank" rel="noreferrer">
                      <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none border-r-2 border-[#02ffea]">
                        See it live
                      </button>
                    </a>
                    <a href={entry.githubUrl} target="_blank" rel="noreferrer">
                      <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-8 rounded-none">
                        Github
                      </button>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default WebProjects;

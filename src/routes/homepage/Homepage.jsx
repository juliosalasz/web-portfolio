import face from "../../assets/face.png";
import GitHubIcon from "../../assets/githubIcon.png";

import "./homepage.css";

const Homepage = () => {
  return (
    <div id="Home">
      <div className="w-full h-screen bg-gradient-to-t from-[#000167] to-[#00339a] flex flex-col justify-between text-white px-1  lg:px-10">
        <div className="containerMain ">
          <div className="bannerMarco w-[95%] h-[85%] md:h-[80%] lg:w-[80%] lg:h-[80%] mt-20 md:mt-0">
            <div className="banner p-4 sm:p-8 md:p-14">
              <div className="nameColumn pt-10 pb-16 h-full md:pt-10 md:pb-0 lg:pl-6 lg:pt-6 xl:pt-20 w-[100%] md:w-[60%]">
                <p className="pl-0 md:pl-1 text-sm lg:text-2xl font-light text-center md:text-left w-full">
                  HTML & CSS | JAVASCRIPT | REACT | PYTHON | JAVA | SQL
                </p>
                <div className="imageMobile">
                  <img src={face} alt="Drawing" />
                </div>
                <h1 className="py-2 md:pl-4 lg:pl-0 text-5xl md:text-8xl font-bold text-center md:text-left ">
                  JULIO SALAS
                </h1>
                <h2 className="p-5 md:pt-0 md:pl-4 md:pr-0 md:pb-0 lg:pl-0 text-3xl md:text-5xl font-bold text-left">
                  WEB DEVELOPER <br />& DESIGNER
                </h2>
                <div className="md:pl-4 lg:pl-0">
                  <a
                    href="https://github.com/juliosalasz/"
                    className="flex md:block justify-center md:justify-start"
                  >
                    <button className="mt-5 py-3 px-6 w-[200px] flex items-center justify-center rounded-none ">
                      <p className="pr-4 whitespace-nowrap text-xl">
                        MY GITHUB
                      </p>
                      <img src={GitHubIcon} alt="github" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="imageColumn">
                <img src={face} alt="Drawing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

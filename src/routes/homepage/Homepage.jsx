import face from "../../assets/face.png";
import smFace from "../../assets/facesm.png";
import useScreenType from "react-screentype-hook";
import GitHubIcon from "../../assets/githubIcon.png";

import "./homepage.css";

const Homepage = () => {
  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1440,
  });
  return (
    <div id="Home">
      <div className="homeContainer">
        <div className="containerMain ">
          <div className="bannerMarco md:h-[80%] lg:w-[80%] lg:h-[80%]">
            <div className="banner">
              <div className="nameColumn">
                <p className=" lg:text-2xl xl:text-4xl font-light text-center md:text-left w-full">
                  HTML & CSS | JAVASCRIPT | REACT | PYTHON | JAVA | SQL
                </p>
                <div className="imageMobile">
                  <img
                    src={screenType.isMobile ? smFace : face}
                    alt="Julio Salas Web Designer drawing"
                  />
                </div>
                <h1 className="text-5xl  font-bold text-center  ">
                  JULIO SALAS
                </h1>
                <h2 className="text-3xl md:text-5xl xl:text-[4rem] font-bold text-left">
                  WEB DEVELOPER & DESIGNER
                </h2>
                <div className="button-github-container">
                  <a
                    href="https://github.com/juliosalasz/"
                    className="flex md:block justify-center md:justify-start"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button-github  flex items-center justify-center rounded-none ">
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

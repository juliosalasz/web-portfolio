import shapeImage from "../../assets/color-shapes.svg";
import face from "../../assets/face.png";
import facesm from "../../assets/facesm.png";
import GitHubIcon from "../../assets/githubIcon.png";

const Homepage = () => {
  return (
    <div id="Home">
      <div className="w-full  h-full xl:h-screen bg-gradient-to-t from-[#000167] to-[#00339a] flex flex-col justify-between text-white px-1 md:px-10">
        <div className="grid md:grid-cols-2 mx-auto xl:w-[80%] xl:pt-12 ">
          <div className="flex flex-col justify-center  md:items-start  w-full px-2 py-8 mx-auto">
            <p className="pt-20 xl:pt-10 md:pt-[70px] lg:pt-[120px] pl-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-center md:text-left w-full">
              HTML & CSS | JAVASCRIPT | REACT
            </p>
            <h1 className="py-3 md:pl-4 lg:pl-0 text-5xl md:text-8xl font-bold text-center md:text-left ">
              JULIO SALAS
            </h1>
            <h2 className="py-3 md:pl-4 lg:pl-0 text-3xl md:text-4xl lg:text-4xl font-bold text-orange-400 text-center md:text-left">
              WEB DEVELOPER &<br /> GRAPHIC DESIGNER
            </h2>
            <div className="flex items-center justify-center md:hidden">
              <img src={facesm} alt="Drawing" />
            </div>
            <div className="flex items-center justify-center md:pl-4 lg:pl-0">
              <button className="mt-5 py-3 px-6 w-[200px] flex items-center justify-center ">
                <p className="pr-4 whitespace-nowrap text-xl">My Github</p>
                <img src={GitHubIcon} alt="github" />
              </button>
            </div>

            <img
              className="object-none h-48"
              src={shapeImage}
              alt="Images of shapes"
            ></img>
          </div>
          <div className="md:mt-[90px] lg:mt-[100px] xl:mt-[50px] hidden md:block">
            <img src={face} alt="Drawing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

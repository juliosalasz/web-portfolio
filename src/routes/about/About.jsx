import face from "../../assets/face.png";

const About = () => {
  return (
    <div className="w-full py-32 bg-[#F9F9F9]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <div>
          <div className="relative">
            <h2 className="py-3 text-4xl sm:text-5xl xl:text-6xl font-bold text-center lg:text-left">
              ABOUT ME
            </h2>
            <div className="w-[355px] sm:w-[500px] lg:w-[400px]  h-[5px] bg-black absolute bottom-[1.1rem] left-[-106px]"></div>
          </div>
          <img src={face} alt="Drawing" />
        </div>
        <div className="mt-0 md:mt-[180px] lg:mt-[100px]">
          <div className="relative">
            <h2 className="py-3 text-3xl sm:text-4xl xl:text-6xl leading-normal  md:leading-normal font-bold  text-center lg:text-left ">
              WEB DEVELOPER &<br /> GRAPHIC DESIGNER
            </h2>
            <div className="w-[298px] sm:w-[375px] md:w-[355px] lg:w-[508px] xl:w-[710px] h-[5px] bg-black absolute bottom-[20px] sm:bottom-[17px] md:bottom-[23px] lg:bottom-[23px] xl:bottom-[18px] right-[0px] lg:right-[0px] xl:right-[-90px] "></div>
          </div>

          <p className="pt-7 text-lg px-4 lg:px-0 ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

import Marquee from "react-fast-marquee";

const WebDeveloper = () => {
  const listItem =
    "text-4xl sm:text-5xl xl:text-6xl font-bold lg:hover:bg-black lg:hover:text-white text-center md:text-left";
  return (
    <div className="w-full bg-[rgb(0,112,234)] text-blue-200" id="WebDeveloper">
      <div className="max-w-[1240px] mx-auto my-0 mp-0 grid md:grid-cols-2">
        <div className="md:hidden flex mt-20">
          <div className="m-auto relative">
            <div className=" w-full h-[3px] bg-blue-200 absolute bottom-[190px] "></div>
            <h2 className="text-5xl font-bold mb-10 mx-auto text-center">
              WEB <br /> DEVELOPER
            </h2>
            <div className="w-screen text-3xl border-t-2 border-b-2 border-blue-200 p-3 font-bold">
              <Marquee gradient={false} speed={45}>
                <p className=" ">
                  BACKEND, MACHINE LEARNING, VR? CAN'T WAIT TO TELL YOU WHAT I
                  MIGHT LEARN TOMORROW. NO DREAM IS TOO BIG, NO CODE IS TOO
                  HARD, I WILL ALWAYS KEEP MAKING QUESTIONS AND NEVER STOP
                  LOOKING FOR ANSWERS.
                </p>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="border-r-0 md:border-r-4 border-blue-200 py-10 md:py-32">
          <div className="">
            <div className="border-b-2 mx-auto md:ml-9 border-blue-200 w-60">
              <h2 className="py-3 text-4xl md:text-5xl font-bold text-center md:text-left  ">
                SKILLS
              </h2>
            </div>
            <ul className="pt-8 ml-auto md:ml-6 ">
              <li className={listItem}>UI/UX</li>
              <li className={listItem}>HTML & CSS</li>
              <li className={listItem}>TAILWIND</li>
              <li className={listItem}>JAVASCRIPT</li>
              <li className={listItem}>REACT</li>
              <li className={listItem}>TYPESCRIPT</li>
              <li className={listItem}>WORDPRESS</li>
            </ul>
          </div>
        </div>
        <div className="pl-0 lg:pl-9 md:flex hidden relative">
          <div className="m-auto relative">
            <div className="hidden md:block md:w-[341px] lg:w-[437px] xl:w-[600px] h-[5px] bg-blue-200 absolute md:bottom-[180px] lg:bottom-[225px] xl:bottom-[270px] md:right-[-42px] lg:right-[-38px] xl:right-[-0px]"></div>
            <h2 className="text-5xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold md:pb-7">
              WEB <br /> DEVELOPER
            </h2>
            <div className="w-[300px] lg:w-[400px] xl:w-[600px] text-3xl border-2 border-blue-200 p-3 font-bold">
              <Marquee gradient={false} speed={45}>
                <p className=" ">
                  BACKEND, MACHINE LEARNING, VR? CANT WAIT TO TELL YOU WHAT I
                  MIGHT LEARN TOMORROW. NO DREAM IS TOO BIG, NO CODE IS TOO
                  HARD, I WILL ALWAYS KEEP MAKING QUESTIONS AND NEVER STOP
                  LOOKING FOR ANSWERS.
                </p>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloper;

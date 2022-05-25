import profile from "../../assets/profilephoto.png";

const About = () => {
  return (
    <div className="w-full py-20 px-5 bg-[#F9F9F9]" id="AboutMe">
      <div className="mx-auto grid md:grid-cols-2 ">
        <div className="mx-auto relative">
          <h2 className="py-3 text-6xl xl:text-6xl font-bold text-center lg:text-left leading-[3rem]">
            ABOUT ME
          </h2>
          <div className="w-[343px] ms:w-[420px] sm:w-[445px] md:w-[430px] lg:w-[400px] xl:w-[590px] h-[5px] bg-black absolute top-[13px] ms:top-[14px] xl:top-[18px] left-[-106px] xl:left-[-295px]"></div>
          <img
            className="pt-8 w-96 object-center mx-auto pb-9"
            src={profile}
            alt="Drawing"
          />
        </div>
        <div className="mt-0 mx-auto md:mt-[180px] lg:mt-[100px]">
          <div className="relative">
            <h2 className="py-3 text-5xl sm:text-4xl md:text-5xl xl:text-6xl leading-[2.6rem]  md:leading-[2.6rem] lg:leading-normal font-bold  text-center lg:text-left ">
              WEB DEVELOPER &<br /> GRAPHIC DESIGNER
            </h2>
            <div className="w-[270px] ms:w-[297px] sm:w-[375px] md:w-[311px] lg:w-[508px] xl:w-[940px] h-[5px] bg-black absolute bottom-[15px] sm:bottom-[17px] md:bottom-[14px] lg:bottom-[28px] xl:bottom-[18px] right-[-20px]  "></div>
          </div>

          <p className="pt-7 text-3xl px-4 lg:px-0 font-bold text-center lg:text-left ">
            "No skill or language is a barrier when following your creativity.
            Start from scratch if you have to."
          </p>

          <p className="pt-7 text-lg px-4 lg:px-0 ">
            Hi, I am <span className="font-bold">Julio</span>. A
            <span className="font-bold"> web developer </span>
            transitioning from a career on
            <span className="font-bold"> graphic design</span>. Ever since I
            started creating my own
            <span className="font-bold"> WordPress themes</span> at the age of
            16. <span className="font-bold">Coding</span> has always been part
            of my life. Even as a <span className="font-bold">Designer</span> I
            had to use my skills in{" "}
            <span className="font-bold">HTML & CSS</span>. But it is now that I
            have taken my learning to the next level.{" "}
            <span className="font-bold">
              JavaScript, React, TypeScript, SQL
            </span>{" "}
            and beyond.
          </p>
          <p className="pt-7 text-lg px-4 lg:px-0 ">
            <span className="font-bold">I love to create</span>, from drawing,
            to designing and now <span className="font-bold">coding</span>, I
            have always followed my inspiration in{" "}
            <span className="font-bold">the need to learn valuable skills</span>
            . If I want to create it,{" "}
            <span className="font-bold">I will learn everything is needed</span>{" "}
            to realize the vision inside my head.
          </p>
          <p className="pt-7 text-lg px-4 lg:px-0 ">
            Now as a <span className="font-bold">Web Developer</span>, I am in
            search of <span className="font-bold">creating websites</span> that
            solves people's problems. Always in the look for{" "}
            <span className="font-bold">
              creating something great that people need and will love
            </span>
            , and continue to push myself{" "}
            <span className="font-bold">into learning more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

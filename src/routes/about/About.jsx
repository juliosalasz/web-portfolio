import profile from "../../assets/profilephoto.png";

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
          <img
            className="pt-8 w-96 object-center mx-auto pb-9"
            src={profile}
            alt="Drawing"
          />
        </div>
        <div className="mt-0 md:mt-[180px] lg:mt-[100px]">
          <div className="relative">
            <h2 className="py-3 text-3xl sm:text-4xl xl:text-6xl leading-normal  md:leading-normal font-bold  text-center lg:text-left ">
              WEB DEVELOPER &<br /> GRAPHIC DESIGNER
            </h2>
            <div className="w-[298px] ms:w-[320px] sm:w-[375px] md:w-[355px] lg:w-[508px] xl:w-[710px] h-[5px] bg-black absolute bottom-[20px] sm:bottom-[17px] md:bottom-[23px] lg:bottom-[23px] xl:bottom-[18px] right-[0px] lg:right-[0px] xl:right-[-90px] "></div>
          </div>

          <p className="pt-7 text-3xl px-4 lg:px-0 font-bold text-center lg:text-left ">
            "No skill or language is a barrier when following your creativity.
            Start from scratch if you have to."
          </p>

          <p className="pt-7 text-lg px-4 lg:px-0 ">
            <span className="font-bold">I love to create</span>, from drawing,
            to designing and now <span className="font-bold">coding</span> , I
            have always followed my inspiration in the need to learn{" "}
            <span className="font-bold">valuable skills</span> . If I want to
            create it, I will learn everything is needed to realize the vision
            inside my head.
          </p>
          <p className="pt-7 text-lg px-4 lg:px-0 ">
            At the age of 16 I taught myself how to create{" "}
            <span className="font-bold">WordPress themes sites</span>. With
            barely any knowledge of
            <span className="font-bold"> Html, Css and Php</span>. I created
            <span className="font-bold"> fully working news websites</span>. I
            had characters I dreamt about, so I{" "}
            <span className="font-bold">taught myself how to draw</span>. Every
            night I practiced, all just because my creativity asked me too.
          </p>
          <p className="pt-7 text-lg px-4 lg:px-0 ">
            And now I am <span className="font-bold"> Web developer</span> with
            knowledge in
            <span className="font-bold"> JavaScript and React</span>, in search
            of creating websites that solves peoples problems. Always in the
            look for{" "}
            <span className="font-bold">
              creating something great that people need and will love
            </span>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

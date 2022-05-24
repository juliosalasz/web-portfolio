import useScreenType from "react-screentype-hook";
import GraphicDesktop from "../../components/graphicDesignDesktop/GraphicDesignDesktop";
import GraphicMobile from "../../components/graphicDesignMobile/GraphicDesignMobile";

const DesingIconMarquee = [
  {
    imageUrl: "https://i.ibb.co/P5VL3mg/ps.png",
    id: "1",
    title: "PHOTOSHOP",
    text: "For digital art, image editing and graphic desing overall.",
  },
  {
    imageUrl: "https://i.ibb.co/m0N3mNr/illustrator.png",
    id: "2",
    title: "ILLUSTRATOR",
    text: "For vector art, ux/ui desing and logo design.",
  },
  {
    imageUrl: "https://i.ibb.co/vwkJsNv/premiere.png",
    id: "3",
    title: "PREMIERE",
    text: "Mainly for video and audio editing.",
  },
  {
    imageUrl: "https://i.ibb.co/0YCc9g5/after-Effects.png",
    id: "4",
    title: "AFTER EFFECTS",
    text: "For video post-production, vfx and animation.",
  },
];
const DesingSkillText = [
  {
    id: "1a",
    title: "Brading",
    text: "Logo design, merch design and setting brand style guidelines. All you need, to start your marketing strategies.",
  },
  {
    id: "2a",
    title: "ART",
    text: "Nothing brings people like eye catching artwork. A key cornerstone in making you website and brand friendly to costumers.",
  },
  {
    id: "3a",
    title: "2D ANIMATION",
    text: "Experienced in the creation of animation, skeletal rigging and hand made. Specially for video production.",
  },
  {
    id: "4a",
    title: "CREATIVE WRITING",
    text: "In the need for a catchy slogan? A phrase loved by everyone will take your brand to the next level. ",
  },
];

const GraphicDesign = () => {
  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1440,
  });
  return (
    <div className="w-full py-5 md:py-20 md:pt-5 bg-[#FFD527] mx-auto px-0 md:px-5 relative">
      <h2 className="text-5xl sm:text-6xl lg:text-8xl leading-2 md:leading-[3rem] lg:leading-[4.5rem] font-bold text-center md:text-left py-[50px] md:ml-16">
        GRAPHIC <br /> DESIGNER
      </h2>
      <div className="w-full md:w-[365px] lg:w-[535px] h-[5px] bg-black absolute top-[155px] sm:top-[180px] md:top-[160px] lg:top-[210px] left-[0px] "></div>
      {screenType.isMobile ? (
        <GraphicMobile
          DesingIconMarquee={DesingIconMarquee}
          DesingSkillText={DesingSkillText}
        />
      ) : (
        <GraphicDesktop
          DesingIconMarquee={DesingIconMarquee}
          DesingSkillText={DesingSkillText}
        />
      )}
    </div>
  );
};

export default GraphicDesign;

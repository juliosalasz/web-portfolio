import IconListMarquee from "../../components/iconListComponent/IconListComponent";
import TextSkillComponent from "../../components/textSkillComponents/textSkillComponent";
import logoDesign from "../../assets/logodesign.png";
import Marquee from "react-fast-marquee";

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
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sdfjksdf jkeikf.",
  },
  {
    id: "2a",
    title: "ART",
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sdfjksdf jkeikf.",
  },
  {
    id: "3a",
    title: "2D ANIMATION",
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sdfjksdf jkeikf.",
  },
  {
    id: "4a",
    title: "CREATIVE WRITING",
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sdfjksdf jkeikf.",
  },
];

const GraphicDesign = () => {
  // const listItem =
  //   "grid justify-center w-9/12 mx-auto border-2 border-black mb-20";
  // const imageSize = "w-44 md:w-20";
  // const listItemIcon = "justify-center align-middle mx-auto";
  // const listItemtext = "text-lg font-medium ";
  return (
    <div className="w-full py-20 md:pt-5 bg-[#FFD527] mx-auto px-0 md:px-5">
      <h2 className="text-8xl font-bold text-center md:text-left lg:text-left py-[50px] ml-16 leading-[4.5rem]">
        GRAPHIC <br /> DESIGNER
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-5 w-10/12 mx-auto">
        <div className="border-4  border-black grid col-start-1 col-end-4 ">
          <Marquee
            gradient={false}
            speed={45}
            className="row-start-1 row-end-4"
          >
            <IconListMarquee entry={DesingIconMarquee} />
          </Marquee>
        </div>
        <div className="border-4  border-black" alt="drawing">
          <img src={logoDesign} alt="Drawing" />
        </div>
        <TextSkillComponent
          className="flex w-full col-start-1 col-end-5 my-0 gap-5"
          entry={DesingSkillText}
        />
      </div>
    </div>
  );
};

export default GraphicDesign;

/* <div className="w-full pt-20 md:pt-5 bg-[#FFD527] mx-auto px-0 md:px-5 grid md:grid-cols-2">
<div alt="text column" className="">
  <div alt="title" className="py-3 relative">
    <div className="w-screen lg:w-[400px] h-[5px] bg-black absolute bottom-[178px] block md:hidden"></div>
    <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left lg:text-left mb-20 md:mb-0">
      GRAPHIC DESIGNER
    </h2>
  </div>
  <div alt="icons-tablet-and-laptop" className="hidden md:block">
    <ul className="grid md:grid-cols-4">
      <li>
        <img src={photoshop} alt="photoshop" class={imageSize} />
      </li>
      <li>
        <img src={illustrator} alt="illustrator" class={imageSize} />
      </li>
      <li>
        <img src={premiere} alt="premiere" class={imageSize} />
      </li>
      <li>
        <img src={afterEffects} alt="after effects" class={imageSize} />
      </li>
    </ul>
    <ul className="grid md:grid-cols-2">
      <li className="p-1">
        <h3 className={listItemtext}>BRANDING</h3>
      </li>
      <li className="p-1">
        <h3 className={listItemtext}>ART</h3>
      </li>
      <li className="p-1">
        <h3 className={listItemtext}>2D ANIMATION</h3>
      </li>
      <li className="p-1">
        <h3 className={listItemtext}>CREATIVE WRITING</h3>
      </li>
    </ul>
  </div>
  <div alt="icons" className="block md:hidden">
    <ul className="grid">
      <li className={listItem}>
        <ul className="grid  text-center">
          <li className={listItemIcon}>
            <img src={photoshop} alt="Photoshop" className={imageSize} />
          </li>
          <li>
            <h2 className="text-3xl font-bold underline">PHOTOSHOP</h2>
          </li>
          <li>
            <p className="text-xl">
              For digital art, image editing and graphic desing overall.
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid  text-center">
          <li className={listItemIcon}>
            <img
              src={illustrator}
              alt="Illustrator"
              className={imageSize}
            />
          </li>
          <li>
            <h2 className="text-3xl font-bold underline">Illustrator</h2>
          </li>
          <li>
            <p className="text-xl">
              For vector art, ux/ui desing and logo design.
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid  text-center">
          <li className={listItemIcon}>
            <img src={premiere} alt="Premiere" className={imageSize} />
          </li>
          <li>
            <h2 className="text-3xl font-bold underline">PREMIERE</h2>
          </li>
          <li>
            <p className="text-xl">Mainly for video and audio editing</p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid text-center">
          <li className={listItemIcon}>
            <img
              src={afterEffects}
              alt="After Effects"
              className={imageSize}
            />
          </li>
          <li>
            <h2 className="text-3xl font-bold underline">
              AFTER EFFECTS
            </h2>
          </li>
          <li>
            <p className="text-xl">
              For video post-production, vfx and animation
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid text-center">
          <li>
            <h3 className="text-3xl font-bold underline">BRANDING</h3>
          </li>
          <li>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid text-center">
          <li>
            <h3 className="text-3xl font-bold underline">ART</h3>
          </li>
          <li>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid text-center">
          <li>
            <h3 className="text-3xl font-bold underline">2D ANIMATION</h3>
          </li>
          <li>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
          </li>
        </ul>
      </li>
      <li className={listItem}>
        <ul className="grid text-center">
          <li>
            <h3 className="text-3xl font-bold underline">
              CREATIVE WRITING
            </h3>
          </li>
          <li>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
<div alt="drawing">
  <img src={drawing} alt="Drawing" />
</div>
</div> */

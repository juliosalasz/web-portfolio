import SliderComponent from "../../components/sliderComponent/SliderComponent";
import TextSkillComponent from "../../components/textSkillComponents/textSkillComponent";
import logoSquare from "../../assets/logoSquare.svg";

const GraphicDesktop = ({ DesingIconMarquee, DesingSkillText }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-0 xl:grid-rows-2 gap-5 w-10/12 mx-auto">
      <div className="md:border-2  lg:border-2 border-black col-start-1 col-end-4  ">
        <SliderComponent entry={DesingIconMarquee} />
      </div>
      <div
        className="md:border-2  lg:border-2 aspect-square  border-black"
        alt="drawing"
      >
        <img src={logoSquare} alt="Drawing" />
      </div>
      <TextSkillComponent
        className="flex w-full col-start-1 col-end-5 my-0 gap-5"
        entry={DesingSkillText}
      />
    </div>
  );
};

export default GraphicDesktop;

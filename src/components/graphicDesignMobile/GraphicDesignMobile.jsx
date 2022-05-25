import TextSkillComponent from "../textSkillComponents/textSkillComponent";
import logoSquare from "../../assets/logoSquare.svg";

const GraphicMobile = ({ DesingIconMarquee, DesingSkillText }) => {
  return (
    <div className="px-5 flex flex-col	">
      <div className=" flex flex-col mb-2">
        {DesingIconMarquee.map((entry) => {
          return (
            <div
              className="border-2 w-full border-black mx-auto mb-4 p-5"
              key={entry.id}
            >
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-[35%] h-[35%] mx-auto pb-4"
              />
              <h2 className="pb-2 text-center text-2xl font-bold">
                {entry.title}
              </h2>
              <p className="text-center font-medium">{entry.text}</p>
            </div>
          );
        })}
      </div>
      <div className="border-2 mb-4 aspect-square  border-black" alt="drawing">
        <img src={logoSquare} className="w-full" alt="Drawing" />
      </div>
      <TextSkillComponent className="flex" entry={DesingSkillText} />
    </div>
  );
};

export default GraphicMobile;

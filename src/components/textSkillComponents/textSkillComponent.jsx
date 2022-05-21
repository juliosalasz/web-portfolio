const TextSkillComponent = ({ entry }) => {
  return entry.map((entry) => {
    return (
      <div
        key={entry.id}
        className="flex  md:border-2  lg:border-4 border-black mx-auto  "
      >
        <div className="w-[80%] md:py-3 mx-auto my-auto lg:py-3 xl:py-0">
          <h2 className="md:text-lg lg:text-xl xl:text-4xl font-bold text-center md:pb-4 lg:pb-3 xl:pb-6  underline">
            {entry.title}
          </h2>
          <p className="lg:text-base xl:text-xl  ">{entry.text}</p>
        </div>
      </div>
    );
  });
};
export default TextSkillComponent;

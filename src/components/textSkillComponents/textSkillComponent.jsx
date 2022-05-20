const TextSkillComponent = ({ entry }) => {
  return entry.map((entry) => {
    return (
      <div key={entry.id} className="flex  border-4 border-black mx-auto  ">
        <div className="w-[80%] mx-auto my-auto">
          <h2 className="text-4xl font-bold text-center pb-6  underline">
            {entry.title}
          </h2>
          <p className="text-xl ">{entry.text}</p>
        </div>
      </div>
    );
  });
};
export default TextSkillComponent;

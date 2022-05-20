const IconListMarquee = ({ entry }) => {
  return entry.map((entry) => (
    <div key={entry.id} className="flex mx-4 ">
      <img className="w-44 " src={entry.imageUrl} alt={entry.title} />
      <div className="ml-5 w-[250px] ">
        <h2 className="text-3xl font-bold">{entry.title}</h2>
        <p className="text-2xl">{entry.text}</p>
      </div>
    </div>
  ));
};

export default IconListMarquee;

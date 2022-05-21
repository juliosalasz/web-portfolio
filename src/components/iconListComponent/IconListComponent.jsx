import { SwiperSlide } from "swiper/react";

const IconListMarquee = ({ entry }) => {
  return entry.map((entry) => (
    <SwiperSlide key={entry.id}>
      <img src={entry.imageUrl} alt={entry.title} />
      <div>
        <h2>{entry.title}</h2>
        <p>{entry.text}</p>
      </div>
    </SwiperSlide>
  ));
};

export default IconListMarquee;

/* <SwiperSlide key={entry.id} className="flex mx-4 ">
<img
  className="w-24 h-[100%] lg:w-10 xl:w-44"
  src={entry.imageUrl}
  alt={entry.title}
/>
<div className="ml-5 w-[250px] ">
  <h2 className="md:text-xl lg:text-3xl font-bold">{entry.title}</h2>
  <p className="text-lg">{entry.text}</p>
</div>
</SwiperSlide> */

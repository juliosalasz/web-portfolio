// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const SliderComponent = ({ entry }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "black",
      }}
      navigation={true}
      slidesPerView={1}
      modules={[Navigation]}
      className="w-full h-full"
      loop={true}
      loopFillGroupWithBlank={true}
    >
      {entry.map((entry) => {
        return (
          <SwiperSlide
            key={entry.id}
            className="flex justify-center items-center mx-auto px-20"
          >
            <div className="flex mx-auto px-auto justify-center items-center ">
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-[25%] h-[25%]"
              />
              <div className="ml-10">
                <h2 className="md:text-xl lg:text-3xl font-bold">
                  {entry.title}
                </h2>
                <p className="lg:text-base xl:text-2xl  ">{entry.text}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderComponent;

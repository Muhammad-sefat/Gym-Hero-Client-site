// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bgImg1 from "../../assets/pexels-binyaminmellish-116077.jpg";
import bgImg2 from "../../assets/pexels-olly-3838339.jpg";
import bgImg3 from "../../assets/pexels-jonathanborba-3076509.jpg";
import bgImg4 from "../../assets/pexels-olly-3755826.jpg";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text={
              "Libraries: the heartbeat of a community, where every page whispers a story and every shelf holds a world."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text={`In the quiet sanctuary of a library, the soul finds solace, the mind finds nourishment, and the imagination finds wings.`}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text={
              "Within the walls of a library, time stands still, and the possibilities are endless."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg4}
            text={
              "A library is not just a building filled with books; it's a portal to infinite knowledge, where every reader becomes an explorer"
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

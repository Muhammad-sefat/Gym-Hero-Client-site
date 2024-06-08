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
            heading={"Increases Energy Levels"}
            description={
              "Points out how regular exercise can enhance overall energy and reduce feelings of fatigue."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            heading={`Improves Physical Health`}
            description={`Emphasizes the physical benefits of regular gym workouts, such as better heart health, muscle strength, flexibility, and weight managemen`}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            heading={"Boosts Mental Well-Being"}
            description={
              "Highlights the positive impact of exercise on mental health, including mood improvement and stress reduction."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg4}
            heading={"Encourages Social Interaction"}
            description={
              " Focuses on the social benefits of going to the gym, like meeting new people and joining group activities."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

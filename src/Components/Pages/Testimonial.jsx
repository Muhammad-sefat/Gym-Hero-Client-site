import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SingleReview from "./SingleReview";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <div className="my-8">
        <p className="text-3xl font-semibold leading-normal">
          WHAT'S CLIENT'S SAY
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="text-center">
              <SingleReview review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

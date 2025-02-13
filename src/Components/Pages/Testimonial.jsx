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
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            WHAT OUR CLIENTS SAY
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Hear from our happy clients who trust us.
        </p>
      </div>

      <div className="mt-10">
        {reviews.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={reviews.length > 1}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: reviews.length > 1 ? 2 : 1 },
              1024: { slidesPerView: reviews.length > 2 ? 3 : 1 },
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
        ) : (
          <p className="text-center text-gray-500">Loading reviews...</p>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

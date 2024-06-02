import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
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
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide className="px-20 mx-auto text-center">
              <p>{review.review}</p>
              <p className="text-xl font-semibold text-orange-500 pt-3">
                {review.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

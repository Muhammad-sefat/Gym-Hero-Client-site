import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Feature from "./Feature";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Feature />
      <AboutUs />
      <OurTeam />
      <Testimonial />
    </div>
  );
};

export default Home;

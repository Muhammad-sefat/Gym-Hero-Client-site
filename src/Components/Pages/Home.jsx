import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Feature from "./Feature";
import NewsLetter from "./NewsLetter";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import RecentForum from "./RecentForum";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gym Hero || Home</title>
      </Helmet>
      <Carousel />
      <Feature />
      <AboutUs />
      <RecentForum />
      <Testimonial />
      <OurTeam />
      <NewsLetter />
    </div>
  );
};

export default Home;

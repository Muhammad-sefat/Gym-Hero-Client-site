import road from "../../assets/pexels-johnny-garcia-1041229-2011377.jpg";
import mission from "../../assets/pexels-olly-3838339.jpg";
import philosophy from "../../assets/pexels-jonathanborba-3076509.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <h2 className="text-xl md:text-3xl font-semibold text-center my-5 text-blue-600">
          About Us
        </h2>
        <p className="p-5 w-[80%] mx-auto mb-5">
          Welcome to Gym Hero, where your fitness journey is our top priority.
          Founded on the principles of dedication, community, and
          transformation, Gym Hero is more than just a gym – it’s a place where
          you can challenge yourself, reach your goals, and become the hero of
          your own story.
        </p>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={road}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Our Journey</h3>
              <p className="my-6 dark:text-gray-600">
                Gym Hero was established with a singular mission: to create an
                inclusive and supportive environment for everyone, from
                beginners to seasoned athletes. Our founders, a group of fitness
                enthusiasts, saw a need for a space where people could not only
                work out but also feel empowered and inspired. Since our
                inception, we've been committed to providing the best
                facilities, the latest equipment, and a variety of classes to
                cater to all fitness levels and interests.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={mission}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Our Philosophy</h3>
              <p className="my-6 dark:text-gray-600">
                At Gym Hero, we believe that fitness is not just about physical
                strength, but also about mental resilience and community
                support. Our team of certified trainers and friendly staff are
                here to guide you every step of the way, offering personalized
                training programs, nutritional advice, and continuous
                motivation. We are dedicated to helping you achieve a balanced
                and healthy lifestyle.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={philosophy}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Community and Support</h3>
              <p className="my-6 dark:text-gray-600">
                Community is at the heart of everything we do. We host regular
                events, workshops, and challenges to foster a sense of belonging
                and camaraderie among our members. Whether you’re hitting a
                personal best or need a little extra push, our Gym Hero
                community is here to celebrate your victories and support you
                through the challenges.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={mission}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Why Choose Gym Hero?</h3>
              <p className="my-6 text-left dark:text-gray-600">
                <p className="py-3">
                  <span className="font-medium">
                    <li>State-of-the-Art Facilities:</li>
                  </span>{" "}
                  Enjoy access to the latest fitness equipment, spacious workout
                  areas, and modern amenities.
                </p>
                <p className="py-3">
                  <span className="font-medium">
                    <li>Expert Guidance:</li>
                  </span>{" "}
                  Our experienced trainers are dedicated to helping you reach
                  your fitness goals with personalized programs and ongoing
                  support
                </p>
                <p className="py-3">
                  <span className="font-medium">
                    <li>Diverse Classes:</li>
                  </span>{" "}
                  From high-intensity interval training (HIIT) to yoga and
                  everything in between, our diverse class offerings ensure
                  there’s something for everyone.
                </p>
                <p className="py-3">
                  <span className="font-medium">
                    <li>Inclusive Environment:</li>
                  </span>{" "}
                  We welcome individuals of all fitness levels and backgrounds,
                  fostering a positive and encouraging atmosphere.
                </p>
                <p className="py-3">
                  <span className="font-medium">
                    <li>Continuous Innovation:</li>
                  </span>{" "}
                  We stay ahead of fitness trends to bring you the most
                  effective and enjoyable workout experiences.
                </p>
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import road from "../../assets/pexels-johnny-garcia-1041229-2011377.jpg";
import mission from "../../assets/pexels-olly-3838339.jpg";
import philosophy from "../../assets/pexels-jonathanborba-3076509.jpg";

const AboutUs = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-100 text-gray-800">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
        About Us
      </h2>
      <p className="text-lg md:w-3/4 mx-auto text-center mb-10">
        Welcome to Gym Hero, where your fitness journey is our top priority.
        Founded on dedication, community, and transformation, Gym Hero is more
        than just a gym – it’s where you challenge yourself, reach goals, and
        become the hero of your own story.
      </p>

      <div className="container mx-auto space-y-12">
        {[
          {
            img: road,
            title: "Our Journey",
            text: "Gym Hero was established to create an inclusive environment for all fitness enthusiasts. We provide top-notch facilities, the latest equipment, and diverse classes to cater to all fitness levels.",
            reverse: false,
          },
          {
            img: mission,
            title: "Our Philosophy",
            text: "Fitness is about more than just physical strength; it’s about mental resilience and community support. Our trainers provide personalized programs, nutritional advice, and motivation to help you stay on track.",
            reverse: true,
          },
          {
            img: philosophy,
            title: "Community and Support",
            text: "Our community-driven approach includes workshops, events, and challenges to keep you motivated. Whether it's a personal best or a push to get started, our Gym Hero family is here for you.",
            reverse: false,
          },
          {
            img: mission,
            title: "Why Choose Gym Hero?",
            text: "✔ State-of-the-Art Facilities: Modern equipment and spacious workout areas.\n✔ Expert Guidance: Certified trainers for personalized programs.\n✔ Diverse Classes: HIIT, Yoga, and more to suit all preferences.",
            reverse: true,
          },
        ].map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row items-center gap-8 p-6 rounded-lg shadow-md bg-white ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-left">
                {section.text}
              </p>
              <button className="text-lime-600 border p-2 rounded font-semibold hover:bg-pink-400 hover:text-black hover:shadow-md">
                Read More...
              </button>
            </div>
            <img
              src={section.img}
              alt={section.title}
              className="w-full lg:w-1/2 h-64 object-cover rounded-lg hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

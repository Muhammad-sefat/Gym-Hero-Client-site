import feature1 from "../../assets/feature-01.jpg";
import feature2 from "../../assets/feature-02.png";
import feature3 from "../../assets/feature-03.jpg";
import feature4 from "../../assets/feature-04.jpg";
import feature5 from "../../assets/feature-05.jpg";
import feature6 from "../../assets/feature-06.png";
const Feature = () => {
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold mb-2">Our Latest Features</h2>
          <p className="p-5 md:w-[80%] mx-auto dark:text-gray-600">
            {" "}
            A well-designed feature section not only informs and educates
            visitors but also persuades and motivates them to take the next
            step, whether that’s visiting the gym, signing up for a membership,
            or contacting for more information
          </p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <img className="w-[200px]" src={feature1} alt="" />
            <h3 className="my-3 text-3xl font-semibold">
              Personalized Workout Plans
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Achieve Your Fitness Goals with Custom Workout Plans Designed
                Just for You
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-[150px]" src={feature2} alt="" />
            <h3 className="my-3 text-3xl font-semibold">Expert Trainers</h3>
            <div className="space-y-1 leading-tight">
              <p>
                Transform Your Fitness Journey with Guidance from Our Certified
                Professional Trainers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-[150px]" src={feature3} alt="" />
            <h3 className="my-3 text-3xl font-semibold">
              State-of-the-Art Equipment
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Elevate Your Workout Experience with the Latest State-of-the-Art
                Gym Equipment
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-[200px]" src={feature4} alt="" />
            <h3 className="my-3 text-3xl font-semibold">
              Nutritional Guidance
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Maximize Your Results with Personalized Nutrition Plans Tailored
                to Your Needs
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-[150px]" src={feature5} alt="" />
            <h3 className="my-3 text-3xl font-semibold">
              Group Fitness Classes
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Stay Motivated and Have Fun with Our Diverse and Energetic Group
                Fitness Classes
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-[120px]" src={feature6} alt="" />
            <h3 className="my-3 text-3xl font-semibold">Progress Tracking</h3>
            <div className="space-y-1 leading-tight">
              <p>
                Track Your Fitness Journey and Achievements with Our
                Comprehensive Progress Monitoring Tools
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;

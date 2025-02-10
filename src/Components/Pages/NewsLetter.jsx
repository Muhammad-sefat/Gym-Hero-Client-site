import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import image from "../../assets/newsletter.jpg";

const NewsLetter = () => {
  const axiosPublic = useAxiosPublic();

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    try {
      await axiosPublic.post("/newsLetter", user);
      toast.success("Saved Successfully");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="px-4 py-12 md:px-8">
      {/* Headline */}
      <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl">
        Stay Updated with the Gym Hero{" "}
        <span className="text-blue-600 underline">Newsletter</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-200">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Newsletter"
            className="w-full max-w-md rounded-lg shadow-md hover:scale-110 transition duration-300"
          />
        </div>

        {/* Right Side - Form */}
        <form
          noValidate
          className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800"
          onSubmit={handleForm}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg text-left font-medium mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg text-left font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-lg font-bold tracking-wide uppercase bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-violet-600 dark:hover:bg-violet-700"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

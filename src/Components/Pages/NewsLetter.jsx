import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

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
      toast.success("Save Successfully");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="px-4 py-12 md:px-8">
      <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto bg-white rounded-lg shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-200">
        <div className="flex flex-col justify-center space-y-4 text-left">
          <h2 className="text-2xl font-bold leading-tight lg:text-4xl">
            Stay Updated with the Gym Hero{" "}
            <span className="text-blue-600">Newsletter</span>
          </h2>
          <p className="dark:text-gray-400 text-lg">
            Stay in the loop with all the latest news, fitness tips, and
            exclusive offers from Gym Hero by subscribing to our newsletter.
            Whether you're a seasoned athlete or just starting your fitness
            journey, our newsletter is packed with valuable content to help you
            stay motivated and informed.
          </p>
        </div>
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

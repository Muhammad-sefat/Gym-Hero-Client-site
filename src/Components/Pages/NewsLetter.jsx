import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const NewsLetter = () => {
  const axiosPublic = useAxiosPublic();

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };
    try {
      const { data } = await axiosPublic.post("/newsLetter", user);
      console.log(data);
      toast.success("Save Successfully");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2  text-left">
            <h2 className="text-xl font-bold leading-tight lg:text-3xl mb-3">
              Stay Updated with the Gym Hero{" "}
              <span className="text-blue-600">Newsletter</span>
            </h2>
            <div className="dark:text-gray-600">
              Stay in the loop with all the latest news, fitness tips, and
              exclusive offers from Gym Hero by subscribing to our newsletter.
              Whether you're a seasoned athlete or just starting your fitness
              journey, our newsletter is packed with valuable content to help
              you stay motivated and informed.
            </div>
          </div>
        </div>
        <form
          noValidate=""
          className="space-y-6 text-left"
          onSubmit={handleForm}
        >
          <div>
            <label htmlFor="name" className="text-lg font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=""
              className="w-full p-3 border border-blue-700 rounded-lg dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border border-blue-700 rounded-lg dark:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase border border-blue-700 rounded-lg dark:bg-violet-600 dark:text-gray-50"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

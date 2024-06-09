import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddNewForum = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // create date
    const getCurrentDate = () => {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    // create random view

    const createRandomViewCount = () => {
      const min = 1;
      const max = 5;
      const randomNum = (Math.random() * (max - min) + min).toFixed(1);
      const newViewCount = `${randomNum}k`;
      return newViewCount;
    };
    const { name, image, author, title, description } = data;
    const newForum = {
      name,
      image,
      author,
      title,
      long_description: description,
      date: getCurrentDate(),
      view: createRandomViewCount(),
    };
    try {
      const { data } = await axiosSecure.post("/community", newForum);
      console.log(data);
      toast.success("Add New Forum Successfull");
      reset();
    } catch (error) {
      toast.error(message.error);
    }
  };
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 ">
        <h2 className="text-2xl font-bold text-gray-700 p-3 rounded bg-blue-400 capitalize dark:text-white">
          Add New Forum
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="text-left">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="name">
                Class Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Class Name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="image">
                Image
              </label>
              <input
                id="image"
                type="text"
                placeholder="Image URL"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("image", { required: true })}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="author">
                Author Name
              </label>
              <input
                id="author"
                type="text"
                placeholder="Author"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("author", { required: true })}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("title", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" for="details">
              Description
            </label>
            <textarea
              id="description"
              type="description"
              placeholder="Description"
              required
              {...register("description", { required: true })}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-8 py-2.5 leading-5 text-black font-semibold transition-colors duration-300 transform bg-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Forum
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddNewForum;

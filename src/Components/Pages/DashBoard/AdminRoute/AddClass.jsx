import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { uploadImageToImgBB } from "../../../Provider/UploadImages";

const AddClass = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const { name, image, description } = data;
    if (!image[0]) {
      toast.error("Please select an image.");
      return;
    }

    try {
      const imageUrl = await uploadImageToImgBB(image[0]);
      const newClass = {
        name,
        image: imageUrl,
        description,
      };
      await axiosSecure.post("/add-class", newClass);
      toast.success("Add Class Successfully");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 ">
        <h2 className="text-xl md:text-4xl pb-5 font-bold text-gray-700 capitalize dark:text-white">
          Add Classes
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
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                required
                className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 dark:text-gray-300"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              for="description"
            >
              Details
            </label>
            <textarea
              id="description"
              type="text"
              placeholder="Details"
              required
              {...register("description", { required: true })}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-8 py-2.5 leading-5 text-black font-semibold transition-colors duration-300 transform bg-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Class
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddClass;

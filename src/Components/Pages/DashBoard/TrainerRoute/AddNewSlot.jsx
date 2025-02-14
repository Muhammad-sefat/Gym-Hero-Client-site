import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";

const AddNewSlot = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure.get(`/allClass`);
        setAllClasses(data.classes);
      } catch (error) {
        toast.error("Failed to fetch classes");
      }
    };
    getData();
  }, [axiosSecure]);

  const onSubmit = async (data) => {
    const slotData = {
      name: user.displayName,
      email: user.email,
      days: data.days.map((day) => day.value),
      slotName: data.slotName,
      slotTime: data.slotTime,
      classesIncluded: data.classesIncluded.map((classItem) => classItem.value),
    };

    try {
      await axiosSecure.post("/slots", slotData);
      toast.success("Slot Added Successfully");
      reset();
    } catch (error) {
      toast.error("Failed to add slot");
    }
  };

  const daysOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  const classOptions = allClasses?.map((classItem) => ({
    value: classItem._id,
    label: classItem.name,
  }));

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-center text-white bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-t-lg">
        Add New Slot
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 text-left">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Read-only Name Field */}
          <div>
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300"
            />
          </div>

          {/* Read-only Email Field */}
          <div>
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Email
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300"
            />
          </div>

          {/* Select Days */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Select Days
            </label>
            <Controller
              name="days"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={daysOptions}
                  isMulti
                  className="mt-2"
                />
              )}
            />
          </div>

          {/* Slot Name */}
          <div>
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Slot Name
            </label>
            <input
              type="text"
              placeholder="Enter Slot Name"
              {...register("slotName", { required: true })}
              className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 dark:text-gray-300"
            />
          </div>

          {/* Slot Time */}
          <div>
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Slot Time
            </label>
            <input
              type="text"
              placeholder="Enter Slot Time"
              {...register("slotTime", { required: true })}
              className="block w-full px-4 py-2 mt-2 border rounded-md dark:bg-gray-800 dark:text-gray-300"
            />
          </div>

          {/* Classes Included */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium dark:text-gray-200">
              Classes Included
            </label>
            <Controller
              name="classesIncluded"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={classOptions}
                  isMulti
                  className="mt-2"
                />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button className="w-full sm:w-auto px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-pink-500 to-red-500 rounded-md shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
            Add Slot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewSlot;

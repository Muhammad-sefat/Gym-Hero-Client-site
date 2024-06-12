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
      days: data.days.map((day) => day.value),
      slotName: data.slotName,
      slotTime: data.slotTime,
      classesIncluded: data.classesIncluded.map((classItem) => classItem.value),
    };
    console.log(slotData);
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
    <div>
      <h2 className="text-2xl font-bold text-gray-700 p-3 rounded bg-blue-400 capitalize dark:text-white">
        Add New Slot
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="text-left">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* Displaying read-only fields */}
          <div>
            <label className="text-gray-700 font-medium dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium dark:text-gray-200">
              Email
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md"
            />
          </div>
          {/* Add other read-only fields as necessary */}

          {/* Select days */}
          <div className="col-span-2">
            <label className="text-gray-700 font-medium dark:text-gray-200">
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md"
                />
              )}
            />
          </div>

          {/* Slot name */}
          <div>
            <label className="text-gray-700 font-medium dark:text-gray-200">
              Slot Name
            </label>
            <input
              type="text"
              placeholder="Slot Name"
              {...register("slotName", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
            />
          </div>

          {/* Slot time */}
          <div>
            <label className="text-gray-700 font-medium dark:text-gray-200">
              Slot Time
            </label>
            <input
              type="text"
              placeholder="Slot Time"
              {...register("slotTime", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
            />
          </div>

          {/* Classes included */}
          <div className="col-span-2">
            <label className="text-gray-700 font-medium dark:text-gray-200">
              Classes Included
            </label>
            <Controller
              name="classesIncluded"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={classOptions}
                  isMulti="true"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-md"
                />
              )}
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-black font-semibold transition-colors duration-300 transform bg-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add Slot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewSlot;

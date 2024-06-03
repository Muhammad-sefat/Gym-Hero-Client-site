import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const options = [
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Friday", label: "Friday" },
];

const BecomeTrainer = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [available_day, setSelectedValue] = useState("");
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIsChecked((val) => [...val, value]);
    } else {
      setIsChecked((val) => {
        return [...val.filter((skill) => skill !== value)];
      });
    }
  };
  const handleChanges = (event) => {
    setSelectedValue(event.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const age = form.age.value;
    const number = form.number.value;
    const time = form.time.value;
    const trainer = {
      name,
      email,
      image,
      age,
      number,
      available_time: time,
      available_day,
      isChecked,
      status: "pending",
    };
    try {
      const { data } = await axiosPublic.post("/appliedTrainer", trainer);
      console.log(data);
      toast.success("Applied Successfully");
      form.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 mb-5 text-left">
        <form onSubmit={handleSubmit}>
          <p className="text-2xl text-center font-bold py-5">
            Become A Trainer
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="fullname"
                  className="block font-semibold text-gray-600"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="name"
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="skill"
                  className="block font-semibold text-gray-600"
                >
                  Skills
                </label>
                <div className="flex gap-3 font-medium py-3">
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      value="Functional Fitness"
                      onChange={handleChange}
                    />
                    Functional Fitness
                  </label>

                  <label htmlFor="">
                    <input
                      type="checkbox"
                      value="Mindfulness"
                      onChange={handleChange}
                    />
                    Mindfulness
                  </label>

                  <label htmlFor="">
                    <input
                      type="checkbox"
                      value=" Bodybuilding"
                      onChange={handleChange}
                    />
                    Bodybuilding
                  </label>
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="time"
                    className="block font-semibold text-gray-600"
                  >
                    Available Time in Days
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                    name="time"
                    id="time"
                    type="text"
                    placeholder="Available Time"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="location"
                  className="block font-semibold text-gray-600"
                >
                  Available Days
                </label>
                <Select options={options} onChange={handleChanges}></Select>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="email"
                  id="email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="image"
                  className="block font-semibold text-gray-600"
                >
                  Profile Image
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="image"
                  id="image"
                  type="text"
                  placeholder="Profile Image"
                  required
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="age"
                    className="block font-semibold text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                    name="age"
                    id="age"
                    type="number"
                    placeholder="Age"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="guest"
                    className="block font-semibold text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                    name="number"
                    id="number"
                    type="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            Applied
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeTrainer;

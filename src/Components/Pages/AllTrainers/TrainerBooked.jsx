import { useLoaderData } from "react-router-dom";

const TrainerBooked = () => {
  const { name, available_slots, classes, packages } = useLoaderData();
  console.log(packages[0], name, classes);
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <p className="text-2xl font-semibold my-5">Our Membership Facilites</p>
      <div className="flex flex-col lg:flex-row lg:justify-around items-center text-left border p-5 rounded">
        <div>
          <p className="font-medium">Basic Membership</p>
          <li>Access to gym equipment</li>
          <li>One group class per week</li>
          <li>Locker room access</li>
        </div>
        <div>
          <p className="font-medium divide-y-2 divide-blue-600">
            Standard Membership
          </p>
          <li>Three group classes per week</li>
          <li>One personal training session per month</li>
          <li>Locker room accesst</li>
        </div>
        <div>
          <p className="font-medium">Premium Membership</p>
          <li>Unlimited group classes</li>
          <li>Four personal training sessions per month</li>
          <li>Access to VIP lounge</li>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 mb-5 text-left">
        <form>
          <div className="">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <p>Trainer Name : {name}</p>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="skill"
                  className="block font-semibold text-gray-600"
                >
                  Available Slots
                </label>
                <div className="gap-3 font-medium py-3">
                  {available_slots.map((slot) => (
                    <p htmlFor="">
                      <input
                        type="checkbox"
                        value="Functional Fitness"
                        onChange={handleChange}
                      />
                      {slot}
                    </p>
                  ))}
                </div>
              </div>
              <div className="gap-3 font-medium py-3">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text font-semibold">Classes</span>
                  </div>
                  <select
                    id="class"
                    name="class"
                    className="w-full border border-blue-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                  >
                    {classes.map((Class) => (
                      <option>{Class}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="text-3xl font-extrabold"></div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerBooked;

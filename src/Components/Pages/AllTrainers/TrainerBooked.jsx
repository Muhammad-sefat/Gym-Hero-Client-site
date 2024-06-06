import { useParams } from "react-router-dom";
import useFetchTrainerData from "../../Hooks/useFetchTrainerData";
import { useState } from "react";

const TrainerBooked = () => {
  const { id, slot } = useParams();
  const { trainer } = useFetchTrainerData(id);
  console.log(trainer);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [classValue, setClassValue] = useState([]);

  const handleChange = (e) => {
    setClassValue(e.value);
  };

  const handlePackageSelection = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const slot = form.slot.value;
    console.log(name, slot, selectedPackage, classValue);
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
          <p className="text-xl py-3">
            <span className="font-medium">Price :</span>$50/session
          </p>
        </div>
        <div>
          <p className="font-medium divide-y-2 divide-blue-600">
            Standard Membership
          </p>
          <li>Three group classes per week</li>
          <li>One personal training session per month</li>
          <li>Locker room accesst</li>
          <p className="text-xl py-3">
            <span className="font-medium">Price :</span>$130/month (3
            sessions/week)
          </p>
        </div>
        <div>
          <p className="font-medium">Premium Membership</p>
          <li>Unlimited group classes</li>
          <li>Four personal training sessions per month</li>
          <li>Access to VIP lounge</li>
          <p className="text-xl py-3">
            <span className="font-medium">Price :</span>$200/month (unlimited
            sessions)
          </p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="p-10 my-5 w-2/3 mx-auto bg-pink-300"
        >
          <div className="flex items-center justify-between mb-5">
            <label htmlFor="name">
              <span className="font-medium"> Name :</span>{" "}
              <input
                className="p-2 rounded"
                type="text"
                name="name"
                defaultValue={trainer.name}
              />
            </label>
            <label htmlFor="slot">
              <span className="font-medium"> Selected Slot :</span>{" "}
              <input
                type="text"
                className="p-2 rounded"
                name="slot"
                defaultValue={slot}
              />
            </label>
          </div>
          <div className="flex items-center justify-between gap-8">
            <label className="text-left">
              <div className="label">
                <span className="label-text font-semibold">Classes</span>
              </div>
              <select
                id="class"
                name="class"
                className="w-full border border-blue-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
              >
                {trainer.classes.map((Class) => (
                  <option key={Class._id} onChange={handleChange}>
                    {Class}
                  </option>
                ))}
              </select>
            </label>
            <div className="text-left">
              <p className="font-medium mb-2">Membership</p>
              {trainer.packages.map((pkg, index) => (
                <p key={index}>
                  <input
                    type="checkbox"
                    value={pkg.type}
                    checked={selectedPackage === pkg}
                    onChange={() => handlePackageSelection(pkg)}
                  />
                  <span className="font-medium">{pkg.type}</span>: {pkg.price}
                </p>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className=" p-3 px-8 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerBooked;

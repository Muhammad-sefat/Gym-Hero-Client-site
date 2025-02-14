import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { uploadImageToImgBB } from "../../Provider/UploadImages";

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
  const [available_day, setSelectedValue] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setIsChecked((prev) =>
      checked ? [...prev, value] : prev.filter((skill) => skill !== value)
    );
  };

  const handleChanges = (selectedOption) => {
    setSelectedValue(selectedOption.value);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!imageFile) {
      toast.error("Please select an image.");
      setLoading(false);
      return;
    }

    setUploading(true);
    try {
      // Upload image to ImgBB (or any other service)
      const imageUrl = await uploadImageToImgBB(imageFile);

      const form = e.target;
      const trainerData = {
        name: form.name.value,
        email: form.email.value,
        image: imageUrl,
        age: form.age.value,
        number: form.number.value,
        available_time: form.time.value,
        available_day,
        skills: isChecked,
        status: "pending",
      };

      await axiosPublic.post("/appliedTrainer", trainerData);

      toast.success("Applied Successfully");
      form.reset();
      setIsChecked([]);
      setSelectedValue(null);
      setImageFile(null);
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setUploading(false);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 mb-5 text-left">
        <form onSubmit={handleSubmit}>
          <p className="text-xl md:text-4xl text-center font-bold py-5">
            Become A Trainer
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-600">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-600">
                  Skills
                </label>
                <div className="flex gap-3 font-medium py-3">
                  {[
                    "Functional Fitness",
                    "Mindfulness",
                    "Bodybuilding",
                    "Flexibility",
                  ].map((skill) => (
                    <label key={skill}>
                      <input
                        type="checkbox"
                        value={skill}
                        onChange={handleChange}
                      />{" "}
                      {skill}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-600">
                  Available Time in Days
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  name="time"
                  type="text"
                  placeholder="Available Time"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block font-semibold text-gray-600">
                  Available Days
                </label>
                <Select options={options} onChange={handleChanges} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-600">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-600">
                  Profile Image
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 rounded-md"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  disabled={uploading}
                />
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-600">
                    Age
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                    name="age"
                    type="number"
                    placeholder="Age"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-600">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                    name="number"
                    type="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            {loading ? "Loading..." : "Apply"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeTrainer;

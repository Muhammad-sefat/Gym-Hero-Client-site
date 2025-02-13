import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const AllTrainerss = () => {
  const [trainers, setTrainers] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/users/role/trainer");
      setTrainers(data);
    };
    getData();
  }, []);

  const handleActionClick = async (trainerId) => {
    try {
      await axiosPublic.put(`/api/trainers/${trainerId}/update-role`, {
        role: "member",
      });
      setTrainers((prevTrainers) =>
        prevTrainers.filter((trainer) => trainer._id !== trainerId)
      );
      toast.success("User Role Update Successfully");
    } catch (error) {
      console.error("Error updating trainer role:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Here Are Our Trainers
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <tr className="text-center">
              <th className="p-4 text-lg">#</th>
              <th className="p-4 text-lg">Email</th>
              <th className="p-4 text-lg">Role</th>
              <th className="p-4 text-lg">Action</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((person, index) => (
              <tr
                key={index}
                className="text-center text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{person.email}</td>
                <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">
                  {person.status}
                </td>
                <td className="p-4">
                  <MdDelete
                    onClick={() => handleActionClick(person._id)}
                    className="text-center w-full text-2xl text-red-500 hover:text-red-700 cursor-pointer transition-all"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTrainerss;

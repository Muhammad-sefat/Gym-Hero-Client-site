import { useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

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
  console.log(trainers);
  return (
    <div>
      <p className="text-3xl font-semibold my-5">Here Our All Trainers</p>
      <table className="min-w-full leading-normal">
        <thead className="text-center">
          <tr>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              #
            </th>

            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((person, index) => (
            <tr
              key={index}
              className="text-center border-b border-gray-200 dark:border-gray-300 dark:bg-gray-100"
            >
              <td className="px-3 py-2">
                <span>{index + 1}</span>
              </td>
              <td className="px-3 py-2">
                <span>{person.email}</span>
              </td>
              <td className="px-3 py-2">
                <span>{person.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrainerss;

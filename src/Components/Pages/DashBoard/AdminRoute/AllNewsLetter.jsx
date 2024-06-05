import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllNewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/allnewsLetter");
      setNewsLetter(data);
    };
    return getData;
  }, []);

  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
      <div className="overflow-x-auto">
        <p className="text-3xl font-medium mb-5">All NewsLetter Subscribers</p>
        <table className="min-w-full text-left">
          <thead className="rounded-t-lg dark:bg-gray-300">
            <tr className="text-center">
              <th className="p-3 ">#</th>
              <th title="Team name" className="p-3">
                Name
              </th>
              <th title="Team name" className="p-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {newsLetter.map((letter, index) => (
              <tr
                key={letter._id}
                className="text-center dark:border-gray-300 dark:bg-gray-100"
              >
                <td className="px-3 py-2">
                  <span>{index + 1}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{letter.name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{letter.email}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNewsLetter;

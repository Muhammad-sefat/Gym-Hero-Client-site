import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllNewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get("/allnewsLetter");
      setNewsLetter(data);
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        All Newsletter Subscribers
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <tr className="text-center">
              <th className="p-4 text-lg">#</th>
              <th className="p-4 text-lg">Name</th>
              <th className="p-4 text-lg">Email</th>
            </tr>
          </thead>

          <tbody>
            {newsLetter.map((letter, index) => (
              <tr
                key={letter._id}
                className="text-center text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{letter.name}</td>
                <td className="p-4">{letter.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNewsLetter;

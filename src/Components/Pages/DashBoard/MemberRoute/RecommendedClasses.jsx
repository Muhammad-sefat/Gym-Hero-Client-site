import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const RecommendedClasses = () => {
  const axiosPublic = useAxiosPublic();

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/recommended-class");
      return data;
    },
  });
  return (
    <div className="p-6">
      <p className="text-3xl font-semibold my-5 text-center text-gray-800">
        Recommended Classes by Admin
      </p>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full leading-normal bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase font-semibold text-center">
            <tr>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                #
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                Name
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-100 transition duration-300"
              >
                <td className="px-6 py-4 border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {item.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendedClasses;

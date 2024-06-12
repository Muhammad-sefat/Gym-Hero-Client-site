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
  console.log(classes);
  return (
    <div>
      <p className="text-3xl font-semibold my-5">
        Recommended Classes by Admin
      </p>
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
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, index) => (
            <tr
              key={index}
              className="text-center border-b border-gray-200 dark:border-gray-300 dark:bg-gray-100"
            >
              <td className="px-3 py-2">
                <span>{index + 1}</span>
              </td>
              <td className="px-3 py-2">
                <span>{item.name}</span>
              </td>
              <td className="px-3 py-2">
                <span>{item.description}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendedClasses;

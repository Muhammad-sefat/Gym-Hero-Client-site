import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ActiveLogPage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: trainer = [], refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/appliedTrainer");
      return data;
    },
  });
  return (
    <div>
      <div>
        <p className="text-3xl font-semibold my-5">All Applied Trainer Here</p>
        <table className="min-w-full leading-normal">
          <thead className="text-center">
            <tr>
              <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-sm uppercase font-normal">
                #
              </th>
              <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-sm uppercase font-normal">
                Name
              </th>
              <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-sm uppercase font-normal">
                Email
              </th>
              <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-sm uppercase font-normal">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {trainer.map((person, index) => (
              <tr
                key={person._id}
                className="text-center border-b border-gray-200 dark:border-gray-300 dark:bg-gray-100"
              >
                <td className="px-3 py-2">
                  <span>{index + 1}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{person.name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{person.email}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{person.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveLogPage;

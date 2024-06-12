import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Balance = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const axioxSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axioxSecure.get("/transactions-summary");
        setTotalPrice(data.totalPrice);
        setRecentTransactions(data.recentTransactions);
      } catch (error) {
        console.error("Error fetching transaction summary:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-semibold mb-5">Balance Summary</h2>
      <p className="text-xl font-semibold mb-8 border p-2 bg-blue-400 rounded">
        Total Balance : ${totalPrice}
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
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              Name
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
              TransitionId
            </th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((person, index) => (
            <tr
              key={index}
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
                <span>{person.transactionId}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Balance;

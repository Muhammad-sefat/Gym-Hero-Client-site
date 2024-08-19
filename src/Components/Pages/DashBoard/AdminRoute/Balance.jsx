import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Balance = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [newsLetter, setNewsLetter] = useState([]);
  const [paidMembers, setPaidMembers] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get("/allnewsLetter");
      setNewsLetter(data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get("/paidMember");
      setPaidMembers(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosSecure.get("/transactions-summary");
        setTotalPrice(data.totalPrice);
        setRecentTransactions(data.recentTransactions);
        console.log(data);
      } catch (error) {
        console.error("Error fetching transaction summary:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { name: "Newsletter Subscribers", value: newsLetter.length },
    { name: "Paid Members", value: paidMembers },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

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

      <div>
        {/* Pie Chart */}
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx={200}
            cy={200}
            labelLine={false}
            label
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Balance;

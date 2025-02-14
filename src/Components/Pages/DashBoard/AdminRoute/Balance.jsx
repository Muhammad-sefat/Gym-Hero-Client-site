import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Balance = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [newsLetter, setNewsLetter] = useState([]);
  const [paidMembers, setPaidMembers] = useState(0);
  const axiosSecure = useAxiosSecure();
  console.log(paidMembers);

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

      if (Array.isArray(data)) {
        setPaidMembers(data.length);
      } else {
        setPaidMembers(0);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosSecure.get("/transactions-summary");
        setTotalPrice(data.totalPrice);
        setRecentTransactions(data.recentTransactions);
      } catch (error) {
        console.error("Error fetching transaction summary:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { name: "Newsletter Subscribers", value: newsLetter.length || 0 },
    { name: "Paid Members", value: paidMembers || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Balance Summary Header */}
      <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Balance Summary
      </h2>

      {/* Total Balance Card */}
      <div className="flex justify-center mb-8">
        <p className="text-xl font-semibold px-6 py-3 border bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md">
          Total Balance: <span className="font-bold">${totalPrice}</span>
        </p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <tr className="text-center">
              <th className="p-4 text-lg">#</th>
              <th className="p-4 text-lg">Name</th>
              <th className="p-4 text-lg">Email</th>
              <th className="p-4 text-lg">Transaction ID</th>
            </tr>
          </thead>

          <tbody>
            {recentTransactions.map((person, index) => (
              <tr
                key={index}
                className="text-center text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{person.name}</td>
                <td className="p-4">{person.email}</td>
                <td className="p-4 text-blue-600 dark:text-blue-400 font-semibold">
                  {person.transactionId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart Section */}
      <div className="flex justify-center mt-10">
        {chartData.some((data) => data.value > 0) ? (
          <PieChart width={600} height={500}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={120}
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
        ) : (
          <p className="text-gray-500 text-lg">
            No data available for the chart
          </p>
        )}
      </div>
    </div>
  );
};

export default Balance;

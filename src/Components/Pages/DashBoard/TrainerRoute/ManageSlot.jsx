import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const ManageSlot = () => {
  const [slots, setSlots] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(slots);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosPublic.get(`/slots/${user.email}`);

        if (Array.isArray(data)) {
          setSlots(data);
        } else {
          console.error("Received data is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Slots</h2>
      {slots.length === 0 ? (
        <p>No slots available.</p>
      ) : (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Slot Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Slot Time
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Days
                </th>
              </tr>
            </thead>
            <tbody>
              {slots.map((slot, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {slot.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {slot.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {slot.slotName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {slot.slotTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {slot.days.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageSlot;

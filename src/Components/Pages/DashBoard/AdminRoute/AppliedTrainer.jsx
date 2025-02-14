import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FiEye } from "react-icons/fi";
import Modal from "./Modal";
import toast from "react-hot-toast";

const AppliedTrainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const axiosPublic = useAxiosPublic();

  const {
    data: trainer = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/appliedTrainer");
      return data;
    },
  });

  // Handle loading state
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  // Handle error state
  if (isError) {
    return <p className="text-center text-red-500">Failed to fetch data</p>;
  }

  const handleModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleConfirm = async (comment) => {
    if (selectedPerson) {
      try {
        await axiosPublic.put(
          `/applied/trainers/${selectedPerson._id}/update-role`,
          {
            comment,
            status: "trainer",
          }
        );
        setIsModalOpen(false);
        toast.success("User Status Update Successfully");
        refetch();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Requested Trainers
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <tr className="text-center">
              <th className="p-4 text-lg">#</th>
              <th className="p-4 text-lg">Name</th>
              <th className="p-4 text-lg">Email</th>
              <th className="p-4 text-lg">Status</th>
              <th className="p-4 text-lg">Action</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(trainer) && trainer.length > 0 ? (
              trainer?.map((person, index) => (
                <tr key={person._id} className="text-center">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{person.name}</td>
                  <td className="p-4">{person.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-4 py-2 rounded-lg text-white font-semibold ${
                        person.status === "Approved"
                          ? "bg-green-500"
                          : person.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {person.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleModal(person)}
                      className="p-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-all text-white"
                    >
                      <FiEye className="text-2xl mx-auto" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No trainers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedPerson && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          handleConfirm={handleConfirm}
          person={selectedPerson}
        />
      )}
    </div>
  );
};

export default AppliedTrainer;

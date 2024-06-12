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

  const { data: trainer = [], refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/appliedTrainer");
      return data;
    },
  });

  const handleModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleConfirm = async (comment) => {
    console.log(comment);
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
    <div>
      <p className="text-3xl font-semibold my-5">Requested Trainers</p>

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
            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-sm uppercase font-normal">
              Action
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
              <td className="px-3 py-2">
                <button onClick={() => handleModal(person)}>
                  <FiEye className="text-3xl mx-auto" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

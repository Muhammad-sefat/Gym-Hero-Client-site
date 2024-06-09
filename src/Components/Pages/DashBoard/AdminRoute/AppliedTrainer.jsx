import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FiEye } from "react-icons/fi";
import Modal from "./Modal";

const AppliedTrainer = () => {
  const [isModal, closeModal] = useState(false);
  const [data, setData] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data: trainer = [], refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/appliedTrainer");
      return data;
    },
  });
  console.log(data);

  const handleModal = (value) => {
    setData(value);
    closeModal(false);
  };
  return (
    <div>
      <p className="text-3xl font-semibold my-5">Requested Trainers</p>

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
              Email
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
            >
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
                <button onClick={() => closeModal(true)}>
                  <FiEye className="text-3xl mx-auto" />
                </button>
                <Modal
                  handleModal={handleModal}
                  isModal={isModal}
                  closeModal={() => closeModal(false)}
                  person={person}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedTrainer;

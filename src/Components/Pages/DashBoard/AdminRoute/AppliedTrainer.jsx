import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AppliedTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const { data: trainer = [], refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axiosPublic.get("/appliedTrainer");
      return res.data;
    },
  });
  console.log(trainer);
  return (
    <div>
      <p>Requested Trainers</p>
    </div>
  );
};

export default AppliedTrainer;

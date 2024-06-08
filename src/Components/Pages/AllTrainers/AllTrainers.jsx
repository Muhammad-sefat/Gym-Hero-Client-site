import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleTrainer from "./SingleTrainer";
import { Helmet } from "react-helmet";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/trainer");
      setTrainers(data);
    };
    return getData;
  }, []);

  return (
    <div>
      <Helmet>
        <title>Gym Hero || All Triners</title>
      </Helmet>
      <p className="text-3xl font-semibold mb-5">Our All Trainer's</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {trainers.map((trainer) => (
          <SingleTrainer key={trainer._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainers;

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SingleClass from "./SingleClass";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(allClasses);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/allClass");
      setAllClasses(data);
    };
    return getData;
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">Our All Classes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {allClasses.map((allClass) => (
          <SingleClass key={allClass._id} allClass={allClass} />
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

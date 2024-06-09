import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SinglePost from "./Community/SinglePost";

const RecentForum = () => {
  const [forum, setForum] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(forum);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("posts");
      setForum(data);
    };
    return getData;
  }, []);
  return (
    <div>
      <p className="text-xl md:text-3xl font-bold my-5">
        Recent Community Post
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {forum.slice(0, 6).map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentForum;

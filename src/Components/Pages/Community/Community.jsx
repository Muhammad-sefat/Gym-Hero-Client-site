import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SinglePost from "./SinglePost";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/community");
      setPosts(data);
    };
    return getData;
  }, []);
  return (
    <div>
      <p className="text-3xl font-bold">Our Community Post</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Community;

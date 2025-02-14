import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SinglePost from "./SinglePost";
import { Helmet } from "react-helmet";

const Community = () => {
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState([]);
  const [posts, setPosts] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get(
        `/community?page=${currentPage}&size=${itemPerPage}&filter=${filter}`
      );
      setPosts(data);
    };
    getData();
  }, [itemPerPage, filter, currentPage]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosPublic.get(
        `/community-count?filter=${filter}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter]);

  const numberOfPage = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPage).keys()].map((element) => element + 1);

  const handlePagination = (value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <Helmet>
        <title>Gym Hero || Community</title>
      </Helmet>
      <p className="text-3xl font-bold mb-5">Our Community Post</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
      <div className="flex justify-center my-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePagination(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPage}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Community;

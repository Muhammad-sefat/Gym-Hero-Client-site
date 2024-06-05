import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CommunityDetails = () => {
  const { name, author, long_description, image, views, date } =
    useLoaderData();
  const [votes, setVotes] = useState(0);
  const handleUpvote = () => {
    setVotes(votes + 1);
  };
  const handleDownVote = () => {
    setVotes(votes === 0 ? -1 : votes - 1);
  };
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 text-left">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  {name}
                </h1>
                <p>{author}</p>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {long_description}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p>Date : {date}</p>
                  <p>View : {views}</p>
                </div>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600  mt-5">
                  <p className="text-base font-medium">
                    Vote :{" "}
                    <span className="border border-blue-600 px-2 rounded">
                      {votes}
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <FaThumbsDown
                      onClick={handleDownVote}
                      className="text-xl hover:scale-110"
                    />
                    <FaThumbsUp
                      onClick={handleUpvote}
                      className="text-xl hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={image}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CommunityDetails;

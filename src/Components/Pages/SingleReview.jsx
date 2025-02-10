const SingleReview = ({ review }) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
      {/* Review Content */}
      <div className="px-6 py-8 rounded-t-lg bg-gray-100 dark:bg-gray-700">
        <p className="relative px-6 py-3 text-lg italic text-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-6 h-6 absolute -top-3 left-0 text-pink-500"
          >
            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          {review.review}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-6 h-6 absolute -bottom-3 right-0 text-pink-500"
          >
            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
          </svg>
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="flex flex-col items-center justify-center p-6 rounded-b-lg bg-pink-600 text-white">
        <img
          src={
            review.image ||
            "https://i.ibb.co.com/cX3jqpGw/christian-buehner-84-E44-Ed-D18o-unsplash.jpg"
          }
          alt="User"
          className="w-20 h-20 mb-3 rounded-full shadow-lg border-4 border-white"
        />
        <p className="text-xl font-semibold">{review.name || "Anonymous"}</p>
        <p className="text-sm opacity-80">{review.profession || "Client"}</p>
      </div>
    </div>
  );
};

export default SingleReview;

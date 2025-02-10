import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <Link to={`/community_details/${post._id}`} className="block">
      <section className=" dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto h-full">
          <article className="relative flex flex-col bg-white dark:bg-gray-50 text-left border border-pink-500 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-full">
            <div className="relative h-full">
              <img
                alt="Post Thumbnail"
                className="object-cover w-full h-52 rounded-t-lg"
                src={post.image}
              />
              <p className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {post.badge}
              </p>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-800 hover:text-pink-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-gray-700 mt-1">
                by <span className="font-semibold">{post.author}</span>
              </p>

              <div className="flex flex-wrap justify-between items-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-600">
                <span className="text-pink-600">📅 {post.date}</span>
                <span>👀 {post.views} Views</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Link>
  );
};

export default SinglePost;

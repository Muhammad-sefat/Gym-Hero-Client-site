import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <Link to={`/community_details/${post._id}`}>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <article className="flex flex-col dark:bg-gray-50 text-left border border-pink-500 rounded hover:scale-110 transition">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={post.image}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-base font-medium tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                {post.name}
              </a>
              <p>{post.author}</p>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                {post.title}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-base font-medium dark:text-gray-600">
                <span> Date : {post.date}</span>
                <span>{post.views} Views</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Link>
  );
};

export default SinglePost;

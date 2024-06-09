import { Link } from "react-router-dom";

const SingleClass = ({ allClass }) => {
  return (
    <div>
      <div className="max-w-md border border-blue-600 rounded-md shadow-md h-full p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={allClass.image}
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4 text-left">
          <div>
            <h2 className="text-2xl font-semibold">{allClass?.name}</h2>
            <span className="text-sm dark:text-gray-600">
              {allClass.description}
            </span>
          </div>
          <div className="space-y-1 flex items-center justify-center gap-2">
            {allClass.trainers?.map((trainer) => (
              <Link to={`/class-trainer-details/${trainer._id}`}>
                <img className="h-8 w-8 rounded-full" src={trainer.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;

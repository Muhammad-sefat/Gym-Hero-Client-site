import { useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
  const {
    name,
    image,
    available_slots,
    experience,
    weight,
    biography,
    profession,
    email,
    skills,
    phone,
  } = useLoaderData();

  return (
    <div>
      <div className="flex flex-col items-center overflow-hidden rounded-md shadow-sm lg:flex-row text-left">
        <img
          src={image}
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <h3 className="text-3xl font-bold">{name}</h3>
          <span className="text-base pt-2 uppercase dark:text-gray-600">
            {profession}
          </span>
          <p className="my-6 dark:text-gray-600">
            <span className="text-xl font-medium text-blue-600">
              Biography :
            </span>{" "}
            {biography}
          </p>
          <div>
            <span className="text-xl font-medium">Expertise :</span>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="text-left">
          <p>
            {" "}
            <span className="text-xl text-blue-600 font-medium">
              Experience :
            </span>{" "}
            {experience}
          </p>
          <p>
            {" "}
            <span className="text-xl text-blue-600 font-medium py-3">
              Weight :
            </span>{" "}
            {weight}
          </p>
          <p>
            {" "}
            <span className="text-xl text-blue-600 font-medium py-3">
              Email :
            </span>{" "}
            {email}
          </p>
          <p>
            {" "}
            <span className="text-xl text-blue-600 font-medium py-3">
              Phone :
            </span>{" "}
            {phone}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TrainerDetails;

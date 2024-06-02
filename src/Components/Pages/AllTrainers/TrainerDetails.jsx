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
          className="h-80 dark:bg-gray-500 aspect-video rounded"
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
      <div className="flex items-center justify-around gap-5 my-5 px-8 mx-auto">
        <div className="text-left flex-1">
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
        <div className="flex-1">
          <p className="text-2xl font-medium pb-3">Available Slots</p>
          <p>{available_slots}</p>
        </div>
        <div className="flex-1">
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="max-w-2xl mx-auto text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Become A <span className="text-blue-600">Gym Hero</span> Trainer
              </h2>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="#"
                  className="inline-flex font-medium items-center justify-center w-full px-6 p-3 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Become A Trainer
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;

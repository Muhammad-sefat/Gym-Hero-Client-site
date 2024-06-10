import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const PaymentPage = () => {
  const location = useLocation();
  const user = location.state?.info;
  const axiospublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axiospublic.post("/payment", user);
      toast.success("Save Payment Data Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <p className="text-4xl font-semibold text-blue-500"> Your Payment</p>

      <div className="max-w-md mx-auto border border-blue-500 my-8 text-left p-8 sm:space-x-6 shadow-xl dark:bg-gray-50 dark:text-gray-800 rounded">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Name : {user?.name}</h2>
            <p className="text-lg  py-2 dark:text-gray-600">
              <span className="text-xl font-semibold"> email :</span>{" "}
              {user?.email}
            </p>
            <p className="text-lg py-2 dark:text-gray-600">
              <span className="text-xl font-semibold">Trainer Name :</span>{" "}
              {user?.trainer_name}
            </p>
            <p className="text-lg py-2 dark:text-gray-600">
              <span className="text-xl font-semibold">Package Name :</span>{" "}
              {user?.package_name}
            </p>
            <p className="text-lg py-2 dark:text-gray-600">
              <span className="text-xl font-semibold">Price : </span>
              {user?.price}
            </p>
            <p className="text-lg py-2 dark:text-gray-600">
              <span className="text-xl font-semibold"> Class Name :</span>{" "}
              {user?.classValue}
            </p>
            <p className="text-lg dark:text-gray-600">
              <span className="text-xl font-semibold"> Slot Time :</span>{" "}
              {user?.slot}
            </p>

            <button
              type="submit"
              onClick={handleSubmit}
              className="border py-2 px-3 rounded mt-3 font-medium bg-pink-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

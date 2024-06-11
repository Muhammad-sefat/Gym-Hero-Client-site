import { useLocation } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);
import CheckoutForm from "./CheckOutForm";

const PaymentPage = () => {
  const location = useLocation();
  const user = location.state?.info;

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
            <p className="text-lg dark:text-gray-600 pb-5">
              <span className="text-xl font-semibold"> Slot Time :</span>{" "}
              {user?.slot}
            </p>

            {/* payment */}
            <Elements stripe={stripePromise}>
              {/* checkout form */}
              <CheckoutForm Info={user} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

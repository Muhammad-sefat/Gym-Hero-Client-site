import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const { user } = useAuth();
  const [secretClient, setSecretClient] = useState();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setSecretClient(res.data.secretClient);
      });
    }
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[paymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretClient, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(["confirmError"], confirmError);
    } else {
      console.log(["paymentIntent"], paymentIntent.status);
      if (paymentIntent.status === "succeeded") {
        setPaymentSuccess("Your Payment Succeessfull!");

        // send data into database
        const payment = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning"
          type="submit"
          disabled={!stripe || !secretClient}
        >
          Submit
        </button>
      </form>
      <p className="text-green-500 font-semibold my-3">{paymentSuccess}</p>
    </div>
  );
};

export default CheckOutForm;

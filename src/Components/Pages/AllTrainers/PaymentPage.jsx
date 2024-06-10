import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const user = location.state?.info;
  return (
    <div>
      <p className="text-4xl font-semibold">Payment</p>
    </div>
  );
};

export default PaymentPage;

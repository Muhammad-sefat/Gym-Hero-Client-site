import { useParams } from "react-router-dom";

const TrainerBooked = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>this is trainer booked</p>
    </div>
  );
};

export default TrainerBooked;

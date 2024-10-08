import { useEffect, useState } from "react";

const useFetchTrainerData = (id) => {
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/trainers/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch trainer data");
        }
        const data = await response.json();
        setTrainer(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainerData();
  }, [id]);

  return { trainer, loading, error };
};

export default useFetchTrainerData;

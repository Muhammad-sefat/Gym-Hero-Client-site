import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic(`/user/${user?.email}`);
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
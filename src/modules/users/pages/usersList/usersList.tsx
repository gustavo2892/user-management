import { useQuery } from "@tanstack/react-query";
import { list } from '../../service/users.service';

export const UsersList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: list
  });

  console.log('data => ', data);
  console.log('isLoading => ', isLoading);

  return <div>User List Component</div>;
};
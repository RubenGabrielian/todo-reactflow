import { useQuery } from "react-query";
import { todosApi } from "../../services/tasksService";

export default function useGetTodos() {
  const { data, refetch } = useQuery(["todos"], () => todosApi.fetchTodos(), {
    staleTime: Infinity,
    select: ({ data }) => {
      const newData = data?.data?.map((item) => ({
        id: item?.id.toString(),
        data: { title: item?.title, description: item?.description, id: item?.id },
        position: { x: item?.x_position, y: item?.y_position },
        type: "toDoCreator",
      }));
      return {
        data: newData,
      };
    },
  });
  return { data, refetch };
}

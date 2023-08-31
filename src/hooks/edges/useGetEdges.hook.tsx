import { useQuery } from "react-query";
import { edgesApi } from "../../services/edges";

export default function useGetEdges() {
  const { data: edgesList, refetch } = useQuery(
    ["edges"],
    () => edgesApi.fetchEdges(),
    {
      staleTime: Infinity,
      select: ({ data }) => {
        return data?.data;
      },
      // select: ({ data }) => {
      //     const newData = data?.data?.map((item) => ({
      //         id: item?.id.toString(),
      //         data: { label: "" },
      //         position: { x: item?.x_position, y: item?.y_position },
      //         type: "toDoCreator",
      //     }));
      //     return {
      //         data: newData,
      //     };
      // },
    },
  );
  return { edgesList, refetch };
}

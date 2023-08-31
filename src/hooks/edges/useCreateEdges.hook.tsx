import { useMutation, useQueryClient } from "react-query";
import { edgesApi } from "../../services/edges";

export const useCreateEdge = (
  onSuccess = (data) => {},
  onError = (e) => {},
) => {
  const client = useQueryClient();
  return useMutation(edgesApi.createEdge, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (e) => {
      onError(e);
    },
  });
};

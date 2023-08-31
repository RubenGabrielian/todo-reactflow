import { useMutation, useQueryClient } from "react-query";
import { todosApi } from "../../services/tasksService";

export const useCreateToDo = (
  onSuccess = (data) => {},
  onError = (e) => {},
) => {
  const client = useQueryClient();
  return useMutation(todosApi.createTodo, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (e) => {
      onError(e);
    },
  });
};

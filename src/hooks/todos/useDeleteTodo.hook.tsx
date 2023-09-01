import {useMutation, useQueryClient} from "react-query";
import {todosApi} from "../../services/tasksService";

export const useDeleteToDo = (
    onSuccess = (data) => {
    },
    onError = (e) => {
    },
) => {
    const client = useQueryClient();
    const useDeleteTodoMutation = useMutation(todosApi.deleteTodo, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
    });
    return {useDeleteTodoMutation}
};

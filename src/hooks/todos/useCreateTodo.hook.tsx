import {useMutation, useQueryClient} from "react-query";
import {todosApi} from "../../services/tasksService";

export const useCreateToDo = (
    onSuccess = (data) => {
    },
    onError = (e) => {
    },
) => {
    const client = useQueryClient();
    const useCreateTodoMutation = useMutation(todosApi.createTodo, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
    });
    return {useCreateTodoMutation}
};

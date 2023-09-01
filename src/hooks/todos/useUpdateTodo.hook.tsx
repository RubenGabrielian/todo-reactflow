import {useMutation, useQueryClient} from "react-query";
import {todosApi} from "../../services/tasksService";

export const useUpdateToDo = (
    onSuccess = (data) => {
    },
    onError = (e) => {
    },
) => {
    const client = useQueryClient();
    const useUpdateToDoPosition = useMutation(todosApi.updateTodo, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
        onMutate: () => {

        }
    });
    return {useUpdateToDoPosition}
};

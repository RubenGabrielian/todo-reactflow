import {useMutation, useQueryClient} from "react-query";
import {todosApi} from "../../services/tasksService";

export const useUpdateToDoContent = (
    onSuccess = (data) => {
    },
    onError = (e) => {
    },
) => {
    const client = useQueryClient();
    const useUpdateToDoContentMutation = useMutation(todosApi.updateTodoContent, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
    });
    return {useUpdateToDoContentMutation}
};

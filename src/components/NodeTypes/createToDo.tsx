import {Handle, Position} from "reactflow";
import {StyledCreatorTodo} from "../../components/NodeTypes/nodeTypes.styled";
import {notification} from "antd";
import {useCreateToDo} from "../../hooks/todos/useCreateTodo.hook";
import useGetTodos from "../../hooks/todos/useGetTodos.hook";
import {useDeleteToDo} from "../../hooks/todos/useDeleteTodo.hook";
import BoardLoading from "../molecules/loading/loading";
import CreateToDoForm from "./createForm";
import ToDoItem from "./todoItem";

export default function CreateToDoNode({data, isConnectable}) {
    const [api, contextHolder] = notification.useNotification();
    const {refetch} = useGetTodos();
    const {useCreateTodoMutation} = useCreateToDo(
        (data) => {
            refetch();
        },
        (e) => {
            console.log(e);
        },
    );

    const {useDeleteTodoMutation} = useDeleteToDo(
        (data) => {
            refetch();
            api.success({
                message: `Success`,
                description: "Todo successfully deleted",
                placement: "topRight",
            });
        },
        (e) => {
            api.error({
                message: `Error`,
                description: "Something went wrong",
                placement: "topRight",
            });
        },
    );


    const handleFinish = (values) => {
        values.user_id = "asas";
        values.y_position = 100;
        values.x_position = 100;
        useCreateTodoMutation.mutate(values);
    };

    const handleDeleteTodo = (id) => {
        useDeleteTodoMutation.mutate({id})
    }

    return (
        <StyledCreatorTodo>
            {contextHolder}
            {useDeleteTodoMutation?.isLoading === true || useCreateTodoMutation?.isLoading === true ?
                <BoardLoading/> : null}
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
            <div className={"create-to-do-wrapper"}>
                {data?.title ? <ToDoItem data={data} handleDeleteTodo={handleDeleteTodo}/> :
                    <CreateToDoForm data={data} handleFinish={handleFinish}/>}
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                isConnectable={isConnectable}
            />
        </StyledCreatorTodo>
    );
}

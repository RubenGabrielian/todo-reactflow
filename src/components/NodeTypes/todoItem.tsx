import Flex from "../molecules/flex";
import {Button, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useState} from "react";
import EditableToDo from "./editableToDo";

export default function ToDoItem({data, handleDeleteTodo}) {
    const [editable, setEditable] = useState(false);

    const handleShowEditForm = () => {
        setEditable(true);
    }

    return !editable ? (
        <div className={"todo"}>
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <Flex justifyContent={"space-between"}>
                <Button type="primary">Mark as completed</Button>
                <Button onClick={handleShowEditForm}>Edit</Button>
            </Flex>
            <Popconfirm title={"Are you sure?"} onConfirm={() => handleDeleteTodo(data.id)}>
                <button className={"delete-todo"}>
                    <DeleteOutlined/>
                </button>
            </Popconfirm>
        </div>
    ) : <EditableToDo data={data} setEditable={setEditable}/>
}
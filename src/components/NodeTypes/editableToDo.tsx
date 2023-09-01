import React from 'react';
import {Button, Form, Input, notification} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useUpdateToDoContent} from "../../hooks/todos/useUpdateTodoContent.hook";
import useGetTodos from "../../hooks/todos/useGetTodos.hook";
import {IFormValues} from "./types";

export default function EditableToDo({data, setEditable} : {data: IFormValues, setEditable: (status:boolean) => void}) {

    const {refetch} = useGetTodos();
    const [api, contextHolder] = notification.useNotification();

    const {useUpdateToDoContentMutation} = useUpdateToDoContent(() => {
            refetch().then(() => {
                setEditable(false);
            }).finally(() => {
                api.success({
                    message: `Success`,
                    description: "Updated!",
                    placement: "topRight",
                });
            })

        },
        () => {
            api.error({
                message: `Error`,
                description: "Something went wrong",
                placement: "topRight",
            });
        })
    const handleFinish = (values: IFormValues) => {
        values.id = data.id;
        useUpdateToDoContentMutation.mutate(values);
    }

    return (
        <Form layout={"vertical"} initialValues={{title: data?.title, description: data?.description}}
              onFinish={handleFinish}>
            {contextHolder}
            <Form.Item label={"Title"} name={"title"}>
                <Input/>
            </Form.Item>
            <Form.Item label={"Description"} name={"description"}>
                <TextArea/>
            </Form.Item>
            <Form.Item>
                <Button type={"primary"} htmlType={"submit"} block>Update</Button>
            </Form.Item>
        </Form>
    )
}
import {Button, Form, Input, notification} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useUpdateToDoContent} from "../../hooks/todos/useUpdateTodoContent.hook";
import useGetTodos from "../../hooks/todos/useGetTodos.hook";

export default function EditableToDo({data, setEditable}) {

    const {refetch} = useGetTodos();
    const [api, contextHolder] = notification.useNotification();

    const {useUpdateToDoContentMutation} = useUpdateToDoContent((data) => {
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
        (e) => {
            api.error({
                message: `Error`,
                description: "Something went wrong",
                placement: "topRight",
            });
        })
    const handleFinish = (values) => {
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
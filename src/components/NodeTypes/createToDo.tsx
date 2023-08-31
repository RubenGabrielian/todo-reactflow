import { Handle, Position } from "reactflow";
import { StyledCreatorTodo } from "../../components/NodeTypes/nodeTypes.styled";
import { Button, Form, Input } from "antd";
import { useCreateToDo } from "../../hooks/todos/useCreateTodo.hook";
import Flex from "../molecules/flex";
import useGetTodos from "../../hooks/todos/useGetTodos.hook";
import { DeleteOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const handleStyle = { left: 10 };

export default function CreateToDoNode({ data, isConnectable }) {
  const { refetch } = useGetTodos();
  const { mutate } = useCreateToDo(
    (data) => {
      console.log(data);
      refetch();
    },
    (e) => {
      console.log(e);
    },
  );

  const handleFinish = (values) => {
    values.user_id = "asas";
    values.y_position = 100;
    values.x_position = 100;
    mutate(values);
  };

  return (
    <StyledCreatorTodo>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className={"create-to-do-wrapper"}>
        {data?.title ? (
          <div className={"todo"}>
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <Flex justifyContent={"space-between"}>
              <Button type="primary">Mark as completed</Button>
              <Button>Edit</Button>
            </Flex>
            <button className={"delete-todo"}>
              <DeleteOutlined />
            </button>
          </div>
        ) : (
          <Form
            layout={"vertical"}
            onFinish={handleFinish}
            initialValues={{
              title: data?.title,
              description: data?.description,
            }}
          >
            <Form.Item label={"Title"} name={"title"}>
              <Input />
              {/*<input id="text" name="text" onChange={onChange} className="nodrag" />*/}
            </Form.Item>
            <Form.Item label={"Description"} name={"description"}>
              <TextArea />
            </Form.Item>
            <Form.Item>
              <Button type={"primary"} htmlType={"submit"} block>
                {data?.title ? "Edit" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        )}
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

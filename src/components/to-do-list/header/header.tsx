import { StyledToDoListHeader } from "../../../components/to-do-list/header/header.styled";
import Container from "../../../components/molecules/container/container";
import Flex from "../../molecules/flex/flex";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import uuid from "react-uuid";

export default function ToDoListHeader({ nodes, setNodes }) {
  const handleCreateToDo = () => {
    const newTodoForm = {
      id: uuid(),
      data: { label: "" },
      position: { x: 150, y: 150 },
      type: "toDoCreator",
    };
    setNodes([...nodes, newTodoForm]);
  };

  return (
    <StyledToDoListHeader>
      <Container>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <div>
            <h1>Create your board </h1>
            <p>And enjoy to track your time and work</p>
          </div>
          <Button type={"primary"} onClick={handleCreateToDo}>
            Add New <PlusOutlined />
          </Button>
        </Flex>
      </Container>
    </StyledToDoListHeader>
  );
}

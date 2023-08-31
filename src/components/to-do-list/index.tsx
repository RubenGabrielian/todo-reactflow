"use client";
import Board from "../../components/to-do-list/board/board";
import ToDoListHeader from "../../components/to-do-list/header/header";
import { useEffect, useState } from "react";
import useGetTodos from "../../hooks/todos/useGetTodos.hook";
import useGetEdges from "../../hooks/edges/useGetEdges.hook";

export default function TodoListBoard() {
  const initialEdges = [];
  const initialNodes = [];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const { data } = useGetTodos();
  const { edgesList } = useGetEdges();
  useEffect(() => {
    if (data) {
      console.log(data?.data);
      setNodes(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (edgesList) {
      setEdges(edgesList);
    }
  }, [edgesList]);

  return (
    <div style={{ height: "100%" }}>
      <ToDoListHeader nodes={nodes} setNodes={setNodes} />
      <Board
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
      />
    </div>
  );
}

"use client";
import ProfileLayout from "../../app/profile/layout";
import "reactflow/dist/style.css";
import TodoListBoard from "../../components/to-do-list";

export default function ToDoList() {
  return (
    <ProfileLayout>
      <TodoListBoard />
    </ProfileLayout>
  );
}

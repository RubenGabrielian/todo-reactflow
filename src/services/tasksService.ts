import axios from "../libs/axios";

export const todosApi = {
  async createTodo(data) {
    return await axios.post("/api/create-todo", data);
  },
  async fetchTodos() {
    return await axios.get("/api/todos");
  },
  async updateTodo(data) {
    return await axios.put("/api/update-todo", data);
  },
};

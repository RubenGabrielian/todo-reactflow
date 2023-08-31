import axios from "../libs/axios";

export const edgesApi = {
  async createEdge(data) {
    return await axios.post("/api/add-edge", data);
  },
  async fetchEdges() {
    return await axios.get("/api/edges");
  },
};

import {StyledBoard} from "../../../components/to-do-list/board/board.styled";
import ReactFlow, {addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls,} from "reactflow";
import Container from "../../../components/molecules/container/container";
import {useCallback} from "react";
import {nodeTypes} from "../../../components/to-do-list/board/nodeTypes";
import {notification} from "antd";
import {useUpdateToDo} from "../../../hooks/todos/useUpdateTodo.hook";
import {useCreateEdge} from "../../../hooks/edges/useCreateEdges.hook";
import BoardLoading from "../../molecules/loading/loading";

export default function Board({nodes, setNodes, edges, setEdges}) {
    const [api, contextHolder] = notification.useNotification();
    const {useUpdateToDoPosition} = useUpdateToDo(
        (data) => {
            api.success({
                message: `Success`,
                description: "Position changed!",
                placement: "topRight",
            });
        },
        (e) => {
            api.error({
                message: `Error`,
                description: "Something went wrong",
                placement: "topRight",
            });
        }
    );

    const {mutate: createEdge} = useCreateEdge(
        (data) => {
            api.success({
                message: `Success`,
                description: "",
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
    const onNodeChanges = useCallback((changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    }, []);

    const onEdgesChange = useCallback((changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds));
    }, []);

    const onConnect = useCallback((params) => {
        createEdge(params);
        setEdges((eds) => addEdge(params, eds));
    }, []);

    const onNodeDrag = (event, node) => {
        if (node?.dragging) {
            useUpdateToDoPosition.mutate({
                id: node.id,
                x_position: node?.position?.x,
                y_position: node?.position?.y,
            });
        }
    };

    return (
        <Container>
            {contextHolder}
            <StyledBoard>
                <div className={"board-wrapper"}>
                    {useUpdateToDoPosition?.isLoading ? <BoardLoading/> : null}
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodeChanges}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        onNodeDragStop={onNodeDrag}
                    >
                        <Background/>
                        <Controls/>
                    </ReactFlow>

                </div>
            </StyledBoard>
        </Container>
    );
}

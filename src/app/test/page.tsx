"use client"
import ReactFlow, {
    Controls, Background, applyNodeChanges, applyEdgeChanges,
    addEdge
} from "reactflow";
import 'reactflow/dist/style.css'
import {useCallback, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import TextUpdaterNode from "@/components/NodeTypes/TextUpdaterNode";

const nodeTypes = {textUpdater: TextUpdaterNode}

export default function Test() {

    const initialEdges = [];

    const initialNodes = [
        {
            id: '1',
            data: {label: 'Hello'},
            position: {x: 0, y: 0},
            type: 'textUpdater',
        },
        {
            id: '2',
            data: {label: 'World'},
            position: {x: 100, y: 100},
        },
    ];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodeChanges = useCallback((changes) => {
        console.log(changes)
        setNodes((nds) => applyNodeChanges(changes, nds))
    }, []);
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
    return (
        <div style={{height: "100%"}}>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodeChanges} onEdgesChange={onEdgesChange}
                       onConnect={onConnect} nodeTypes={nodeTypes} fitView
            >
                <Background color={"red"}/>
                <Controls/>
            </ReactFlow>
        </div>
    )
}

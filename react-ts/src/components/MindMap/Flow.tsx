import {SetStateAction, useCallback, useState} from "react";
import ReactFlow, {ReactFlowProvider, addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import * as Styled from "../../style/MindMap.style.tsx";

interface Node {
    id: string,
    type?: string,
    data: { label: string },
    position: { x: number, y: number },
}

const initialNodes: Node[] = [
    {id: '1', type: 'input', data: {label: 'Root Node'}, position: {x: 250, y: 0}},
    // {id: '2', data: {label: 'Child Node 1'}, position: {x: 100, y: 100}},
    // {id: '3', data: {label: 'Child Node 2'}, position: {x: 400, y: 100}},
];

const initialEdges: [] = [
    // {id: 'e1-2', source: '1', target: '2', animated: false},
    // {id: 'e1-3', source: '1', target: '3', animated: true},
];

const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [editingNode, setEditingNode] = useState<Node | null>(null);
    const [content, setContent] = useState<string>('');
    const [selectedEdge, setSelectedEdge] = useState<Edge<any> | null>(null);
    const [showEdgeMenu, setShowEdgeMenu] = useState<boolean>(false);

    const addNode = () => {
        const newNode = {
            id: (nodes.length + 1).toString(),
            data: {label: `Node ${nodes.length + 1}`},
            position: {x: Math.random() * 200, y: Math.random() * 200},
        };
        setNodes(prevNode => [...prevNode, newNode]);
    };

    const updateNodeContent = (id: string, content: string) => {
        setNodes(nds =>
            nds.map(node =>
                node.id === id ? {...node, data: {...node.data, label: content}} : node
            )
        );
    };

    const deleteNode = (id: string) => {
        setNodes((nds) => nds.filter((node) => node.id !== id));
        setEditingNode(null);
    };

    const doubleClickNode = useCallback((event: { stopPropagation: () => void }, node: Node | null) => {
        if (node) {
            event.stopPropagation();
            setEditingNode(node);
            setContent(node.data.label);
        }
    }, []);

    const changeContent = useCallback((event: { target: { value: SetStateAction<string> } }) => {
        setContent(event.target.value);
    }, []);

    const saveContent = useCallback(() => {
        if (editingNode) {
            updateNodeContent(editingNode.id, content);
            setEditingNode(null);
            setContent('');
        }
    }, [editingNode, content]);

    const cancelContent = useCallback(() => {
        setEditingNode(null);
        setContent('');
    }, []);

    // Edge operations
    const connectEdge = (params: Edge | Connection) => setEdges(edges => addEdge(params, edges));

    const clickEdge = useCallback((event: { stopPropagation: () => void; }, edge: SetStateAction<Edge<any> | null>) => {
        event.stopPropagation();
        setSelectedEdge(edge);
        setShowEdgeMenu(true);
    }, []);

    const deleteEdge = useCallback(() => {
        if (selectedEdge) {
            setEdges((eds) => eds.filter((e) => e.id !== selectedEdge.id));
            setSelectedEdge(null);
            setShowEdgeMenu(false);
        }
    }, [selectedEdge]);

    const closeEdgeMenu = useCallback(() => {
        setShowEdgeMenu(false);
        setSelectedEdge(null);
    }, []);

    return (
        <ReactFlowProvider>
            <Styled.FlowContainer>
                <button onClick={addNode}>노드 추가</button>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={connectEdge}
                    onEdgeClick={clickEdge}
                    onNodeDoubleClick={doubleClickNode}
                    attributionPosition="bottom-left"
                    fitView
                >
                    <MiniMap/>
                    <Controls/>
                    <Background/>
                </ReactFlow>
                {editingNode &&
                    <Styled.NodeEditMenu>
                        <input type="text" defaultValue={content} onChange={changeContent}/>
                        <div>
                            <button onClick={saveContent}>저장</button>
                            <button onClick={() => deleteNode(editingNode.id)}>삭제</button>
                            <button onClick={cancelContent}>취소</button>
                        </div>
                    </Styled.NodeEditMenu>
                }
                {showEdgeMenu &&
                    <Styled.EdgeMenu>
                        <p>정말로 이 선을 삭제하시겠습니까?</p>
                        <div>
                            <button onClick={deleteEdge}>삭제</button>
                            <button onClick={closeEdgeMenu}>취소</button>
                        </div>
                    </Styled.EdgeMenu>
                }
            </Styled.FlowContainer>
        </ReactFlowProvider>
    );
};

export default Flow;

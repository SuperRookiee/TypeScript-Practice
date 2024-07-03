import ReactFlow, {ReactFlowProvider, addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import * as Styled from "../../style/MindMap.style.tsx";

const initialNodes = [
    {id: '1', type: 'input', data: {label: 'Root Node'}, position: {x: 250, y: 0},},
    {id: '2', data: {label: 'Child Node 1'}, position: {x: 100, y: 100},},
    {id: '3', data: {label: 'Child Node 2'}, position: {x: 400, y: 100},},
];

const initialEdges = [
    {id: 'e1-2', source: '1', target: '2', animated: false},
    // {id: 'e1-3', source: '1', target: '3', animated: true},
];

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = (params: Edge | Connection) => setEdges((edges) => addEdge(params, edges));

    return (
        <ReactFlowProvider>
            <Styled.FlowContainer>
                <ReactFlow nodes={nodes} edges={edges}
                           onNodesChange={onNodesChange}
                           onEdgesChange={onEdgesChange}
                           onConnect={onConnect} fitView>
                    <MiniMap/>
                    <Controls/>
                    <Background/>
                </ReactFlow>
            </Styled.FlowContainer>
        </ReactFlowProvider>
    );
};

export default App;

import {NodeToolbar} from "reactflow";

function NodeWithToolbar({data}: any) {
    return (
        <>
            <NodeToolbar
                isVisible={data.forceToolbarVisible || undefined}
                position={data.toolbarPosition}
            >
                <button>cut</button>
                <button>copy</button>
                <button>paste</button>
            </NodeToolbar>
            <div className="react-flow__node-default">{data?.label}</div>
        </>
    );
}

export default NodeWithToolbar

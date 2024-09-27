import styled from "styled-components";

export const MindMapContainer = styled.section``
export const FlowContainer = styled.section`
    width: 100%;
    height: calc(100vh - 110px);

    div.react-flow__panel.react-flow__attribution {
        display: none;
    }

    a[aria-label="React Flow attribution"] {

    }

    button.react-flow__controls-button {
        background: black;

        @media (prefers-color-scheme: dark) {
            background: white
        }
    }
`
export const FlowMenu = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #646cff;
        font-weight: bold;
        margin-bottom: 20px;
    }

    div {
        display: flex;

        button {
            margin: 5px;
        }
    }
`;

export const NodeEditMenu= styled(FlowMenu)``

export const EdgeMenu = styled(FlowMenu)``

export const Post = styled.div`
    div {
        background: white;
        color: black;
    }
`

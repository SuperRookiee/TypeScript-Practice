import styled from "styled-components";

export const SortBlockContainer = styled.section`
    position: relative;
    resize: both;
    overflow: hidden;
    min-width: 200px;
    min-height: 200px;
    border: 3px solid white;
    margin: 0 3rem;
    padding: 1rem 3rem;

    & > h1 {
        margin-bottom: 3rem;
        white-space: pre;
    }
`;

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 1rem;
`;

export const Block = styled.div<{ $height: number}>`
    padding: 10px;
    border: 1px solid #646cff;
    background-color: #5e5a5a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    transition: transform 0.2s ease;
    height: ${(props) => `${props.$height}px`};

    &:hover {
        background-color: #4a4a4a;
    }

    &:active {
        transform: scale(1.05);
    }
`;

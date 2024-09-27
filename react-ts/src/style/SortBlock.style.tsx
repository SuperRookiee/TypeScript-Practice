import styled from "styled-components";

export const Title = styled.h1`
    padding: 1rem 3rem;
`;

export const SortBlockContainer = styled.section`
    position: relative;
    resize: both;
    overflow-y: scroll;
    min-width: 400px;
    min-height: 50vh;
    border: 3px solid white;
    margin: 0 3rem;
    padding: 1rem 3rem;
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
    grid-row: ${(props) => `span ${props.$height}`};

    &:hover {
        background-color: #4a4a4a;
    }

    &:active {
        transform: scale(1.05);
    }
`;

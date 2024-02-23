import styled from "styled-components";
import { Rnd } from 'react-rnd';

export const DropDNDContainer = styled.main`
    display: flex;
    flex-direction: row;
    width: 1500px;
`;

export const PostDropZone = styled.div`
    width: 50%;
    border: 1px dashed white;
    margin: 0 5px;
    padding: 1rem;
`

export const RNDWrapper = styled(Rnd)`
    border: 1px solid white;
    text-align: center;
    background-color: rgba(255,255,255,0.1);
    border-radius: 10px;

    &.resizing {
        transition: none;
    }

    &:hover {
        transform: scale(1.1);
    }

    .content {
        color: black;
    }
`;

export const MiddleArea = styled.div`
    position: absolute;
`
import styled from "styled-components";
import { Rnd } from 'react-rnd';

export const OXContainer = styled.main`
    width: 1914px;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
`
export const Zone = styled.div<{ $area: number }>`
    border: 1px dashed white;
    width: 50%;
    background-color: ${props => props.$area === 1 ? '#4747d8a2' : '#d64f4fa2'};
`

export const RND = styled(Rnd) <{ $area: number }>`
    border: 1px solid white;
    width: 200px;
    background-color: ${props => props.$area === 1 ? '#4747d8' : '#d64f4f'};
    border-radius: 10px;
    padding: 5px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 1px;
        background-color: yellow;
    }
`
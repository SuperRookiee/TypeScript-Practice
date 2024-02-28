import styled from "styled-components";
import {Rnd} from 'react-rnd';

export const DragSection = styled.main<{ $count: number }>`
    width: 1914px;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    position: relative;
`

export const SectionDivider = styled.div<{ $width: number, $length: number, $index: number }>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => ((props.$width / props.$length) * props.$index)-5 }px;
    width: ${props => props.$width / props.$length}px;
    background-color: transparent;
    border-left: 10px dashed white;
`


export const RND = styled(Rnd) <{ $area: number }>`
    border: 1px solid white;
    width: 200px;
    background-color: ${props => props.$area === 0 ? '#247ad0' : props.$area === 1 ? '#eee594' : props.$area === 2 ? '#e88282' : '#6ae362'};
    border-radius: 10px;
    padding: 5px;
    color: black;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 1px;
        background-color: #535bf2;
    }
`
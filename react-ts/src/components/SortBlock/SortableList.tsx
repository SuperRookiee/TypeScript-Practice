import { useState } from "react";
import SortableBlock from "./SortableBlock";
import * as Styled from '../../style/SortBlock.style';
import { Block } from "../../types/Block";

interface SortableListProps {
    blocks: Block[];
    onSortEnd: (newBlocks: Block[]) => void;
}
function SortableList({ blocks, onSortEnd }: SortableListProps) {
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

    const arrayMove = (arr: Block[], fromIndex: number, toIndex: number): Block[] => {
        const result = [...arr];
        const [removed] = result.splice(fromIndex, 1);
        result.splice(toIndex, 0, removed);
        return result;
    };

    const onDragStart = (e: React.DragEvent<HTMLElement>, index: number) => {
        setDraggingIndex(index);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragEnd = () => {
        setDraggingIndex(null);
    };

    const onDragOver = (e: React.DragEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        if (index !== draggingIndex && draggingIndex !== null) {
            const newBlocks = arrayMove(blocks, draggingIndex, index);
            onSortEnd(newBlocks);
            setDraggingIndex(index);
        }
    };

    return (
        <Styled.Blocks>
            {blocks.map((block, index) => (
                <SortableBlock
                    key={`block_${index}`}
                    index={index}
                    block={block}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDragOver={onDragOver}
                />
            ))}
        </Styled.Blocks>
    );
}

export default SortableList;

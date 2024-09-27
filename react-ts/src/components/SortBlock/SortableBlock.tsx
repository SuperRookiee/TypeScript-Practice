import * as Styled from '../../style/SortBlock.style';
import { Block } from '../../types/Block';

interface SortableBlockProps {
    index: number;
    block: Block
    onDragStart: (e: React.DragEvent<HTMLElement>, index: number) => void;
    onDragEnd: () => void;
    onDragOver: (e: React.DragEvent<HTMLElement>, index: number) => void;
}

function SortableBlock({
    index,
    block,
    onDragStart,
    onDragEnd,
    onDragOver,
}: SortableBlockProps) {
    return (
        <Styled.Block
            $height={block.height}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragEnd={onDragEnd}
            onDragOver={(e) => onDragOver(e, index)}
        >
            {block.value}
        </Styled.Block>
    );
}

export default SortableBlock;

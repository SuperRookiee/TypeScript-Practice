import { useState } from "react";
import SortableList from "../components/SortBlock/SortableList";
import * as Styled from '../style/SortBlock.style';
import { Block } from "../types/Block";

function SortBlock() {
    const [blocks, setBlocks] = useState<Block[]>([
        { value: "Block 1", height: 15 },
        { value: "Block 2", height: 10 },
        { value: "Block 3", height: 20 },
        { value: "Block 4", height: 32 },
        { value: "Block 5", height: 18 },
        { value: "Block 6", height: 14 },
    ]);

    const onSortEnd = (newBlocks: Block[]) => {
        setBlocks(newBlocks);
    };

    return (
        <main>
            <Styled.Title>Sortable List</Styled.Title>
            <Styled.SortBlockContainer>
                <SortableList blocks={blocks} onSortEnd={onSortEnd} />
            </Styled.SortBlockContainer>
        </main>
    );
}

export default SortBlock;

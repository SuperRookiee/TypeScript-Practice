import '../assets/css/ReactDNDGrid.scss';
import { useState } from 'react';
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";

function ReactDNDGrid() {
    const [leftItems, setLeftItems] = useState([
        { id: 1, name: "kate" },
        { id: 2, name: "edward" },
        { id: 3, name: "jason" },
        { id: 4, name: "chris" },
        { id: 5, name: "heather" },
        { id: 6, name: "Richard" }
    ]);
    const [rightItems, setRightItems] = useState([
        { id: 7, name: "george" },
        { id: 8, name: "rupert" },
        { id: 9, name: "alice" },
        { id: 10, name: "katherine" },
        { id: 11, name: "pam" },
        { id: 12, name: "katie" }
    ]);

    const [leftCount, setLeftCount] = useState(leftItems.length);
    const [rightCount, setRightCount] = useState(rightItems.length);

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
            const result = move(
                sourceId === 'left' ? leftItems : rightItems,
                targetId === 'left' ? leftItems : rightItems,
                sourceIndex,
                targetIndex
            );
            if (sourceId === 'left') {
                setLeftItems(result[0]);
                setRightItems(result[1]);
                setLeftCount(result[0].length);
                setRightCount(result[1].length);
            } else {
                setLeftItems(result[1]);
                setRightItems(result[0]);
                setLeftCount(result[1].length);
                setRightCount(result[0].length);
            }
        } else {
            if (sourceId === 'left') {
                const result = swap(leftItems, sourceIndex, targetIndex);
                setLeftItems(result);
                setLeftCount(result.length);
            } else {
                const result = swap(rightItems, sourceIndex, targetIndex);
                setRightItems(result);
                setRightCount(result.length);
            }
        }
    }

    function handleItemClick(sourceId, item) {
        if (sourceId === 'left') {
            const index = leftItems.findIndex(i => i.id === item.id);
            if (index !== -1) {
                const updatedItems = [...leftItems];
                updatedItems.splice(index, 1);
                setLeftItems(updatedItems);
                setLeftCount(updatedItems.length);
                setRightItems([...rightItems, item]);
                setRightCount(rightItems.length + 1);
            }
        } else {
            const index = rightItems.findIndex(i => i.id === item.id);
            if (index !== -1) {
                const updatedItems = [...rightItems];
                updatedItems.splice(index, 1);
                setRightItems(updatedItems);
                setRightCount(updatedItems.length);
                setLeftItems([...leftItems, item]);
                setLeftCount(leftItems.length + 1);
            }
        }
    }

    return (
        <main id='Grid'>
            <GridContextProvider onChange={onChange}>
                <div className="container" >
                    <GridDropZone
                        className="dropzone left"
                        id="left"
                        boxesPerRow={4}
                        rowHeight={70}
                    >
                        {leftItems.map(item => (
                            <GridItem key={item.name}>
                                <div className="grid-item">
                                    <div className="grid-item-content">
                                        {item.name}
                                    </div>
                                </div>
                            </GridItem>
                        ))}
                    </GridDropZone>
                    <GridDropZone
                        className="dropzone right"
                        id="right"
                        boxesPerRow={4}
                        rowHeight={70}
                    >
                        {rightItems.map(item => (
                            <GridItem key={item.name}>
                                <div className="grid-item">
                                    <div className="grid-item-content">
                                        {item.name}
                                    </div>
                                </div>
                            </GridItem>
                        ))}
                    </GridDropZone>
                </div>
            </GridContextProvider>
            <div>
                <p>왼쪽 컴포넌트 개수: {leftCount}</p>
                <p>오른쪽 컴포넌트 개수: {rightCount}</p>
            </div>
        </main>
    );
}

export default ReactDNDGrid;
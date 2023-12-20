import * as Styled from '../../style/ReactDraggable';
import { useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

interface DraggableItemProps {
    text: string;
}

function DraggableItem({ text }: DraggableItemProps) {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleDrag = (data: DraggableData) => {
        setIsDragging(true);
        setPosition({ x: data.x, y: data.y });
    };

    const handleStop = () => {
        setTimeout(() => {
            setIsDragging(false);
        }, 100);
    };

    const handleClick = (e:MouseEvent) => {
        e.stopPropagation();
        if (isDragging) {
            return;
        }
        setIsOpen((prev) => !prev);
    };

    return (
        <Draggable onDrag={(_, data) => handleDrag(data)} onStop={handleStop}>
            <Styled.Post onClick={() => setIsOpen(false)}>
                <div onClick={(e) => handleClick(e)}>{text}</div>
                <div>X: {position.x}, Y: {position.y}</div>
                {isOpen && (
                    <Styled.Menu>
                        메뉴입니당~
                    </Styled.Menu>
                )}
            </Styled.Post>
        </Draggable>
    );
}

export default DraggableItem;
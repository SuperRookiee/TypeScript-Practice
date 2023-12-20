import * as Styled from '../style/ReactDraggable';
import DraggableItem from '../components/reactDraggable/DraggableItem';

function ReactDraggable() {
    return (
        <Styled.DNDContainer>
            <DraggableItem text="치즈" />
            <DraggableItem text="토마토" />
            <DraggableItem text="바질" />
        </Styled.DNDContainer>
    );
};

export default ReactDraggable;
import { Link } from "react-router-dom";
import * as Styled from "../style/Main.style";

function Main() {
    return (
        <Styled.MainContainer>
            <div>
                <button><Link to={`ClickEvents`}>ClickEvents</Link></button>
                <button><Link to={`ReactQuery`}>ReactQuery (userQuery)</Link></button>
                <button><Link to={`ReactRND`}>React RND</Link></button>
                <button><Link to={`ReactDraggable`}>React Draggable</Link></button>
                <button><Link to={`UrlCheck`}>Url Check</Link></button>
                <button><Link to={`Popup`}>팝업</Link></button>
                <button><Link to={`ReactCanvasDraw`}>React Canvas Draw</Link></button>
                <button><Link to={`ReactSketchCanvas`}>React Sketch Canvas</Link></button>
                <button><Link to={`PinchZoom`}>Pinch Zoom</Link></button>
                <button><Link to={`CreatePortal`}>CreatePortal (Modal)</Link></button>
                <button><Link to={`ScrollEffect`}>Scroll Effect</Link></button>
                <button><Link to={`ReactDNDGrid`}>React DND Grid</Link></button>
                <button><Link to={`DropDND`}>DropDND</Link></button>
                <button><Link to={`OXCustom`}>OX Custom</Link></button>
            </div>
        </Styled.MainContainer>
    )
}

export default Main;
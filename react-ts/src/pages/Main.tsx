import { Link } from "react-router-dom";
import * as Styled from "../style/Main.style";

const openNewWindow = () => {
    window.open('UrlCheck_Popup', '_blank', 'width=500, height=500');
  };

function Main() {
    return (
        <Styled.MainContainer>
            <button><Link to={`ClickEvents`}>ClickEvents</Link></button>
            <button><Link to={`ReactQuery`}>ReactQuery (userQuery)</Link></button>
            <button><Link to={`ReactRND`}>React RND</Link></button>
            <button><Link to={`ReactDraggable`}>React Draggable</Link></button>
            <button><Link to={`UrlCheck`}>Url Check</Link></button>
            <button onClick={openNewWindow}>Url Check 새창</button>
        </Styled.MainContainer>
    )
}

export default Main;
import { Link } from "react-router-dom";
import * as Styled from "../style/Main.style";

function Main() {
    return(
        <Styled.MainContainer>
            <button><Link to={`ClickEvents`}>클릭이벤트</Link></button>
            <button><Link to={`ReactQuery`}>ReactQuery (userQuery)</Link></button>
        </Styled.MainContainer>
    )
}

export default Main;
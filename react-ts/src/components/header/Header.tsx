import { Link } from "react-router-dom";
import { HeaderContainer } from "../../style/Header.style";

function Header() {
    return(
        <HeaderContainer>
            <Link to={`/`}>메인</Link>
        </HeaderContainer>
    )
}

export default Header;
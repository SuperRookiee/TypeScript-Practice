import { useNavigate } from "react-router-dom";
import { ClickAreaContainer } from "../../style/ClickEvents.style";

interface ISampleProps {
    num: number;
    str: string;
}

interface IClickAreaProps extends ISampleProps {
    isDropMenuOpen: boolean;
    toggleDropMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ClickArea({ isDropMenuOpen, toggleDropMenu, num, str }: IClickAreaProps) {
    const navigate = useNavigate();

    return (
        <ClickAreaContainer>
            <button onClick={toggleDropMenu}>클릭</button>
            {isDropMenuOpen &&
                <div id="showArea">
                    <span>Props num {num}</span>
                    <span>Props str {str}</span>
                    <span onClick={() => navigate(`/`)}>메인으로 가기</span>
                </div>
            }
        </ClickAreaContainer>
    )
}

export default ClickArea;
import styled from "styled-components";

const PopupContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

function PopupPage() {
    return(
        <PopupContainer>
            팝업 새창
        </PopupContainer>
    )
}

export default PopupPage;
import styled from "styled-components";

const PopupContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

function Popup() {
    return(
        <main>
            <PopupContainer>
                <h2>팝업 페이지</h2>
                <div>
                    <button onClick={() => window.open('PopupPage', '_blank', 'width=500, height=500')}>Url Check 새창 팝업</button>
                </div>
            </PopupContainer>
        </main>
    )
}

export default Popup;
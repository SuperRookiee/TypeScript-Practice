import styled from "styled-components";

export const CanvasMainContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > section {
        display: flex;
        flex-direction: row;
        padding: 0 5rem;
        margin: 1rem 0;
        
        &#export_path {
            height: 600px;
            overflow-y: scroll;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    white-space: pre;
    
    button {
        margin: 0 3px;
    }
`

export const Status = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    & > div {
        display: flex;
        justify-content: space-evenly;

        input {
            width: 5rem;
        }
    }
`
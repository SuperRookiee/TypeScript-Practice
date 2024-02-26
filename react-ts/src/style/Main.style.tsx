import styled from "styled-components";

export const MainContainer = styled.main`
    align-items: center;
    
    & > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    button {
        margin-top: 1rem;
        width: 300px;

        a {
            padding: 0.5em 1em;
            display: block;

            &:hover {
                color: white;
                transition: all 1ms;
            }
        }
    }
`
import styled from "styled-components";

export const MainContainer = styled.main`
    justify-content: center;
    align-items: center;

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
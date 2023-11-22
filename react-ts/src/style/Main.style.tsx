import styled from "styled-components";
import { PageContainer } from "./Common.style";

export const MainContainer = styled(PageContainer)`
    justify-content: center;
    align-items: center;

    button {
        margin-top: 1rem;
        width: 300px;

        a {
            padding: 0.6em 1.2em;
        }
    }
`
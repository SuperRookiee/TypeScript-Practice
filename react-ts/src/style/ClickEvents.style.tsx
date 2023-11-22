import styled from "styled-components";
import { PageContainer } from "./Common.style";

export const ClickEventsContainer = styled(PageContainer)`
  align-items: center;
  
  #outside_area {
    margin: 5rem;
  }
`;

export const ClickAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    padding: 20px;
    border-radius: 5px;
  }
  
  #showArea {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    span {
      cursor: pointer;
      color: black;
      display:  block;
      padding: 1rem 5px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    } 
  }
`
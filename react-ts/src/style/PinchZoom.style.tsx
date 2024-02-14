import styled from "styled-components";

export const Screen = styled.section`
  display: flex;
  justify-content: center;
  border: 1px solid #535bf2;
`

export const Target = styled.div`
  border: 1px solid white;
  width: 450px;
  height: 590px;
  touch-action: none;
  background-color: rgba(255,255,255,0.2);

  img {
    width: 25%;
  }
`
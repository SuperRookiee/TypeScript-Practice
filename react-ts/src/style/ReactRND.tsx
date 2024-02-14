import styled from 'styled-components';
import { Rnd } from "react-rnd";

export const RNDContainer = styled.main`
  align-items: center;
`;

export const PostWrapper = styled(Rnd) <{ zindex: number }>`
  padding: 5rem;
  border: 1px solid black;
  border-radius: 10px;
  z-index: ${(props) => props.zindex ? props.zindex : 0};
  background-image: url('../src/assets/Tom and Jerry.png');
  background-repeat : no-repeat;
  background-size : cover;
  color: black;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const Menu = styled.div`
  white-space: pre;
  background-color: red;
  border-radius: 1rem;
  padding: 1rem;
`
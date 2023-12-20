import styled from 'styled-components';
import { PageContainer } from "./Common.style";

export const DNDContainer = styled(PageContainer)`
  align-items: center;
`;

export const Post = styled.div`
  border: 1px solid #535bf2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Menu = styled.div`
  background-color: red;
  border-radius: 1rem;
  padding: 5px;
  margin: 1px;
  position: absolute;
`
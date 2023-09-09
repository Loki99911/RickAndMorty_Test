import styled from "styled-components";

export const MainPageWrapper = styled.section`
  background-color: var(--main-gray);
  padding: 0 110px;
  padding-bottom: 10px;
`;

export const CardsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 27px;
  margin-bottom: 17px;
`;

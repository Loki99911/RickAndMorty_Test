import styled from "styled-components";

export const MainPageWrapper = styled.section`
  background-color: var(--main-gray);
  padding: 0 110px;
  padding-bottom: 10px;
  padding-top: 100px;
`;

export const CardsList = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  gap: 27px;
  margin-bottom: 17px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 429px;
`;
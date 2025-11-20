import styled from "styled-components";

export const HeaderContainer = styled.header<{ color?: string }>`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ color }) => color};
  padding: 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

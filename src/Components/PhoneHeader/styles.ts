import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #1a1a1a;
  padding: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
`;

export const NavMenu = styled.div`
  margin: 0 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background: #333333;
  border-radius: 10px;
`;

export const NavLink = styled.span<{ active: boolean }>`
  text-decoration: none;
  font-size: 18px;
  color: ${({ active }) => (active ? "#4FC3F7" : "#FFFFFF")};
  border: ${({ active }) => (active ? "1px solid #4FC3F7" : "none")};
  border-radius: 5px;
  padding: 5px 10px;
  width: 90%;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #4fc3f7;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

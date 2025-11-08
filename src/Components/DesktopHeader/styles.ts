import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding-inline: 120px;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.span`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const NavLink = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  font-size: 22px;
  color: ${({ active }) => (active ? "#4FC3F7" : "#FFFFFF")};
  transition: color 0.3s;

  &:hover {
    color: #4fc3f7;
  }
`;

import styled from "styled-components";

interface ColorsProps {
  colors: {
    background: string;
    navIcons: string;
    navBg: string;
    logo: string;
  };
}

export const HeaderContainer = styled.header<ColorsProps>`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  height: 60px;
  border-radius: 1000px;
  margin-top: 20px;
  padding-inline: 40px;
  background: ${({ colors }) => colors.navBg};

  @media (min-width: 760px) and (max-width: 1024px) {
    width: 70%;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Nav = styled.nav<ColorsProps>`
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    color: ${({ colors }) => colors.navIcons};
    font-size: 25px;
    cursor: pointer;
  }
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeToggle = styled.button<ColorsProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.3s;
  color: ${({ colors }) => colors.navIcons};

  &:hover {
    color: #4fc3f7;
  }
`;

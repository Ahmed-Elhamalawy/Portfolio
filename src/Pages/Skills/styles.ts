import styled from "styled-components";

interface ThemeProps {
  colors: {
    background: string;
    navBg: string;
    text: string;
    btnBg: string;
  };
}

export const SectionWrapper = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.colors.background};
  transition: background-color 0.3s ease;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 60px;
`;

export const SkillCard = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${(props) => props.colors.navBg};
  border-radius: 12px;
  padding: 20px 10px;
  background-color: ${(props) => props.colors.btnBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.colors.navBg};
  }
`;

export const SkillName = styled.span<ThemeProps>`
  font-size: 16px;
  color: ${(props) => props.colors.text};
  transition: color 0.3s ease;
`;

export const SubTitle = styled.h2<ThemeProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.colors.text};
  margin-bottom: 60px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${(props) => props.colors.text};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

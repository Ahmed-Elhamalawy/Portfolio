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

export const TimelineWrapper = styled.div<ThemeProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 800px;
  width: 100%;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${(props) => props.colors.navBg};
    border-radius: 2px;
    transition: background 0.3s ease;

    @media (max-width: 768px) {
      left: 11px;
      width: 2px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const Dot = styled.div<ThemeProps>`
  position: absolute;
  left: -33px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.colors.navBg};
  border: 4px solid ${(props) => props.colors.background};
  box-shadow: 0 0 0 4px ${(props) => props.colors.btnBg};
  z-index: 2;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    left: -25px;
    width: 16px;
    height: 16px;
    border: 3px solid ${(props) => props.colors.background};
  }

  ${TimelineItem}:hover & {
    transform: scale(1.3);
    box-shadow: 0 0 0 6px ${(props) => props.colors.btnBg};
  }
`;

export const TimelineContent = styled.div<ThemeProps>`
  color: ${(props) => props.colors.text};
  background: ${(props) => props.colors.btnBg};
  border: 1px solid ${(props) => props.colors.navBg};
  border-radius: 12px;
  padding: 24px;
  flex: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.colors.navBg};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  ${TimelineItem}:hover &::before {
    transform: scaleX(1);
  }

  ${TimelineItem}:hover & {
    transform: translateX(5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 1.3rem;
    color: ${(props) => props.colors.text};
    font-weight: 600;
  }

  p {
    margin: 8px 0 12px 0;
    color: ${(props) => props.colors.text};
    line-height: 1.6;
    font-size: 0.95rem;
    opacity: 0.9;
  }

  span {
    display: inline-block;
    font-size: 0.85rem;
    color: ${(props) => props.colors.text};
    background: ${(props) => props.colors.navBg};
    padding: 4px 12px;
    border-radius: 20px;
    margin-top: 12px;
  }
`;

export const CompanyName = styled.p<ThemeProps>`
  font-size: 0.9rem;
  color: ${(props) => props.colors.text};
  margin-bottom: 12px;
  margin-top: 4px;
  font-weight: 500;
  opacity: 0.85;
`;

export const AchievementsList = styled.ul<ThemeProps>`
  margin: 12px 0;
  padding-left: 20px;
  color: ${(props) => props.colors.text};
  font-size: 0.9rem;
  line-height: 1.8;
  opacity: 0.9;
`;

export const TechStack = styled.div<ThemeProps>`
  margin-top: 12px;
  font-size: 0.85rem;
  color: ${(props) => props.colors.text};
  font-style: italic;
  opacity: 0.7;
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

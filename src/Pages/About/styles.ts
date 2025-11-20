// styles.ts
import styled, { keyframes } from "styled-components";

interface ThemeProps {
  colors: {
    background: string;
    navBg: string;
    navIcons: string;
    logo: string;
    text: string;
    btnBg: string;
  };
}

interface ResponsiveProps {
  isPhone: boolean;
}

// Rotation animation for text
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AboutContainer = styled.div<ThemeProps, ResponsiveProps>`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.colors.background};
  padding: ${(isPhone) => (isPhone ? "0.5rem" : "3rem")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div<ResponsiveProps>`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isPhone ? "column-reverse" : "row")};
  gap: ${(props) => (props.isPhone ? "3rem" : "5rem")};
  align-items: ${(props) => (props.isPhone ? "flex-start" : "flex-start")};
  padding: ${(props) => (props.isPhone ? "1rem" : "3rem")};
  background-color: ${(props) =>
    props.isPhone ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.5)"};
  border-radius: 30px;
`;

export const LeftSection = styled.div<ResponsiveProps>`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const RightSection = styled.div<ResponsiveProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: ${(props) => (props.isPhone ? "100%" : "auto")};
`;

export const TagsContainer = styled.div<ResponsiveProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Tag = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.5rem;
  background-color: ${(props) => props.colors.btnBg};
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 250px;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const TagIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  opacity: 0.7;
`;

export const TagText = styled.span<ThemeProps>`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => props.colors.text};
`;

export const AboutTitle = styled.h2<ThemeProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.colors.text};
  margin: 0 0 0.5rem 0;
`;

export const AboutDescription = styled.p<ThemeProps & ResponsiveProps>`
  font-size: ${(props) => (props.isPhone ? "1rem" : "1.05rem")};
  line-height: 1.8;
  color: ${(props) => props.colors.text};
  opacity: 0.85;
  margin: 0;
  text-align: ${(props) => (props.isPhone ? "start" : "justify")};
`;

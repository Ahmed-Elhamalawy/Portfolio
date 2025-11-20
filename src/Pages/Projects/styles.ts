// styles.ts
import styled from "styled-components";

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

interface CardProps extends ThemeProps {
  hasLink?: boolean;
}

export const ProjectsSection = styled.section<ThemeProps>`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
`;

export const ProjectsTitle = styled.h2<ThemeProps>`
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

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
`;

export const SwiperWrapper = styled.div`
  width: 100%;

  .projects-swiper {
    padding-bottom: 50px;
  }

  /* Swiper Pagination */
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.colors?.navIcons || "#999"};
    opacity: 0.4;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors?.text || "#000"};
    opacity: 1;
    width: 30px;
    border-radius: 6px;
  }
`;

export const ProjectCard = styled.div<CardProps>`
  background-color: ${(props) => props.colors.navBg};
  border-radius: 20px;
  overflow: hidden;
  cursor: ${(props) => (props.hasLink ? "pointer" : "default")};
  transition: all 0.4s ease;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: ${(props) => (props.hasLink ? "translateY(-8px)" : "none")};
  }
`;
export const TechLabel = styled.div<ThemeProps>`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${(props) => props.colors.text};
  color: ${(props) => props.colors.background};
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  z-index: 2;
  opacity: 0.95;
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #0a0a0a;

  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.08);
  }
`;

export const DateBadge = styled.div<ThemeProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${(props) => props.colors.btnBg};
  color: ${(props) => props.colors.text};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

export const ProjectOverlay = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ViewProjectButton = styled.button<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: ${(props) => props.colors.text};
  color: ${(props) => props.colors.background};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1rem;
  }
`;

export const ProjectContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProjectLabel = styled.h3<ThemeProps>`
  margin: 0;
  font-size: 1.4rem;
  color: ${(props) => props.colors.text};
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDescription = styled.p<ThemeProps>`
  margin: 0;
  color: ${(props) => props.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

export const ProjectTag = styled.span<ThemeProps>`
  display: inline-block;
  padding: 6px 14px;
  background: ${(props) => props.colors.background};
  color: ${(props) => props.colors.text};
  border: 1px solid ${(props) => props.colors.text};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

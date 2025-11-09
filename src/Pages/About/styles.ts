import styled from "styled-components";
import { Fonts } from "../../constants/Fonts";

// About Section
export const AboutSection = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

// Titles
export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 2.2rem;
  font-family: ${Fonts.script};
  color: #ffffff;
`;

export const SubTitle = styled.h3`
  font-family: ${Fonts.poppins};
  font-size: 1.8rem;
  color: #4fc3f7;
  text-align: center;
`;

// Skills Grid
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

export const SkillCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px 10px;
  background-color: #1a1a1a;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${Fonts.poppins};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
`;

export const SkillName = styled.span`
  font-size: 16px;
`;

// Custom Timeline
export const TimelineWrapper = styled.div`
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
    background: linear-gradient(180deg, #4fc3f7 0%, #2196f3 100%);
    border-radius: 2px;

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

export const Dot = styled.div`
  position: absolute;
  left: -33px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4fc3f7 0%, #2196f3 100%);
  border: 4px solid #0a0a0a;
  box-shadow: 0 0 0 4px rgba(79, 195, 247, 0.2),
    0 0 20px rgba(79, 195, 247, 0.4);
  z-index: 2;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    left: -25px;
    width: 16px;
    height: 16px;
    border: 3px solid #0a0a0a;
  }

  ${TimelineItem}:hover & {
    transform: scale(1.3);
    box-shadow: 0 0 0 6px rgba(79, 195, 247, 0.3),
      0 0 30px rgba(79, 195, 247, 0.6);
  }
`;

export const TimelineContent = styled.div`
  font-family: ${Fonts.poppins};
  color: #fff;
  background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 24px;
  flex: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
    background: linear-gradient(90deg, #4fc3f7 0%, #2196f3 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  ${TimelineItem}:hover &::before {
    transform: scaleX(1);
  }

  ${TimelineItem}:hover & {
    transform: translateX(5px);
    box-shadow: 0 6px 20px rgba(79, 195, 247, 0.2);
    border-color: #4fc3f7;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 1.3rem;
    color: #4fc3f7;
    font-weight: 600;
  }

  p {
    margin: 8px 0 12px 0;
    color: #e1e1e1;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  span {
    display: inline-block;
    font-size: 0.85rem;
    color: #4fc3f7;
    background: rgba(79, 195, 247, 0.1);
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid rgba(79, 195, 247, 0.3);
    margin-top: 12px;
  }
`;

export const CompanyName = styled.p`
  font-size: 0.9rem;
  color: #4fc3f7;
  margin-bottom: 12px;
  margin-top: 4px;
`;

export const AchievementsList = styled.ul`
  margin: 12px 0;
  padding-left: 20px;
  color: #e1e1e1;
  font-size: 0.9rem;
  line-height: 1.8;
`;

export const TechStack = styled.div`
  margin-top: 12px;
  font-size: 0.85rem;
  color: #aaa;
  font-style: italic;
`;

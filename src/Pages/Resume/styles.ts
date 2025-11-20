// styles.ts
import styled from "styled-components";

export const ResumeSection = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

export const ResumeTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 2.2rem;

  color: #ffffff;
`;

export const ResumeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  background: #1a1a1a;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 1px solid #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(79, 195, 247, 0.2);
  }
`;

export const ResumeImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #4fc3f7 0%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 1.1rem;

  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.3);
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(79, 195, 247, 0.5);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(79, 195, 247, 0.4);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  ${DownloadButton}:hover & {
    transform: translateY(2px);
  }
`;

export const ButtonText = styled.span`
  letter-spacing: 0.5px;
`;

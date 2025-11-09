// src/components/Home/styles.ts
import styled from "styled-components";
import HomeBgImage from "../../Assets/Images/HomeBgImage.png";
import { Fonts } from "../../constants/Fonts";

// Hero Section
export const HeroSection = styled.div<{ isPhone: boolean }>`
  background-image: url(${HomeBgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => (props.isPhone ? "700px" : "500px")};
  display: flex;
  flex-direction: ${(props) => (props.isPhone ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  padding-inline: ${(props) => (props.isPhone ? "20px" : "50px")};
  box-sizing: border-box;
`;

// Text Container
export const TextContainer = styled.div<{ isPhone: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: ${(props) => (props.isPhone ? "100%" : "50%")};
`;

// Name
export const Name = styled.span`
  font-size: 63px;
  font-weight: bold;
  color: #ffffff;
  font-family: ${Fonts.poppins};
  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

// Title
export const Title = styled.span`
  font-weight: bold;
  font-size: 28px;
  font-family: ${Fonts.poppins};
  background: linear-gradient(to right, #72b6d5ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Description
export const Description = styled.span`
  color: #e1e1e1;
  font-size: 19px;
  font-family: ${Fonts.poppins};
  line-height: 2;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

// Avatar Image
export const AvatarImage = styled.img<{ isPhone: boolean }>`
  width: ${(props) => (props.isPhone ? "250px" : "400px")};
  height: ${(props) => (props.isPhone ? "250px" : "400px")};
  object-fit: cover;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  border: 5px solid #ffffff;
  margin-top: ${(props) => (props.isPhone ? "30px" : "0")};
`;

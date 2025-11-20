import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.div<{ isPhone: boolean }>`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => (props.isPhone ? "700px" : "500px")};
  display: flex;
  flex-direction: ${(props) => (props.isPhone ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  padding-inline: ${(props) => (props.isPhone ? "10px" : "150px")};
  box-sizing: border-box;
`;

export const TextContainer = styled.div<{ isPhone: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isPhone ? "100%" : "65%")};
  text-align: ${(props) => (props.isPhone ? "center" : "left")};
`;

export const Name = styled.span<{ color?: string; isPhone: boolean }>`
  font-size: ${(props) => (props.isPhone ? "32px" : "40px")};
  font-weight: 700;
  margin-bottom: ${(props) => (props.isPhone ? "0" : "10px")};
  color: ${(props) => props.color};
`;

export const Title = styled.span<{ color?: string; isPhone: boolean }>`
  font-size: ${(props) => (props.isPhone ? "20px" : "28px")};
  font-weight: 600;
  color: ${(props) => props.color};
  margin: ${(props) => (props.isPhone ? "5px auto" : "5px 0")};
`;

export const Description = styled.span<{ color?: string; isPhone: boolean }>`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.isPhone ? "14px" : "19px")};
  line-height: ${(props) => (props.isPhone ? "1.7" : "1.6")};
  font-weight: 400;
  margin-top: 12px;
`;

export const ContactRow = styled.span<{ color?: string; isPhone: boolean }>`
  margin-top: 10px;
  display: flex;
  justify-content: ${(props) => (props.isPhone ? "center" : "flex-start")};
  align-items: center;
  gap: 8px;
  font-size: ${(props) => (props.isPhone ? "14px" : "16px")};
  color: ${(props) => props.color};
  & svg {
    font-size: ${(props) => (props.isPhone ? "16px" : "18px")};
  }
`;

export const AvatarImage = styled(motion.img)<{
  isPhone: boolean;
  color?: string;
}>`
  width: ${(props) => (props.isPhone ? "200px" : "350px")};
  height: ${(props) => (props.isPhone ? "200px" : "350px")};
  object-fit: cover;
  border: 2px solid ${(props) => props.color || "transparent"};
  margin-top: ${(props) => (props.isPhone ? "30px" : "0")};
  display: block;
`;

export const ButtonsContainer = styled.div<{ isPhone: boolean }>`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: ${(props) => (props.isPhone ? "column" : "row")};
  justify-content: ${(props) => (props.isPhone ? "center" : "flex-start")};

  & > div:first-child {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const ActionButton = styled.button<{ colors: any }>`
  height: 38px;
  background: ${(props) => props.colors.btnBg};
  border-radius: 20px;
  border: none;
  color: ${(props) => props.colors.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding-inline: 16px;
  padding-block: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:last-child {
    margin-right: 10px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IconButton = styled.div<{ colors: any }>`
  background: ${(props) => props.colors.btnBg};
  padding: 8px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollDownContainer = styled.div<{ isPhone: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.isPhone ? "-20px" : "100px")};
  gap: 20px;
`;

export const ScrollText = styled.span<{ color?: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

export const ScrollArrow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

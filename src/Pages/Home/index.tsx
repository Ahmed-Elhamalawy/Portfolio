import React from "react";
import {
  HeroSection,
  TextContainer,
  Name,
  Title,
  Description,
  AvatarImage,
} from "./styles";
import { useResponsive } from "../../Hooks/UseResponsive";
import Avatar from "../../assets/images/Avatar.jpg";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const { isPhone } = useResponsive();

  // Variants for text (slide from left)
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  // Variants for avatar (slide from right)
  const avatarVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <HeroSection as={motion.div} isPhone={isPhone}>
      <TextContainer
        as={motion.div}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        isPhone={isPhone}
      >
        <Name>Ahmed Elhamalawy</Name>
        <Title>FrontEnd Developer</Title>
        <Description>
          A dedicated frontend and mobile developer with a strong passion for
          creating intuitive and efficient user experiences, specializing in
          React, React Native, and modern JavaScript frameworks. Over the past
          year, I have honed my skills in building responsive, high-performance
          applications and exploring cutting-edge frontend technologies.
        </Description>
      </TextContainer>

      <AvatarImage
        as={motion.img}
        src={Avatar}
        alt="Ahmed Elhamalawy"
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
        isPhone={isPhone}
      />
    </HeroSection>
  );
};

export default Home;

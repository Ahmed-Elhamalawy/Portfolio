import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Logo"; // your logo component
import { useTheme } from "../../Hooks/useTheme";
import {
  FooterContainer,
  LeftSection,
  FooterText,
  IconsWrapper,
  IconLink,
} from "./styles";
import { useResponsive } from "../../Hooks/UseResponsive";

const Footer: React.FC = () => {
  const { colors } = useTheme();
  const { isPhone } = useResponsive();

  return (
    <FooterContainer isPhone={isPhone} bg={colors.navBg}>
      <LeftSection>
        <Logo width={30} height={30} color={colors.logo} />
        <FooterText color={colors.text}>
          © {new Date().getFullYear()} Ahmed Elhamalawy.
          {!isPhone && "All rights reserved"}
        </FooterText>
      </LeftSection>

      <IconsWrapper>
        <IconLink
          href="https://github.com/Ahmed-Elhamalawy"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.text}
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/ahmed-elhamalawy"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.text}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconLink>
      </IconsWrapper>
    </FooterContainer>
  );
};

export default Footer;

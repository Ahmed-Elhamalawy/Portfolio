import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Logo"; // your logo component
import { useTheme } from "../../Hooks/useTheme";

const FooterContainer = styled.footer<{ bg: string }>`
  width: 100%;
  padding-block: 20px;
  padding-inline: 100px;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FooterText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 0.9rem;
  opacity: 0.8;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const IconLink = styled.a<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: #00acee;
  }
`;

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <FooterContainer bg={colors.navBg}>
      <LeftSection>
        <Logo width={30} height={30} color={colors.logo} />
        <FooterText color={colors.text}>
          © {new Date().getFullYear()} Ahmed Elhamalawy. All rights reserved
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

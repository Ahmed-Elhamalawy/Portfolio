import React from "react";
import {
  HeroSection,
  TextContainer,
  Name,
  Title,
  Description,
  AvatarImage,
  ContactRow,
  ButtonsContainer,
  ActionButton,
  IconsContainer,
  IconButton,
  ScrollDownContainer,
  ScrollText,
  ScrollArrow,
} from "./styles";
import { useResponsive } from "../../Hooks/UseResponsive";
import Avatar from "../../assets/images/Avatar.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../Hooks/useTheme";

const Home: React.FC = () => {
  const { isPhone } = useResponsive();
  const { colors } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <HeroSection as={motion.div} isPhone={isPhone}>
        <TextContainer
          as={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          isPhone={isPhone}
        >
          <Name isPhone={isPhone} color={colors.text}>
            Ahmed Elhamalawy
          </Name>

          <Title isPhone={isPhone} color={colors.text}>
            FrontEnd Developer
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPhone && (
              <AvatarImage
                color={colors.navBg}
                as={motion.img}
                src={Avatar}
                alt="Ahmed Elhamalawy"
                isPhone={isPhone}
                initial={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
                animate={{
                  borderRadius: [
                    "60% 40% 70% 30% / 50% 60% 40% 50%",
                    "50% 60% 30% 70% / 60% 40% 70% 40%",
                    "70% 30% 60% 40% / 50% 50% 60% 40%",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          <Description isPhone={isPhone} color={colors.text}>
            Hi, I’m Ahmed Elhamalawy, a passionate Frontend and Mobile
            Developer. I build modern, high-performance web and mobile
            applications that turn ideas into seamless digital experiences.
          </Description>

          <ContactRow isPhone={isPhone} color={colors.text}>
            <FontAwesomeIcon color={colors.navIcons} icon={faEnvelope} />
            <span>ahmed.a.hamalawy@gmail.com</span>
          </ContactRow>

          <ButtonsContainer isPhone={isPhone}>
            <div>
              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1_ctUPdsoCEHv-t7Q8vqd3l1M0y3Pqx8j/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <ActionButton colors={colors}>
                  <FontAwesomeIcon
                    style={{ fontSize: 17 }}
                    color={colors.text}
                    icon={faBook}
                  />
                  <span>View CV</span>
                </ActionButton>
              </a>

              {/* Contact */}
              <ActionButton colors={colors}>
                <FontAwesomeIcon
                  style={{ fontSize: 17 }}
                  color={colors.text}
                  icon={faPhone}
                />
                <span>Contact</span>
              </ActionButton>
            </div>

            <IconsContainer>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmed-elhamalawy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton colors={colors}>
                  <FontAwesomeIcon
                    size="lg"
                    color={colors.navIcons}
                    icon={faLinkedinIn}
                  />
                </IconButton>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ahmed-Elhamalawy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton colors={colors}>
                  <FontAwesomeIcon
                    size="lg"
                    color={colors.navIcons}
                    icon={faGithubAlt}
                  />
                </IconButton>
              </a>
            </IconsContainer>
          </ButtonsContainer>
        </TextContainer>

        {!isPhone && (
          <AvatarImage
            color={colors.navBg}
            as={motion.img}
            src={Avatar}
            alt="Ahmed Elhamalawy"
            isPhone={isPhone}
            initial={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
            animate={{
              borderRadius: [
                "60% 40% 70% 30% / 50% 60% 40% 50%",
                "50% 60% 30% 70% / 60% 40% 70% 40%",
                "70% 30% 60% 40% / 50% 50% 60% 40%",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        )}
      </HeroSection>

      <ScrollDownContainer
        isPhone={isPhone}
        onClick={() =>
          window.scrollTo({
            top: isPhone ? 850 : window.scrollY + 900,
            behavior: "smooth",
          })
        }
      >
        <ScrollText color={colors.text}>Scroll down</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FontAwesomeIcon
            color={colors.text}
            style={{ fontSize: 17 }}
            icon={faArrowDown}
          />
        </ScrollArrow>
      </ScrollDownContainer>
    </>
  );
};

export default Home;

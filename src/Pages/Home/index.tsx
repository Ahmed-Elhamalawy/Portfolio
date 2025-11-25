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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../Hooks/useTheme";
import TextType from "../../Components/TextType";
import AnimatedContent from "@/Components/AnimatedContent";
import SplitText from "@/Components/SplitText";
import FadeContent from "@/Components/FadeContent";

const Home: React.FC = () => {
  const { isPhone } = useResponsive();
  const { colors } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <HeroSection isPhone={isPhone}>
        <TextContainer isPhone={isPhone}>
          <Name isPhone={isPhone} color={colors.text}>
            <SplitText
              text="Ahmed Elhamalawy"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: -40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="1px"
              textAlign="center"
            />
          </Name>

          <Title isPhone={isPhone} color={colors.text}>
            <TextType
              text={["FrontEnd Developer"]}
              typingSpeed={100}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
            />
          </Title>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPhone && (
              <AnimatedContent
                distance={0}
                direction="horizontal"
                reverse={false}
                duration={0.5}
                ease="bounce3.out"
                initialOpacity={0}
                animateOpacity={true}
                scale={0.8}
                threshold={0.2}
                delay={0.4}
              >
                <AvatarImage
                  color={colors.navBg}
                  src={Avatar}
                  alt="Ahmed Elhamalawy"
                  isPhone={isPhone}
                  initial={{
                    borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                  }}
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
              </AnimatedContent>
            )}
          </div>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Description isPhone={isPhone} color={colors.text}>
              Hi, I’m Ahmed Elhamalawy, a passionate Frontend and Mobile
              Developer. I build modern, high-performance web and mobile
              applications that turn ideas into seamless digital experiences.
            </Description>
          </FadeContent>

          <FadeContent
            delay={500}
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ContactRow isPhone={isPhone} color={colors.text}>
              <FontAwesomeIcon color={colors.navIcons} icon={faEnvelope} />
              <span>ahmed.a.hamalawy@gmail.com</span>
            </ContactRow>
          </FadeContent>

          <FadeContent
            delay={800}
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
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
          </FadeContent>
        </TextContainer>

        {!isPhone && (
          <AnimatedContent
            distance={0}
            direction="horizontal"
            reverse={false}
            duration={0.5}
            ease="bounce3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={0.8}
            threshold={0.2}
            delay={0.4}
          >
            <AvatarImage
              color={colors.navBg}
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
          </AnimatedContent>
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

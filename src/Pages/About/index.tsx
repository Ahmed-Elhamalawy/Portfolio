// About.tsx
import { faCode, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/Logo";
import { useTheme } from "../../Hooks/useTheme";
import { useResponsive } from "../../Hooks/UseResponsive";
import {
  AboutContainer,
  ContentWrapper,
  LeftSection,
  RightSection,
  TagsContainer,
  Tag,
  TagIcon,
  TagText,
  AboutTitle,
  AboutDescription,
} from "./styles";

const About = () => {
  const { isPhone } = useResponsive();
  const { colors } = useTheme();

  const text = "FRONTEND DEVELOPER • FRONTEND DEVELOPER • ";
  const radius = 85; // Radius for the circular text path
  const fontSize = 11;

  return (
    <AboutContainer colors={colors}>
      <ContentWrapper isPhone={isPhone}>
        {/* Left Section - Circular Logo */}
        <LeftSection isPhone={isPhone}>
          {/* Tags below logo */}
          <TagsContainer isPhone={isPhone}>
            <Tag colors={colors}>
              <TagIcon>
                <FontAwesomeIcon icon={faCode} />
              </TagIcon>
              <TagText colors={colors}>Web Developer</TagText>
            </Tag>
            <Tag colors={colors}>
              <TagIcon>
                <FontAwesomeIcon icon={faMobileScreen} />
              </TagIcon>
              <TagText colors={colors}>Mobile Developer</TagText>
            </Tag>
          </TagsContainer>
        </LeftSection>

        {/* Right Section */}
        <RightSection isPhone={isPhone}>
          {/* About Me Content */}
          <AboutTitle colors={colors}>About Me</AboutTitle>
          <AboutDescription colors={colors} isPhone={isPhone}>
            As a Frontend Developer from Cairo, Egypt, I specialize in building
            scalable, multilingual web and mobile applications using React,
            React Native, and Flutter. With hands-on experience at MSOOL and
            UniTech, I've led the development of complex platforms including
            property management dashboards, cross-platform mobile apps, and
            interactive learning applications.
            <br />
            <br />
            I'm passionate about crafting performant, maintainable code through
            design patterns like Container-Presentational architecture, Higher
            Order Components, and custom hooks. My expertise extends to
            translating Figma designs into responsive, pixel-perfect interfaces,
            implementing efficient data flow with React Query, and ensuring
            seamless user experiences across platforms with RTL/LTR support for
            Arabic and English.
            <br />
            <br />
            My technical toolkit includes JavaScript/TypeScript, React.js, React
            Native, Flutter, Next.js, and Node.js, complemented by modern tools
            like Docker, Redux Toolkit, Tailwind CSS, and Framer Motion. I
            thrive in collaborative environments, working closely with backend
            teams on complex API integrations while maintaining clean,
            structured codebases that prioritize scalability and user
            experience. Driven by continuous learning and a commitment to best
            practices, I'm always exploring new technologies to deliver elegant,
            impactful solutions.
          </AboutDescription>
        </RightSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;

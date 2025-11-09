import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faMobileAlt,
  faCode,
  faCloud,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

import {
  AboutSection,
  SkillsGrid,
  SkillCard,
  SkillName,
  SubTitle,
  TimelineWrapper,
  TimelineItem,
  Dot,
  TimelineContent,
  CompanyName,
  AchievementsList,
  TechStack,
} from "./styles";
import { useResponsive } from "../../Hooks/UseResponsive";

const skills = [
  { name: "HTML", icon: faHtml5, color: "#E34F26" },
  { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "React Native", icon: faMobileAlt, color: "#61DAFB" },
  { name: "Node.js", icon: faNodeJs, color: "#8CC84B" },
  { name: "Express.js", icon: faCogs, color: "#ffffff" },
  { name: "MongoDB", icon: faDatabase, color: "#47A248" },
  { name: "Firebase", icon: faCloud, color: "#FFCA28" },
  { name: "GitHub", icon: faGithub, color: "#fff" },
  { name: "REST APIs", icon: faCode, color: "#00BFFF" },
  { name: "Responsive Design", icon: faMobileAlt, color: "#00E5FF" },
];

const experience = [
  {
    title: "Frontend Developer @ MSOOL",
    company: "MSOOL, Cairo, Egypt",
    date: "Nov. 2024 – Present",
    description:
      "Leading the complete rewrite of a legacy course-provider mobile app similar to Udemy. Refactored API integrations improving response handling and reducing request failures by 45%. Implemented 30+ mobile features including push notifications, deep linking, and persistent authentication.",
    achievements: [
      "Enhanced app performance, UI, and scalability",
      "Reduced load times by 40% using React Query",
      "Built responsive UIs from Figma with 95%+ accuracy",
      "Applied i18next for Arabic/English localization",
    ],
    tech: "React Native, TypeScript, React Query, i18next, REST APIs, Tailwind CSS",
  },
  {
    title: "Frontend Developer @ Curved",
    company: "Curved, Cairo, Egypt",
    date: "May. 2023 – Nov. 2024",
    description:
      "Revamped 20+ UI components boosting performance by 30% across two web applications. Integrated 30+ RESTful APIs to improve real-time data accessibility. Created 10+ custom React hooks and leveraged React Query to minimize redundant fetches by 50%.",
    achievements: [
      "Reduced form submission errors by 40%",
      "Implemented bilingual support with i18next",
      "Translated Figma designs with 95% accuracy",
      "Built structured form workflows with POST APIs",
    ],
    tech: "React, React Native, JavaScript, React Query, Bootstrap, Material UI",
  },
  {
    title: "Civil Engineer",
    company: "Professional Career Start",
    date: "2019 – 2023",
    description:
      "Started my professional career as a civil engineer before transitioning to software development. Gained valuable experience in project management, technical problem-solving, and attention to detail.",
    achievements: [
      "Foundation in engineering principles",
      "Developed strong analytical skills",
      "Experience in project coordination",
    ],
    tech: "Engineering & Technical Design",
  },
];

const About = () => {
  const { isPhone } = useResponsive();

  return (
    <AboutSection>
      <SubTitle>Experience</SubTitle>
      <TimelineWrapper>
        {experience.map((item, idx) => (
          <TimelineItem key={idx}>
            <Dot />
            <TimelineContent>
              <h4>{item.title}</h4>
              <CompanyName>{item.company}</CompanyName>
              <p>{item.description}</p>
              {item.achievements && item.achievements.length > 0 && (
                <AchievementsList>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </AchievementsList>
              )}
              <TechStack>{item.tech}</TechStack>
              <span>{item.date}</span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
      <SubTitle>Skills</SubTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <FontAwesomeIcon icon={skill.icon} size="2x" color={skill.color} />
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </AboutSection>
  );
};

export default About;

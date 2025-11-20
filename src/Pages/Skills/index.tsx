import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SkillsGrid,
  SkillCard,
  SkillName,
  SubTitle,
  SectionWrapper,
} from "./styles";
import { skills } from "./data";
import { useTheme } from "../../Hooks/useTheme";

const Skills = () => {
  const { colors } = useTheme();

  return (
    <SectionWrapper colors={colors}>
      <SubTitle colors={colors}>Skills</SubTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name} colors={colors}>
            <FontAwesomeIcon icon={skill.icon} size="2x" color={skill.color} />
            <SkillName colors={colors}>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SectionWrapper>
  );
};

export default Skills;

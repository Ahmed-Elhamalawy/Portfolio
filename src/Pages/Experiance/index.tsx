import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  TimelineWrapper,
  TimelineItem,
  Dot,
  TimelineContent,
  CompanyName,
  AchievementsList,
  TechStack,
  SubTitle,
  SectionWrapper,
} from "./styles";
import { experience } from "./data";
import { useTheme } from "../../Hooks/useTheme";

const Experience = () => {
  const { colors } = useTheme();

  // Container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // stagger animation between items
      },
    },
  };

  // Item animation: fade-in only, slower
  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2, // slower animation
        ease: [0.42, 0, 0.58, 1], // cubic-bezier for ease-out
      },
    },
  };

  return (
    <SectionWrapper colors={colors}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <SubTitle colors={colors}>Work Experience</SubTitle>
      </motion.div>

      <TimelineWrapper colors={colors}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TimelineItem style={{ marginBottom: "60px" }}>
                {/* increased spacing */}
                <Dot colors={colors} />
                <TimelineContent colors={colors}>
                  <h4>{item.title}</h4>
                  <CompanyName colors={colors}>{item.company}</CompanyName>
                  <p>{item.description}</p>
                  {item.achievements && item.achievements.length > 0 && (
                    <AchievementsList colors={colors}>
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </AchievementsList>
                  )}
                  <TechStack colors={colors}>{item.tech}</TechStack>
                  <span>{item.date}</span>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </motion.div>
      </TimelineWrapper>
    </SectionWrapper>
  );
};

export default Experience;

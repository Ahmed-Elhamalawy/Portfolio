// Projects.tsx
import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../Hooks/useTheme";
import { useResponsive } from "../../Hooks/UseResponsive";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  ProjectsSection,
  ProjectsTitle,
  ProjectsContainer,
  ProjectCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectOverlay,
  ProjectContent,
  ProjectLabel,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ViewProjectButton,
  DateBadge,
  SwiperWrapper,
  TechLabel,
} from "./styles";

// Project data based on your CV
export const projects = [
  {
    id: 1,
    title: "MSOOL Web Dashboard",
    technology: "Web - React.js",
    description:
      "Led full UI implementation for property-management web platform with income/reservation analytics, calendar view, messages, and financial management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    tags: ["React.js", "React Query", "i18next", "Tailwind CSS"],
    link: "https://staging.msool.io/dashboard",
    date: "05/2024 - Present",
  },
  {
    id: 2,
    title: "MSOOL Mobile App",
    technology: "Mobile - React Native",
    description:
      "Led UI development of cross-platform mobile app (iOS/Android/tablets) using React Native CLI. Implemented responsive design with React Query and custom hooks.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    tags: ["React Native", "React Query", "Custom Hooks", "iOS/Android"],
    link: "#",
    date: "05/2024 - Present",
  },
  {
    id: 3,
    title: "Lumofy Education App",
    technology: "Mobile - React Native",
    description:
      "Developed interactive mobile learning platform with video courses, flipping cards, quizzes, reels, and profile editing.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074",
    tags: ["React Native", "Video Streaming", "Interactive UI", "Education"],
    link: "#",
    date: "05/2024 - Present",
  },
  {
    id: 4,
    title: "ThuraGroup Property Finder",
    technology: "Web - React.js",
    description:
      "Enhanced property search web app with advanced filters, navigation, and bilingual support.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073",
    tags: ["React.js", "React Router", "Tailwind CSS", "Swiper"],
    link: "https://www.thuragroup.com/home",
    date: "06/2023 - 05/2024",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    technology: "Web - React.js",
    description:
      "Built modern e-commerce front-end with catalog, cart system, checkout flow, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
    tags: ["React.js", "Vite", "Redux Toolkit", "E-commerce"],
    link: "https://ahmed-elhamalawy.github.io/deploy-Ecommerce-vite/",
    date: "2023",
  },
];

const Projects: React.FC = () => {
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const { colors } = useTheme();
  const { isPhone } = useResponsive();

  const handleProjectClick = (link: string) => {
    if (link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ProjectsSection colors={colors}>
      <ProjectsTitle colors={colors}>Featured Projects</ProjectsTitle>

      <ProjectsContainer>
        <SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSlideChange={(swiper) => {
              setAtStart(swiper.isBeginning);
              setAtEnd(swiper.isEnd);
            }}
            onInit={(swiper) => {
              setAtStart(swiper.isBeginning);
              setAtEnd(swiper.isEnd);
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            slidesPerView={isPhone ? 1 : 2}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  colors={colors}
                  onClick={() => handleProjectClick(project.link)}
                  hasLink={project.link !== "#"}
                >
                  <ProjectImageContainer>
                    <TechLabel colors={colors}>{project.technology}</TechLabel>
                    <ProjectImage src={project.image} alt={project.title} />
                    <DateBadge colors={colors}>{project.date}</DateBadge>
                    <ProjectOverlay colors={colors}>
                      {project.link !== "#" && (
                        <ViewProjectButton colors={colors}>
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                          <span>View Project</span>
                        </ViewProjectButton>
                      )}
                    </ProjectOverlay>
                  </ProjectImageContainer>

                  <ProjectContent>
                    <ProjectLabel colors={colors}>{project.title}</ProjectLabel>
                    <ProjectDescription colors={colors}>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTags>
                      {project.tags.map((tag, i) => (
                        <ProjectTag key={i} colors={colors}>
                          {tag}
                        </ProjectTag>
                      ))}
                    </ProjectTags>
                  </ProjectContent>
                </ProjectCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;

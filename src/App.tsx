import { useRef, useState } from "react";
import { useResponsive } from "./Hooks/UseResponsive";
import PhoneHeader from "./Components/PhoneHeader";
import DesktopHeader from "./Components/DesktopHeader";
import { LayoutContainer, Main } from "./Layout/styles";
import Home from "./Pages/Home";
import Experience from "./Pages/Experiance";
import Skills from "./Pages/Skills";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import { useTheme } from "./Hooks/useTheme";
import { useClickSound } from "./Hooks/useClickSound";
import About from "./Pages/About";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  const { isPhone } = useResponsive();
  const [activeTab, setActiveTab] = useState("Home");
  const { colors } = useTheme();
  const playClick = useClickSound(0.5);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    const sectionRef =
      tab === "Home"
        ? homeRef
        : tab === "About"
        ? aboutRef
        : tab === "Experience"
        ? experienceRef
        : tab === "Skills"
        ? skillsRef
        : tab === "Projects"
        ? projectsRef
        : tab === "Resume"
        ? resumeRef
        : homeRef;

    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LayoutContainer style={{ background: colors.background }}>
      {isPhone ? (
        <PhoneHeader activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      ) : (
        <DesktopHeader
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
        />
      )}

      <Main>
        <div
          ref={homeRef}
          id="home"
          style={{ padding: isPhone ? "20px 0" : "70px 0" }}
        >
          <Home />
        </div>

        <div ref={aboutRef} id="about" style={{ padding: "80px 0" }}>
          <About />
        </div>
        <div ref={skillsRef} id="skills" style={{ padding: "80px 0" }}>
          <Skills />
        </div>
        <div ref={projectsRef} id="projects" style={{ padding: "80px 0" }}>
          <Projects />
        </div>
        <div ref={experienceRef} id="experience" style={{ padding: "80px 0" }}>
          <Experience />
        </div>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default App;

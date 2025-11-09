import React, { useRef, useState } from "react";
import { useResponsive } from "./Hooks/UseResponsive";
import PhoneHeader from "./Components/PhoneHeader";
import DesktopHeader from "./Components/DesktopHeader";
import { LayoutContainer, Main, Footer } from "./Layout/styles";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";

const App: React.FC = () => {
  const { isPhone } = useResponsive();
  const [activeTab, setActiveTab] = useState("Home");
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    const sectionRef =
      tab === "Home"
        ? homeRef
        : tab === "About"
        ? aboutRef
        : tab === "Resume"
        ? resumeRef
        : projectsRef;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LayoutContainer>
      {isPhone ? (
        <PhoneHeader activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      ) : (
        <DesktopHeader
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
        />
      )}

      <Main>
        <div ref={homeRef} id="home" style={{ padding: "60px 0" }}>
          <Home />
        </div>
        <div ref={aboutRef} id="about" style={{ padding: "60px 0" }}>
          <About />
        </div>

        <div ref={projectsRef} id="projects" style={{ padding: "60px 0" }}>
          <Projects />
        </div>
        <div ref={resumeRef} id="resume" style={{ padding: "60px 0" }}>
          <Resume />
        </div>
      </Main>
    </LayoutContainer>
  );
};

export default App;

import { HeaderContainer, LogoSection, Nav, ThemeToggle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHouse,
  faMoon,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Target, Sun } from "lucide-react";
import ProjectsIcon from "../../assets/Pojects";
import Logo from "../../assets/Logo";
import { useTheme } from "../../Hooks/useTheme";
import { useClickSound } from "../../Hooks/useClickSound";
import Tooltip from "@mui/material/Tooltip";

interface DesktopHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { theme, toggleTheme, colors } = useTheme();
  const playClick = useClickSound(0.5); // optional volume

  return (
    <HeaderContainer colors={colors}>
      <LogoSection>
        <Logo width={40} height={40} color={colors.logo} />
      </LogoSection>

      <Nav colors={colors}>
        {/* Home */}
        <Tooltip title="Home" arrow>
          <FontAwesomeIcon
            icon={faHouse}
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </Tooltip>

        {/* About */}
        <Tooltip title="About" arrow>
          <FontAwesomeIcon
            icon={faUser}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("About")}
          />
        </Tooltip>

        {/* Skills */}
        <Tooltip title="Skills" arrow>
          <Target
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Skills")}
          />
        </Tooltip>

        {/* Projects */}
        <Tooltip title="Projects" arrow>
          <span style={{ transform: "translateY(3px)" }}>
            <ProjectsIcon
              width={27}
              height={27}
              onPress={() => setActiveTab("Projects")}
            />
          </span>
        </Tooltip>

        {/* Experience */}
        <Tooltip title="Experience" arrow>
          <FontAwesomeIcon
            icon={faBriefcase}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Experience")}
          />
        </Tooltip>

        {/* Phone icon (optional, does nothing) */}
        <Tooltip title="Contact" arrow>
          <FontAwesomeIcon icon={faPhone} color={colors.navIcons} />
        </Tooltip>
      </Nav>

      <ThemeToggle
        colors={colors}
        onClick={() => {
          toggleTheme();
          playClick();
        }}
      >
        {theme === "light" ? (
          <FontAwesomeIcon
            style={{ fontSize: 25 }}
            color={colors.navIcons}
            icon={faMoon}
          />
        ) : (
          <Sun size={25} color={colors.navIcons} />
        )}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default DesktopHeader;

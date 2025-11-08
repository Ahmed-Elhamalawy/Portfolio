import { Link } from "react-router-dom";
import { HeaderContainer, Brand, Nav, NavLink } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { useState } from "react";

interface DesktopHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Home", "About", "Resume", "Projects"];

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [isLight, setIsLight] = useState(false);
  return (
    <HeaderContainer>
      <Brand>Ahmed</Brand>

      <Nav>
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={`/${tab.toLowerCase()}`}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </NavLink>
        ))}
      </Nav>

      {isLight ? (
        <FontAwesomeIcon icon={faMoon} width={30} height={30} color="white" />
      ) : (
        <FontAwesomeIcon icon={faSun} width={30} height={30} color="white" />
      )}
    </HeaderContainer>
  );
};

export default DesktopHeader;

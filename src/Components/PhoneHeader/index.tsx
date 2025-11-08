import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import {
  HeaderContainer,
  Brand,
  NavMenu,
  NavLink,
  IconGroup,
  Dropdown,
} from "./styles";

interface PhoneHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Home", "About", "Resume", "Projects"];

const PhoneHeader: React.FC<PhoneHeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLight, setIsLight] = useState(false);

  return (
    <HeaderContainer>
      {showMenu && (
        <Dropdown>
          <NavMenu>
            {tabs.map((tab) => (
              <NavLink
                key={tab}
                to={`/${tab.toLowerCase()}`}
                active={activeTab === tab}
                onClick={() => {
                  setActiveTab(tab);
                  setShowMenu(false);
                }}
              >
                {tab}
              </NavLink>
            ))}
          </NavMenu>
        </Dropdown>
      )}

      <Brand>Ahmed</Brand>

      <IconGroup>
        <FontAwesomeIcon
          icon={faBars}
          width={30}
          height={30}
          color="white"
          onClick={() => setShowMenu(!showMenu)}
        />
        {isLight ? (
          <FontAwesomeIcon icon={faMoon} width={30} height={30} color="white" />
        ) : (
          <FontAwesomeIcon icon={faSun} width={30} height={30} color="white" />
        )}
      </IconGroup>
    </HeaderContainer>
  );
};

export default PhoneHeader;

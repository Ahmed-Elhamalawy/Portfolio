import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { HeaderContainer, IconGroup } from "./styles";
import Logo from "../../assets/Logo";
import { useTheme } from "../../Hooks/useTheme";
import { Sun } from "lucide-react";
import { useClickSound } from "../../Hooks/useClickSound";

interface PhoneHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PhoneHeader: React.FC<PhoneHeaderProps> = ({}) => {
  const { toggleTheme, theme, colors } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const playClick = useClickSound(0.5);

  return (
    <HeaderContainer color={colors.navBg}>
      <Logo color={colors.logo} width={30} height={30} />

      <IconGroup>
        <FontAwesomeIcon
          icon={faPhone}
          style={{ fontSize: 23 }}
          color={colors.navIcons}
          onClick={() => setShowMenu(!showMenu)}
        />
        {theme === "light" ? (
          <FontAwesomeIcon
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            icon={faMoon}
            style={{ fontSize: 23 }}
            color={colors.navIcons}
          />
        ) : (
          <Sun
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            width={30}
            height={30}
            color={colors.navIcons}
          />
        )}
      </IconGroup>
    </HeaderContainer>
  );
};

export default PhoneHeader;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useResponsive } from "../Hooks/UseResponsive";
import PhoneHeader from "../Components/PhoneHeader";
import DesktopHeader from "./../Components/DesktopHeader";
import { LayoutContainer, Main, Footer } from "./styles";

const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { isPhone, isTablet, isDesktop } = useResponsive();

  return (
    <LayoutContainer>
      {isPhone ? (
        <PhoneHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <DesktopHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <Main>
        <Outlet />
      </Main>

      <Footer>© 2025 My App</Footer>
    </LayoutContainer>
  );
};

export default MainLayout;

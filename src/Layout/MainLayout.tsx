// src/layout/MainLayout.tsx
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LightIcon from "../assets/LightIcon.svg?react"; // Works as component
import { useResponsive } from "../Hooks/UseResponsive";

const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "About", "Resume", "Projects"];
  const { isPhone, isTablet, isDesktop } = useResponsive();

  return (
    <div
      style={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        padding: "0",
        margin: "0",
        background: "#1A1A1A",
      }}
    >
      <header
        style={{
          paddingInline: 120,
          paddingTop: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ color: "#FFFFFF", fontSize: 32, fontWeight: "bold" }}>
            Ahmed
          </span>
        </div>
        <nav style={{ display: "flex", gap: 50 }}>
          {tabs.map((tab) => (
            <Link
              onClick={() => setActiveTab(tab)}
              style={{
                textDecoration: "none",
                fontSize: 22,
                color: activeTab === tab ? "#4FC3F7" : "#FFFFFF",
              }}
              key={tab}
              to={`/${tab.toLowerCase()}`}
            >
              {tab}
            </Link>
          ))}
        </nav>
        <LightIcon width={30} height={30} />
      </header>

      <main
        style={{
          flex: 1, // Takes remaining space
          padding: "2rem",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          padding: "1rem 2rem",
          textAlign: "center",
        }}
      >
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
};

export default MainLayout;

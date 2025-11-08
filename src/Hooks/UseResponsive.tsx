import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">(
    window.innerWidth < 768
      ? "phone"
      : window.innerWidth < 1024
      ? "tablet"
      : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice("phone");
      else if (width < 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isPhone: device === "phone",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
};

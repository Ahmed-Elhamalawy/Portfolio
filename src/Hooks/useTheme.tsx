// useTheme.ts
import { useThemeStore } from "../store/themeStore";
import { lightColors, darkColors } from "../constants/Colors";

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const colors = theme === "light" ? lightColors : darkColors;

  return { theme, colors, toggleTheme };
};

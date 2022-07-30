import { createContext, useContext } from "react";

export const light_mode_background = "#F5EFED";
export const light_mode_accent = "#178CA4";
export const light_mode_text = "#072A40";
export const light_mode_contrast = "#D96C06";
export const light_mode_secondary_background = "#FAF9F9";

export const dark_mode_background = "#0B3C5D";
export const dark_mode_accent = "#D9B310";
export const dark_mode_text = "#E7DFDD";
export const dark_mode_contrast = "#328CC1";
export const dark_mode_secondary_background = "#1D2731";

export const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

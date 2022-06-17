import { createContext, useContext } from "react";

export const light_mode_background = "#F7F9FB";
export const light_mode_accent = "#CF5C36";
export const light_mode_text = "#303C6C";
export const light_mode_contrast = "#D2FDFF";
export const light_mode_accent_contrast = "#B4DFE5";

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

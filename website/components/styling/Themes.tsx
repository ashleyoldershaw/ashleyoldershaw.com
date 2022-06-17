import { createContext, useContext } from "react";

export const light_mode_background = "#EDC7B7";
export const light_mode_accent = "#AC3B61";
export const light_mode_text = "#123C69";
export const light_mode_contrast = "#BAB2B5";
export const light_mode_secondary_background = "#EEE2DC";

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

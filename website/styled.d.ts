import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    secondary_background: string;
    accent: string;
    contrast: string;
    text: string;
    full: string;
    type: string;
  }
}

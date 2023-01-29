import { birdle } from "./birdle";
import { blog_home } from "./blog_home";
import { blog_meta } from "./blog_meta";
import { career_page } from "./career_page";
import { error_404 } from "./error_404";
import { error_500 } from "./error_500";
import { home_page } from "./home_page";
import { nav_bar } from "./nav_bar";
import { skills } from "./skills";
import { themes } from "./theme";
import { blog } from "./types/blog_post";
import { colour_theme } from "./types/colour_theme";
import { expandable_text } from "./types/expandable_text";

export const schemaTypes = [
  home_page,
  career_page,
  expandable_text,
  nav_bar,
  themes,
  colour_theme,
  error_404,
  error_500,
  skills,
  birdle,
  blog,
  blog_home,
  blog_meta,
];

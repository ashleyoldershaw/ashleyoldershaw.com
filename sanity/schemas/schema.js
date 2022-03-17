import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import { career_page } from "./career_page";
import { error_404 } from "./error_404";
import { error_500 } from "./error_500";
import { home_page } from "./home_page";
import { nav_bar } from "./nav_bar";
import { skills } from "./skills";
import { expandable_text } from "./types/expandable_text";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    home_page,
    career_page,
    expandable_text,
    nav_bar,
    error_404,
    error_500,
    skills,
  ]),
});

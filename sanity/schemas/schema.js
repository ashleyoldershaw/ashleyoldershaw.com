import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import { career_page } from "./career_page";

import { home_page } from "./home_page";
import { expandable_text } from "./types/expandable_text";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([home_page, career_page, expandable_text]),
});

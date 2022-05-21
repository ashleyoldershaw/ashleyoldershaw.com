const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

export const sanity = sanityClient({
  projectId: "ophqtfel",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source) => {
  return builder.image(source);
};

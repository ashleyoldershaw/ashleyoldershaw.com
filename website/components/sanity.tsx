import sanityClient, { SanityImageAssetDocument } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

export const sanity = sanityClient({
  projectId: "ophqtfel",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export const useGetImageProps = (image: SanityImageAssetDocument) =>
  useNextSanityImage(sanity, image);

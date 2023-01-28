module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "imgix",
    path: "",
  },
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  compiler: { styledComponents: true },
};

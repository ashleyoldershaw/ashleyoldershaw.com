module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "imgix",
    path: "",
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  compiler: { styledComponents: true },
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  compiler: { styledComponents: true },
};

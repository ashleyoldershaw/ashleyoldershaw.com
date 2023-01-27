module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "imgix",
    path: "",
  },
  experimental: {
    runtime: "experimental-edge",
  },
  compiler: { styledComponents: true },
};

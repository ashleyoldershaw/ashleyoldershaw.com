module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "imgix",
    path: "",
  },
  compiler: { styledComponents: true },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

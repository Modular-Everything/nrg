module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/homepage",
      },
    ];
  },
};

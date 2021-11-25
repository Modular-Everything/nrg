module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  generateBuildId: () => "build",

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/homepage",
      },
    ];
  },
};

// To set up a madewithnrg.com/studio path:
// https://www.sanity.io/guides/sanity-nextjs-tailwindcss#5f3dfa6b9d2c

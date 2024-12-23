/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// Importing the env.js file

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all hostnames
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cyberwarp",
        destination: "/allEvents/671cda7637ad0e86d7370c83",
      },
      {
        source: "/empresario",
        destination: "/allEvents/671cda9137ad0e86d7370c84",
      },
      {
        source: "/robotron",
        destination: "/allEvents/671a3687a32ca06a3a1b07ca",
      },
      {
        source: "/myndsnare",
        destination: "/allEvents/671cdadb37ad0e86d7370c86",
      },

      {
        source: "/asme",
        destination: "/allEvents/671cdaf137ad0e86d7370c87",
      },

      {
        source: "/ecs",
        destination: "/allEvents/672606f555a414cbd04a4d74",
      },
      {
        source: "/iei",
        destination: "/allEvents/6726086f55a414cbd04a4d77",
      },
      {
        source: "/vwarz",
        destination: "/allEvents/671cdab637ad0e86d7370c85",
      },
      {
        source: "/bytewatt",
        destination: "/allEvents/6726611055a414cbd04a4d85",
      },
      {
        source: "/smartcity",
        destination: "/allEvents/671cd8e137ad0e86d7370c82",
      },
      {
        source: "/circuitry-nexus",
        destination: "/allEvents/672610f955a414cbd04a4d82",
      },
      {
        source: "/amazers",
        destination: "/allEvents/6729f5b68992b16a7b9d887c",
      },
      {
        source: "/foto-galleria",
        destination: "/allEvents/6729da0c55a414cbd04a4e3e",
      },
    ];
  },
};

export default config;

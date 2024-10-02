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
};

export default config;

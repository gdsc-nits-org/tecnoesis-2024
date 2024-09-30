/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// Importing the env.js file

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
<<<<<<< HEAD
    images:{
        domains: ['res.cloudinary.com']
    },
    transpilePackages: ['three'],
=======
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
>>>>>>> a8dfbfc5713ba90414a949fac772c90e431783fd
};


export default config;

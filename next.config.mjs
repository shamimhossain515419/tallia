/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://getmicrojobs.com",
    GROUP_ID: "2",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.maisonlabiche.com",
      },
      {
        protocol: "https",
        hostname: "cdn-images.farfetch-contents.com",
      },

      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "getmicrojobs.com",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
};

export default nextConfig;

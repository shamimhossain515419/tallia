/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://getmicrojobs.com",
    GROUP_ID: "3",
  },
  images: {
    domains: [
      "www.maisonlabiche.com",
      "cdn.shopify.com",
      "cdn-images.farfetch-contents.com",
    ],
  },
};

export default nextConfig;

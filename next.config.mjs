/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpapers.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.carnetdebord.info",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

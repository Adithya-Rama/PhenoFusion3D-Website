/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    output: "export",
    basePath: basePath || undefined,
    assetPrefix: basePath ? `${basePath}/` : undefined,
    trailingSlash: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
})();

module.exports = nextConfig;


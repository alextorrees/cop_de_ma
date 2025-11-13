const repoName = "cop_de_ma"; // <-- pon EXACTAMENTE tu nombre de repo en GitHub

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;

const repoName = "cop_de_ma"; // <-- pon EXACTAMENTE tu nombre de repo en GitHub

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,        // 👈 IMPORTANTE PARA GITHUB PAGES
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;

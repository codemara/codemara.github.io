/** @type {import('next').NextConfig} */

const repo = 'change-me-to-your-repo'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {

    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: "@svgr/webpack",
        });
        return config;
    },
  assetPrefix: assetPrefix,
  basePath: basePath,

}

module.exports = nextConfig

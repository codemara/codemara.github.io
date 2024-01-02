/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
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
   images: {
    loader: 'imgix',
    path: '/public',
  },

}

module.exports = nextConfig

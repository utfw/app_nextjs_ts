/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = 'nextjs_ts_test' 
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : '',
  basePath: '/app_nextjs_ts', 
  trailingSlash: true,
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = 'nextjs_ts_test' // github이름이 들어가야함.
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : '',
  basePath: '/app_nextjs_ts', 
  trailingSlash: true,
}

module.exports = nextConfig
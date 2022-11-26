/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {PASSWORD_SECRET: process.env.PASSWORD_SECRET, JWT_SECRET: process.env.JWT_SECRET,}
}

module.exports = nextConfig

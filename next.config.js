const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.istockphoto.com", "images.ctfassets.net"]
  }
};

module.exports = withVanillaExtract(nextConfig);

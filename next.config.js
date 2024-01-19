/*
 * @Author: hidari123
 * @Date: 2024-01-18 10:35:57
 * @LastEditors: hidari123
 * @LastEditTime: 2024-01-19 16:31:20
 * Copyright (c) 2024 by hidari, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nextConfig = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

module.exports = nextConfig;

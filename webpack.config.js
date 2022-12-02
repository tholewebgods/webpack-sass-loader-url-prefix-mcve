const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = function(app, client) {
	const target = `./target/`;

	return {
		mode: "development",
		entry: "./src/js/main.js",
		output: {
			filename: "built.js",
			path: path.resolve(__dirname, target),
			publicPath: "/"
		},
		resolve: {
			alias: {
				assets: path.resolve(__dirname, 'src/assets'),
			},
		},
		module: {
			rules: [
				{
					test: /\.svg$/,
					type: "asset/source",
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								// Prevent "module has no exports"
								esModule: false,
							},
						},
						{
							loader: "css-loader",
							options: {
								// Enable @import at-rules handling
								import: true,
							},
						},
						{
							loader: "sass-loader",
							options: {
								sassOptions: {
									includePaths: [
										`src/style-modules`,
									].map((frag) => path.resolve(frag)),
								},
							},
						},
					],
				},
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				// Folder prefix added to make the eror more obvious
				filename: "css/built.[contenthash].css",
			}),
		]
	};
};

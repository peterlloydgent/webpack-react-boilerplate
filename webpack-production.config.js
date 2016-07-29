const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
	entry: [
		path.join(__dirname, '/src/app/main.js')
	],
	output: {
		path: buildPath, // Path of output file
		filename: 'app.js' // Name of output file
	},
	devtool: 'source-map',
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			Backbone: 'backbone',
			_: 'underscore',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		// Transfer Files
		new TransferWebpackPlugin([
			{
				from: 'www'
			}
		],
		path.resolve(__dirname, 'src'))
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: [nodeModulesPath]
			}
		]
	}
};

module.exports = config;
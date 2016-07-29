const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack/hot/only-dev-server',
		path.join(__dirname, '/src/app/main.js'),
	],
	devServer: {
		contentBase: 'src/www',
		devtool: 'eval',
		hot: true,
		inline: true,
		port: 3000,
		host: 'localhost'
	},
	devtool: 'eval',
	output: {
		path: buildPath,
		filename: 'app.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			Backbone: 'backbone',
			_: 'underscore',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new webpack.HotModuleReplacementPlugin(),
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
				test: /\.js$/, // All .js files
				include: path.join(__dirname, 'src/app'),
				loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
				exclude: [nodeModulesPath]
			}
		]
	}
};

module.exports = config;
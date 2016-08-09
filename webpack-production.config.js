const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const autoprefixer = require('autoprefixer');

const config = {
	entry: [
		path.join(__dirname, '/src/app/main.jsx')
	],
	output: {
		path: buildPath,
		filename: 'app.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			jquery: 'jquery',
			_: 'underscore',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new ExtractTextWebpackPlugin('main.css', {
			allChunks: true
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
				test: /\.js[x]?$/,
				loaders: ['babel-loader'], 
				exclude: [nodeModulesPath]
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextWebpackPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.woff$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
			},
			{
				test: /\.woff2$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
			},
			{
				test: /\.(eot|ttf|svg|gif|png)$/,
				loader: "file-loader"
			}
		]
	}
};

module.exports = config;

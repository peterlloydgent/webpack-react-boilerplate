const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const autoprefixer = require('autoprefixer');

const config = {
	entry: [
		path.join(__dirname, '/src/app/main.js')
	],
	output: {
		path: buildPath, // Path of output file
		filename: 'app.js' // Name of output file
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	postcss: function() {
		return [autoprefixer({
			browsers: ['last 3 versions']
		})];
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			jquery: 'jquery',
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
				loaders: ['style', 'css', 'postcss', 'sass']
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'less']
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
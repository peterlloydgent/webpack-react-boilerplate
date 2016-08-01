const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const autoprefixer = require('autoprefixer');

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
		host: 'localhost',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		historyApiFallback: true
	},
	devtool: 'eval',
	output: {
		path: buildPath,
		filename: 'app.js'
	},
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
				test: /\.js[x]?$/,
				include: path.join(__dirname, 'src/app'),
				loaders: ['react-hot', 'babel-loader'], 
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
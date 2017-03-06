var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: {
		main: './src/index.js',
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash:5].js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}, {
			test: /\.js$/,
			use: 'babel-loader'
		}]
	},
	plugins: [
		new ExtractTextPlugin('[name].[contenthash:5].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			async: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			inject: true,
			hash: true,
			minify: {
			            removeComments: true,
			            collapseWhitespace: true,
			            preserveLineBreaks: true,
			            collapseInlineTagWhitespace: true,
			            collapseBooleanAttributes: true,
			            removeRedundantAttributes: true,
			            useShortDoctype: true,
			            caseSensitive: true,
			            minifyJS: true,
			            minifyCSS: true,
			            quoteCharactre: '"'
			}
		})
	]
}

module.exports = config;
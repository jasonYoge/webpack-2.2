var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: {
		main: './src/index.jsx',
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
			test: /\.(js|jsx)$/,
			use: [{
				loader: 'jsx-loader'
			}, {
				loader: 'babel-loader',
				options: {
					presets: [[ 'es2015', { modules: false }], 'react', 'stage-3'],
					plugins: ['syntax-dynamic-import']
				}
			}]
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
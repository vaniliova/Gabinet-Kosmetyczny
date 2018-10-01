var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//process.traceDeprecation = true;

var publicPath = '/';
if(process.env.NODE_ENV == 'production'){
    var publicPath = './';
}
var hbsPartials = [path.resolve(__dirname, "src/partials/*.hbs")];
function createHbsPluginEntry(pageName) {
    return new HtmlWebpackPlugin({
      template: path.join(process.cwd(), "src", pageName + ".hbs.html"),
      filename: pageName + '.html',
      chunks:[pageName, 'vendors', 'main']
    })
}

devServerOptions = {host: 'localhost', port: 8080, contentBase: 'dist/', inline:true};

plugins = [];
plugins.push(new CopyWebpackPlugin([{ from: 'src/img', to : 'img/'}]));
plugins.push(new ExtractTextPlugin('[name].css'));
plugins.push(new CleanWebpackPlugin(['dist']));
plugins.push(new webpack.ProvidePlugin({
  $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery',
  'window.Tether': 'tether',
  Popper: 'popper.js',
  // In case you imported plugins individually, you must also require them here:
  Util: "exports-loader?Util!bootstrap/js/dist/util",
  Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
  Collapse: "exports-loader?Dropdown!bootstrap/js/dist/collapse",
  Tab:"exports-loader?Dropdown!bootstrap/js/dist/tab",
}))
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new webpack.optimize.CommonsChunkPlugin({name: 'vendors',  minChunks: Infinity,}));
plugins.push(new BrowserSyncPlugin({
            host: devServerOptions.host,
            port: devServerOptions.port+1,
            proxy: `http://localhost:${devServerOptions.port}/`,
            files: ['']
            }, {reload: true}
        ));


['index',].forEach(page => plugins.push(createHbsPluginEntry(page)));

module.exports = {
    entry: {
        'main' : [path.resolve(__dirname, 'src/script/script.js'),
                  path.resolve(__dirname, 'src/style/main.scss')],
        'vendors' : ['jquery', 'lightslider', 'lightslider/dist/css/lightslider.css'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath : publicPath
    },

    plugins: plugins,
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', options: {presets: ['env']} },
            { test: /\.(png|jpg|gif)$/, use:{'loader': 'file-loader', options: {name: 'img/[hash].[ext]'}}},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','postcss-loader','sass-loader']})},
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','postcss-loader']})},
            { test: /\.(woff2?|svg)$/, use: {loader: 'url-loader', options: {limit:10000, name: 'fonts/[hash].[ext]' }}},
            { test: /\.(ttf|eot)$/, use: {loader: 'file-loader', options:{name:'fonts/[hash].[ext]'}}},
            { test: /\.hbs.html$/, use: {loader: 'handlebars-loader', options:{'helperDirs:': __dirname + '/src/hbs-helpers'}}}
        ]
    },
    devServer: devServerOptions
}

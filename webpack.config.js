const path = require('path');

module.exports = {
    // sempre usar path pois se eu escrevesse uma string com barra normal,
    // um SO que usa barra invertida poderia não entender
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                // como converter arquivos JS, usando babel
                // regex que procura arquivos que terminam em .js
                test: /\.js$/,
                // regex que procura um arquivo dentro dessa pasta, pois não é necessário
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
                // toda vez que precisar de um arquivo JS e não estiver em node_modules, converter ele com babel-loader
            }
        ]
    }
}
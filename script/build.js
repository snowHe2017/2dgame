const webpack = require("webpack")
const config = require('../config/webpack.config')
const { resolve } = require("../config/webpack.config")

const compiler = webpack(config)

return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
        if(stats.hasErrors()) {
            throw Error(err)
        }
    })
})
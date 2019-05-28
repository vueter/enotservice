module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Enot Service',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    assetsDir: 'static'
}
module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            './public/test/*.js'
        ]
    });
};
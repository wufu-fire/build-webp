function MyPlugin(options) {
    // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {

    // console.log("compiler.plugin", compiler.plugin)
    compiler.plugin("compile", function(params) {
        // console.log("The compiler is starting to compile...");
    });

    compiler.plugin("compilation", function(compilation) {
        // console.log("compilation", compilation)
        // console.log("The compiler is starting a new compilation...");

        compilation.plugin("optimize", function() {
            // console.log("The compilation is starting to optimize files...");
        });
    });

    compiler.plugin("emit", function(compilation, callback) {
        console.log("fff", compilation.cache)
            // console.log("The compilation is going to emit files...");
        callback();
    });
};

module.exports = MyPlugin;
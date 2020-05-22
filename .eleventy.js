module.exports = config => {

    config.addPassthroughCopy({
        "node_modules/wysiwyg.css/wysiwyg.css": "assets/wysiwyg.css",
    })


    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "dist",
        }
    }
}
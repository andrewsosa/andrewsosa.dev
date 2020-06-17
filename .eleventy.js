module.exports = config => {
  config.addPassthroughCopy("static");
  config.addPassthroughCopy("src/assets/");
  config.addPassthroughCopy({ "src/favicon/**": "./" });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

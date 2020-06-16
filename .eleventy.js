module.exports = config => {
  config.addPassthroughCopy("static");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

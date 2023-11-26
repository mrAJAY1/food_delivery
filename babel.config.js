module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    // adding jsx support
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

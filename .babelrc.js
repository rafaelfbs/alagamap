function isBabelRegister(caller) {
  return !!(caller && caller.name === "@babel/register");
}

module.exports = api => {
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
  ];

  const presetEnv = ["@babel/preset-env"];
  const isRegister = api.caller(isBabelRegister);

  if (api.env("development")) {
    plugins.unshift("react-hot-loader/babel");
  }

  if (!isRegister) {
    presetEnv.push({
      modules: false,
      useBuiltIns: "usage",
      corejs: 3
    });
  }

  return {
    presets: [presetEnv, "@babel/preset-react", "@babel/preset-typescript"],
    plugins,
  };
};

const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@styles": "src/styles",
    "@assets": "src/assets",
    "@pages": "src/pages",
    "@components": "src/components",
  })(config);

  return config;
};

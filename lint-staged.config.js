module.exports = {
  "*.{js,ts}": [
    "eslint --config eslint.config.js --ext .js,.ts --cache --fix",
    "prettier --write",
  ],
  "*.{json,md,html,css,scss}": "prettier --write",
};
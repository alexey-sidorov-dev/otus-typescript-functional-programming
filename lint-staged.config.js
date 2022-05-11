module.exports = {
  "*.{js,ts}": [
    "eslint --config eslint.config.js --ext .js,.ts --cache --fix",
    "prettier --write",
  ],
  "*.ts": [
    `eslint --config eslint.config.js --fix --plugin tsc --rule 'tsc/config: [2, {configFile: "tsconfig.json"}]'`,
  ],
  "*.{json,md,yml,html,css,scss}": "prettier --write",
};

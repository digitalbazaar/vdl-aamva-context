module.exports = {
  root: true,
  extends: [
    'eslint-config-digitalbazaar'
  ],
  env: {
    node: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/module'
  ],
  rules: {
    'unicorn/prefer-node-protocol': 'error'
  },
  ignorePatterns: ['dist/']
};

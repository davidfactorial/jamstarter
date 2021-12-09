module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {}
}

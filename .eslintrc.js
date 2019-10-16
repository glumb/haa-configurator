module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // "plugin:es-beautifier/standard",
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-var': 1,
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'no-multiple-empty-lines': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
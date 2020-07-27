module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
  }
}

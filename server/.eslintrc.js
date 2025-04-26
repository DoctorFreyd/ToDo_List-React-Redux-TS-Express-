module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Use the TypeScript parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Always keep Prettier last
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // You can add custom rules here if you want
    '@typescript-eslint/no-unused-vars': ['warn'], // Warn instead of error
    'no-console': 'off', // Allow console.log (or set to 'warn' if you want)
  },
};

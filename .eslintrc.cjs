module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "arrow-body-style": ["error", "always"],
      "spaced-comment": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": [
        "error",
        {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "never",
          "exports": "never",
          "functions": "never"
        }
      ],
      "comma-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "jsx-quotes": ["error", "prefer-single"],
      "key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon": true
        }
      ],
      "keyword-spacing": [
        "error",
        {
          "before": true,
          "after": true
        }
      ],
      "line-comment-position": [
        "error",
        {
          "position": "above"
        }
      ],
      "space-in-parens": ["error", "never"],
      "default-case": "error",
      "default-case-last": "error",
      "eqeqeq": "error",
      "block-scoped-var": "error",
      "no-else-return": "error",
      "no-empty": "error",
      "no-inline-comments": "error",
      "no-invalid-this": "error",
      "no-lone-blocks": "error",
      "no-undef-init": "error",
      "no-useless-catch": 2,
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "require-await": "error",
      "arrow-spacing": "error",
      "brace-style": "error",
      "no-whitespace-before-property": "error",
      "switch-colon-spacing": "error",
      "no-case-declarations": "off",
    },
}

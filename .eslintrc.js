module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/destructuring-assignment": "off",
    "react/no-array-index-key": "off",
    "padded-blocks": "off",
    "no-param-reassign": "off",
    "no-trailing-spaces": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/state-in-constructor": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/no-unused-prop-types": "off",
    "react/sort-comp": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/no-unescaped-entities": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/ban-types": "off",
    "no-restricted-syntax": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unstable-nested-components": "off",
    "react/jsx-props-no-spreading": "off",
    "func-names": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "arrow-spacing": "off",
    "keyword-spacing": "off",
    "array-callback-return": "off",
    "import/no-extraneous-dependencies": "off",
    quotes: "off",
    "comma-dangle": "off",
    "global-require": "off",
    "no-console": "off",
    "import/order": "off",
    "max-len": "off",
    "no-empty": "off",
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "no-use-before-define": "off",
    "import/extensions": "off",
    camelcase: "off",
    "react/prop-types": 0,
    "no-shadow": "off",
  },
};

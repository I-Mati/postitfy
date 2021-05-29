module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "import/extensions": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": 1,
    "react/prop-types": 0,
  },
};

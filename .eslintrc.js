module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    кавычки: ["ошибка", "одиночная"],
    semi: ["ошибка", "всегда"],
    отступ: ["ошибка", 2],
    "no-multi-spaces": ["error"],
  },
};

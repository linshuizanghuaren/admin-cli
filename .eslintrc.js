module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "@vue/standard"],
  plugins: ["vue"],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-undef": "off",
    camelcase: "off",
    "eol-last": 0,
    indent: ["error", 2],
    "space-before-function-paren": 0,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
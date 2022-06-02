/**
 * @author
 * @description .eslintrc.js
 * @description 让所有可能会与 prettier 规则存在冲突的 eslint rule，失效，并使用 prettier 的规则进行代码检查。
 * @description 相当于，用 prettier 的规则，覆盖掉 eslint:recommended 的部分规则。
 * @description 后面 prettier 格式化，也会根据这个规则来。因此，不会再有冲突。
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}

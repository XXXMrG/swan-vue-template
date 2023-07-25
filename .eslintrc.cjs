/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        '@ecomfe/eslint-config/strict',
        '@ecomfe/eslint-config/typescript/strict',
        '@ecomfe/eslint-config/vue',
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
};

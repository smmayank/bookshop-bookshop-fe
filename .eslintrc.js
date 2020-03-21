module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
    },
};

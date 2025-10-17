import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import eslintPrettierConfigRecommended from 'eslint-plugin-prettier/recommended'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    eslintPrettierConfigRecommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            'prettier/prettier': 'error',
            // 'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
]

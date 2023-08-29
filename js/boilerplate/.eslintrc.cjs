module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:import/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-empty': 'warn',
        'no-empty-function': 'off',
        'no-empty-pattern': 'warn',
        'no-extra-parens': 'off', // use @typescript-eslint/no-extra-parens
        'no-extra-semi': 'off', // use @typescript-eslint/no-extra-semi
        'no-irregular-whitespace': [
            'warn',
            {
                skipStrings: false,
            },
        ],
        'no-trailing-spaces': 'warn',
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
                ignorePattern: '\\/(\\/|\\*)\\seslint-',
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
            },
        ],
        'no-plusplus': 'off',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                functions: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    ['sibling', 'index'],
                    'object',
                    'type',
                    'unknown',
                ],
                pathGroups: [],
                pathGroupsExcludedImportTypes: [],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/export': 'off',
        'import/namespace': 'off',
        'import/no-unresolved': 'error',
    },
    settings: {
        version: 'detect',
        react: {
            fragment: 'Fragment',
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx'],
        'import/parsers': {
            '@tjavacript-eslint/parser': ['.js', '.jsx'],
        },
        'import/resolver': {
            node: {},
        },
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {},
        },
    ],
};

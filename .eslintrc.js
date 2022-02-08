module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['next', 'plugin:@next/next/recommended', 'next/core-web-vitals', 'prettier'],
	plugins: ['prettier', '@typescript-eslint', 'testing-library'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
		'react/no-children-prop': 'off',
		'no-mixed-operators': ['error', { allowSamePrecedence: false }],
	},
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
			rules: {
				'jest/no-commented-out-tests': 'off',
			},
		},
	],
};

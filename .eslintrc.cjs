module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'eslint-config-prettier'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': 'error',
		'@typescript-eslint/no-explicit-any': ['off']
	}
}

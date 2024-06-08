'use strict';

// "xo": {
// 	"rules": {
// 		"no-cond-assign": 0,
// 		"new-cap": 0,
// 		"unicorn/prefer-module": 0,
// 		"no-mixed-operators": 0,
// 		"complexity": 0,
// 		"unicorn/numeric-separators-style": 0
// 	}
// },

module.exports = {
	// Repeated here from eslint-config-xo in case some plugins set something different
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// -- End repeat
	plugins: [
		'no-use-extend-native',
		'ava',
		'unicorn',
		// Disabled as the plugin doesn't support ESLint 8 yet.
		// 'promise',
		'import',
		// 'n', // eslint-plugin-node's successor
		'eslint-comments',
	],
	extends: [
		'plugin:ava/recommended',
		'plugin:unicorn/recommended',
	],
	settings: {
		'import/core-modules': [
			'electron',
			'atom',
		],
	},
	rules: {
		'no-use-extend-native/no-use-extend-native': 0,
		'no-var': 0,
		'no-useless-escape': 0,
		'no-cond-assign': 0,
		"new-cap": 0,
		"unicorn/prefer-module": 0,
		"no-mixed-operators": 0,
		"complexity": 0,
		"unicorn/numeric-separators-style": 0,
		'comma-dangle': 0,
		'unicorn/no-array-for-each': 0,
		'unicorn/explicit-length-check': 0,
		'quotes': 0,
		'quote-props': 0,
		'unicorn/prefer-number-properties': 0,
		'arrow-body-style': 0,
		'unicorn/prefer-string-slice': 0,
		'unicorn/prefer-math-trunc': 0,
		'unicorn/prefer-string-slice': 0,
		'unicorn/no-zero-fractions': 0,
		'no-dupe-keys': 0,
		'no-var': 0,
		'prefer-destructuring': 0,
		'no-multi-assign': 0,
		'object-shorthand': 0,
		'padding-line-between-statements': 0,
		'radix': 0,
		'capitalized-comments': 0,
		'prefer-rest-params': 0,
		'unicorn/prefer-array-flat': 0,
		'unicorn/better-regex': 0,
		'unicorn/prefer-ternary': 0,
		'default-case-last': 0,
		'default-case': 0,
		'operator-linebreak': 0,
		'unicorn/prefer-switch': 0,
		'prefer-exponentiation-operator': 0,
		'unicorn/prevent-abbreviations': 0,
		'no-warning-comments': 0,
		'import/default': 0,
		'import/export': 0,
		'import/extensions': 0,
		'import/named': 0,
		// '': 0,

		// TODO: Remove this override at some point.
		// It's just here to ease users into readable variable names.
		// 'unicorn/prevent-abbreviations': [
		// 	'warn',
		// 	{
		// 		checkFilenames: false,
		// 		checkDefaultAndNamespaceImports: false,
		// 		checkShorthandImports: false,
		// 		extendDefaultReplacements: true,
		// 		replacements: {
		// 			// https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
		// 			whitelist: {
		// 				include: true,
		// 			},
		// 			blacklist: {
		// 				exclude: true,
		// 			},
		// 			master: {
		// 				main: true,
		// 			},
		// 			slave: {
		// 				secondary: true,
		// 			},

		// 			// Reverse.
		// 			application: {
		// 				app: true,
		// 			},
		// 			applications: {
		// 				apps: true,
		// 			},

		// 			// Disable some that may be too annoying.
		// 			env: false,
		// 			i: false, // Do it at some point, but not ready for it yet. Maybe 2025.

		// 			// Not part of `eslint-plugin-unicorn`. Upstream them at some point.
		// 			bin: {
		// 				binary: true,
		// 			},
		// 			eof: {
		// 				endOfFile: true,
		// 			},
		// 			impl: {
		// 				implement: true,
		// 				implementation: true,
		// 			},
		// 			anim: {
		// 				animation: true,
		// 			},
		// 			calc: {
		// 				calculate: true,
		// 			},
		// 			dict: {
		// 				dictionary: true,
		// 			},
		// 			dup: {
		// 				duplicate: true,
		// 			},
		// 			enc: {
		// 				encode: true,
		// 				encryption: true,
		// 			},
		// 			gen: {
		// 				generate: true,
		// 				general: true,
		// 			},
		// 			gfx: {
		// 				graphics: true,
		// 			},
		// 			inc: {
		// 				increment: true,
		// 			},
		// 			iter: {
		// 				iterate: true,
		// 				iterator: true,
		// 			},
		// 			nav: {
		// 				navigate: true,
		// 				navigation: true,
		// 			},
		// 			norm: {
		// 				normalize: true,
		// 			},
		// 			notif: {
		// 				notification: true,
		// 			},
		// 			perf: {
		// 				performance: true,
		// 			},
		// 			proc: {
		// 				process: true,
		// 			},
		// 			rand: {
		// 				random: true,
		// 			},
		// 			sys: {
		// 				system: true,
		// 			},
		// 			temp: {
		// 				temporary: true,
		// 			},
		// 		},
		// 	},
		// ],

		// TODO: Restore when it becomes safer: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/681
		// 'unicorn/string-content': [
		// 	'warn',
		// 	{
		// 		patterns: {
		// 			'': '’',
		// 			[/\.\.\./.source]: '…',
		// 			'->': '→',
		// 			[/^http:\/\//.source]: 'http://'
		// 		}
		// 	}
		// ],

		// The character class sorting is a bit buggy at the moment.
		// 'unicorn/better-regex': [
		// 	'warn',
		// 	{
		// 		sortCharacterClasses: false,
		// 	},
		// ],

		// Temporarily disabled because of https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2218
		'unicorn/no-empty-file': 'off',

		// TODO: Disabled for now as I don't have time to deal with the backslash that might come from this. Try to enable this rule in 2025.
		'unicorn/no-null': 'off',

		// We only enforce it for single-line statements to not be too opinionated.
		// 'unicorn/prefer-ternary': [
		// 	'warn',
		// 	'only-single-line',
		// ],

		// It will be disabled in the next version of eslint-plugin-unicorn.
		'unicorn/prefer-json-parse-buffer': 'off',

		// TODO: Remove this override when the rule is more stable.
		'unicorn/consistent-function-scoping': 'off',

		// TODO: Temporarily disabled until it becomes more mature.
		'unicorn/no-useless-undefined': 'off',

		// TODO: Temporarily disabled as the rule is buggy.
		'function-call-argument-newline': 'off',

		// Disabled as the plugin doesn't support ESLint 8 yet.
		// 'promise/param-names': 'warn',
		// 'promise/no-return-wrap': [
		// 	'warn',
		// 	{
		// 		allowReject: true,
		// 	},
		// ],
		// 'promise/no-new-statics': 'warn',
		// 'promise/no-return-in-finally': 'warn',
		// 'promise/valid-params': 'warn',
		// 'promise/prefer-await-to-then': 'warn',

		// 'import/default': 'warn',
		// 'import/export': 'warn',
		// 'import/extensions': [
		// 	'warn',
		// 	'always',
		// 	{
		// 		ignorePackages: true,
		// 	},
		// ],
		// 'import/first': 'warn',

		// // Enabled, but disabled on TypeScript (https://github.com/xojs/xo/issues/576)
		// 'import/named': 'warn',

		'import/namespace': [
			'warn',
			{
				allowComputed: true,
			},
		],
		'import/no-absolute-path': 'warn',
		'import/no-anonymous-default-export': 'warn',
		'import/no-named-default': 'warn',
		'import/no-webpack-loader-syntax': 'warn',
		'import/no-self-import': 'warn',
		'import/no-cycle': [
			'warn',
			{
				ignoreExternal: true,
			},
		],
		'import/no-useless-path-segments': 'warn',
		'import/newline-after-import': [
			'warn',
			{
				// TODO: Buggy.
				// considerComments: true,
			},
		],
		'import/no-amd': 'warn',
		'import/no-duplicates': [
			'warn',
			{
				'prefer-inline': true,
			},
		],

		// We use `unicorn/prefer-module` instead.
		// 'import/no-commonjs': 'warn',

		// Looks useful, but too unstable at the moment
		// 'import/no-deprecated': 'warn',

		'import/no-empty-named-blocks': 'warn',
		'import/no-extraneous-dependencies': [
			'warn',
			{
				includeTypes: true,
			},
		],
		'import/no-mutable-exports': 'warn',
		'import/no-named-as-default-member': 'warn',
		'import/no-named-as-default': 'warn',

		// Disabled because it's buggy and it also doesn't work with TypeScript
		// 'import/no-unresolved': [
		// 	'warn',
		// 	{
		// 		commonjs: false
		// 	}
		// ],

		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'never',
				warnOnUnassignedImports: true,
			},
		],
		'import/no-unassigned-import': [
			'warn',
			{
				allow: [
					'@babel/polyfill',
					'**/register',
					'**/register.*',
					'**/register/**',
					'**/register/**.*',
					'**/*.css',
					'**/*.scss',
					'**/*.sass',
					'**/*.less',
				],
			},
		],

		// Redundant with `import/no-extraneous-dependencies`.
		// 'n/no-extraneous-import': 'warn',
		// 'n/no-extraneous-require': 'warn',

		// Redundant with `import/no-unresolved`.
		// 'n/no-missing-import': 'warn', // This rule is also buggy and doesn't support `node:`.
		// 'n/no-missing-require': 'warn',

		// 'n/no-unpublished-bin': 'warn',

		// We have this enabled in addition to `import/extensions` as this one has an auto-fix.
		// 'n/file-extension-in-import': [
		// 	'warn',
		// 	'always',
		// 	{
		// 		// TypeScript doesn't yet support using extensions and fails with error TS2691.
		// 		'.ts': 'never',
		// 		'.tsx': 'never',
		// 		'.mts': 'never',
		// 		'.cts': 'never',
		// 	},
		// ],
		// 'n/no-mixed-requires': [
		// 	'warn',
		// 	{
		// 		grouping: true,
		// 		allowCall: true,
		// 	},
		// ],
		// 'n/no-new-require': 'warn',
		// 'n/no-path-concat': 'warn',

		// // Disabled because they're too annoying, see:
		// // https://github.com/mysticatea/eslint-plugin-node/issues/105
		// // 'n/no-unpublished-import': [
		// // 	'warn',
		// // 	{
		// // 		allowModules: [
		// // 			'electron',
		// // 			'atom'
		// // 		]
		// // 	}
		// // ],
		// // 'n/no-unpublished-require': [
		// // 	'warn',
		// // 	{
		// // 		allowModules: [
		// // 			'electron',
		// // 			'atom'
		// // 		]
		// // 	}
		// // ],

		// 'n/process-exit-as-throw': 'warn',

		// // Disabled as the rule doesn't exclude scripts executed with `node` but not referenced in 'bin'. See https://github.com/mysticatea/eslint-plugin-node/issues/96
		// // 'n/shebang': 'warn',

		// 'n/no-deprecated-api': 'warn',

		// // We no longer enforce this as we don't want to use Buffer at all, but sometimes we need to conditionally use the `Buffer` global, but we then don't want the import so the module works cross-platform.
		// // 'n/prefer-global/buffer': [
		// // 	'warn',
		// // 	'never',
		// // ],

		// 'n/prefer-global/console': [
		// 	'warn',
		// 	'always',
		// ],
		// 'n/prefer-global/process': [
		// 	'warn',
		// 	'never',
		// ],
		// 'n/prefer-global/text-decoder': [
		// 	'warn',
		// 	'always',
		// ],
		// 'n/prefer-global/text-encoder': [
		// 	'warn',
		// 	'always',
		// ],
		// 'n/prefer-global/url-search-params': [
		// 	'warn',
		// 	'always',
		// ],
		// 'n/prefer-global/url': [
		// 	'warn',
		// 	'always',
		// ],
		// 'n/prefer-promises/dns': 'warn',
		// 'n/prefer-promises/fs': 'warn',
		'eslint-comments/disable-enable-pair': [
			'warn',
			{
				allowWholeFile: true,
			},
		],
		'eslint-comments/no-aggregating-enable': 'warn',
		'eslint-comments/no-duplicate-disable': 'warn',

		// Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
		// 'eslint-comments/no-unlimited-disable': 'warn',

		'eslint-comments/no-unused-disable': 0,
		'eslint-comments/no-unused-enable': 0,
	},
};

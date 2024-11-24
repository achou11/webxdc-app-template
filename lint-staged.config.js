/** @type {import('lint-staged').Config} */
export default {
	'*': ['prettier --write --ignore-unknown --cache'],
}

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: 'node',
	transform: {
		'^.+\.tsx?$': ['ts-jest', {}],
	},
	collectCoverageFrom: [
		'src/**/*.ts'
	],
	moduleNameMapper:{
		'^~/(.*)$': '<rootDir>/src/$1'
	}
};
export default {
  testEnvironment: 'node',
  transform: {},
  collectCoverageFrom: [
    'src/js/health.js',
    'src/js/sort.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
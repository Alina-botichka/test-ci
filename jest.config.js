module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/js/health.js',
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
};
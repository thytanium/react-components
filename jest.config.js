module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      diagnostics: {
        // ignore esModuleInterop warning as we deliberately don't use it
        ignoreCodes: [151001],
      },
    },
  },
};

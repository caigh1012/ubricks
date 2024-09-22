import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node', // jsdom or node
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/lib/$1',
  },
};

export default jestConfig;

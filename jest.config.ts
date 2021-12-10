export default {
  roots: ['<rootDir/src'],
  collectCoverageFrom: ['<rootDir/src/**/*.ts>'],
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

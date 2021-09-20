/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    '/node_modules/(?!(node-fetch|http)/)'
  ],
  "transform": {
    "^.+\\.js?$": "babel-jest", // Adding this line solved the issue
    "^.+\\.ts?$": "ts-jest"
  },
};
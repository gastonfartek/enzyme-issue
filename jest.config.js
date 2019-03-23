module.exports = {
  verbose: true,
  testPathIgnorePatterns: ["node_modules", "build"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testURL: "http://localhost"
};

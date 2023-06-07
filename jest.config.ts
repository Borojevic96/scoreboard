import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["<rootDir>/src/__tests__/__mocks__"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@reducers/(.*)": "<rootDir>/src/reducers/$1",
    "@selectors/(.*)": "<rootDir>/src/selectors/$1",
    "@types/(.*)": "<rootDir>/src/types/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};

export default config;

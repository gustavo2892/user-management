/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
declare namespace NodeJS {
  interface Global {
    fetch: jest.Mock;
  }
}

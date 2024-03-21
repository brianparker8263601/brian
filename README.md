# Testing Utilities

## Description

The Testing Utilities package provides common functionalities for writing and executing tests in JavaScript projects. It includes assertion methods for comparing values, checking truthiness and falsiness, as well as a method to run multiple test cases and output the summary.

## Installation

You can install the package via npm:

```bash
npm install <package-name>
```

## Usage

```javascript
const TestingUtils = require('testing-utils');

// Example test cases
TestingUtils.runTests([
  () => {
    TestingUtils.assertEquals(2 + 2, 4, "Adding 2 + 2");
  },
  () => {
    const arr = [1, 2, 3];
    TestingUtils.assertTruthy(arr.length === 3, "Checking array length");
  },
  () => {
    const name = "John";
    TestingUtils.assertFalsey(!name, "Checking if name is defined");
  }
]);
```

## API

### `runTests(testCases: Function[]): void`

Executes an array of test cases and outputs the summary of passed and failed tests.

- `testCases`: An array of functions representing individual test cases.

### `assertEquals(actual: any, expected: any, message?: string): void`

Asserts that the actual value equals the expected value.

- `actual`: The actual value obtained from the test.
- `expected`: The expected value for comparison.
- `message` (optional): Additional message to be displayed on assertion failure.

### `assertTruthy(value: any, message?: string): void`

Asserts that the given value is truthy.

- `value`: The value to be evaluated for truthiness.
- `message` (optional): Additional message to be displayed on assertion failure.

### `assertFalsey(value: any, message?: string): void`

Asserts that the given value is falsy.

- `value`: The value to be evaluated for falsiness.
- `message` (optional): Additional message to be displayed on assertion failure.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

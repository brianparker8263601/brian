// testing-utils.js

class TestingUtils {
    static runTests(testCases) {
      let passed = 0;
      let failed = 0;
  
      testCases.forEach((testCase, index) => {
        try {
          testCase();
          console.log(`Test ${index + 1}: Passed`);
          passed++;
        } catch (error) {
          console.error(`Test ${index + 1}: Failed - ${error}`);
          failed++;
        }
      });
  
      console.log(`\nTests Summary:`);
      console.log(`Passed: ${passed}`);
      console.log(`Failed: ${failed}`);
    }
  
    static assertEquals(actual, expected, message = "") {
      if (actual !== expected) {
        throw new Error(
          `Expected ${expected}, but got ${actual}. ${message ? message : ""}`
        );
      }
    }
  
    static assertTruthy(value, message = "") {
      if (!value) {
        throw new Error(`Expected truthy value, but got falsy. ${message ? message : ""}`);
      }
    }
  
    static assertFalsey(value, message = "") {
      if (value) {
        throw new Error(`Expected falsy value, but got truthy. ${message ? message : ""}`);
      }
    }
  }
  
  module.exports = TestingUtils;
  
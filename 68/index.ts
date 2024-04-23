/* Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places. */

// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
  // Multiplies the numbers and rounds the result to two decimal places
  return Math.round((num1 * num2) * 100) / 100;
}

// Trying it with 0.1 and 0.2
console.log("\n", multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.
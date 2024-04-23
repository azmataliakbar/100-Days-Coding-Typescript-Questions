/* **Question 108:** Compare two strings to check if they are identical, ignoring case sensitivity. */

// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreLowerUpperCase(str1: string, str2: string): boolean {
  // Converts both strings to lowercase before comparison
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log("\n", areStringsEqualIgnoreLowerUpperCase("hello", "Hello")); // Outputs: true
console.log("\n", areStringsEqualIgnoreLowerUpperCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
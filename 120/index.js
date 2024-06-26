/*
! Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
 */
// Defines an array of favorite movies
const favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
// Uses a for...of loop to iterate through favoriteMovies
for (const movie of favoriteMovies) {
    console.log("\n", movie); // Logs each movie name
}
export {};
//? Each movie in the array is logged to the console, one at a time.

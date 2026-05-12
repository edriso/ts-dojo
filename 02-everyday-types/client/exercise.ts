// Scroll 02 - Everyday Types
// Frontend dojo · React + TypeScript katas

// ------------------------------------------------------------------
// Kata 8 - Component state types
// ------------------------------------------------------------------
// Your mission: Declare the following variables with correct types:
//
// 1. currentUser - can be a string (username) or null (not logged in)
//    Start it as null.
//
// 2. taskList - an array of strings (task titles).
//    Start it as an empty array.
//
// 3. loadingState - can only be "idle", "loading", or "error".
//    Start it as "idle".
//    Hint: use a union type: "idle" | "loading" | "error"
//
// 4. selectedTaskId - can be a number or undefined (no task selected).
//    Start it as undefined.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 9 - Handling API responses safely
// ------------------------------------------------------------------
// Your mission: Imagine this came from an API - you do not know its type yet.
// Write a type check using typeof that narrows it to string,
// then call .toUpperCase() safely inside the check.

let apiResponse: unknown = "here are your tasks";

// Write your type check here:


// ------------------------------------------------------------------
// Bonus - readonly tuple
// ------------------------------------------------------------------
// Your mission: Create a tuple called screenSize typed as [number, number]
// representing [width, height]. Give it the value [1920, 1080].
// Then try to reassign screenSize[0] to something else.
// Now make it readonly: readonly [number, number]
// Try the reassignment again and see the error.

// Train your code here, ninja:

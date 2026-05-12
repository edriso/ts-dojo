// Topic 04 - Unions, Intersections, and Literal Types
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - Component state union (discriminated union)
// ------------------------------------------------------------------
// TODO: Define a discriminated union for a task detail page state:
//   - LoadingState: { state: "loading" }
//   - SuccessState: { state: "success"; task: { id: number; title: string; status: string } }
//   - ErrorState:   { state: "error"; message: string }
//
// Then write a function renderPage(pageState: the union type): void
// that logs a different message for each state.
//
// Call it three times with each state to test it.

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - Task action union
// ------------------------------------------------------------------
// TODO: Write a union type TaskAction with three variants:
//   - { type: "create"; title: string }
//   - { type: "delete"; taskId: number }
//   - { type: "toggle"; taskId: number; currentStatus: string }
//
// Write a function dispatchAction(action: TaskAction): void
// that handles each action and logs a message.
//
// Call it three times with each action type.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Readonly state
// ------------------------------------------------------------------
// TODO: Sometimes you want state to be immutable (cannot be changed).
// Write a type ReadonlyUser = { readonly id: number; readonly username: string; }
// Create an object and try to change the id. Notice the error.

// Write your solution here:

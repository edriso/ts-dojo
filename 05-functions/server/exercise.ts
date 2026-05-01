// Topic 05 - Functions
// Backend (NestJS / Node.js) Exercises

// ------------------------------------------------------------------
// Task 9 - Controller method types
// ------------------------------------------------------------------
// TODO: Write these typed functions (return hardcoded data):
//
// 1. getAllTasks(): { id: number; title: string }[]
//    Return at least 2 fake tasks.
//
// 2. getTaskById(id: number): { id: number; title: string } | null
//    Return a task if id === 1, otherwise return null.
//
// 3. createTask(title: string, description?: string): { id: number; title: string }
//    Return a new fake task object (use Math.random() for id).

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Logging wrapper (generics preview)
// ------------------------------------------------------------------
// TODO: Write a function:
//   withLogging<T>(fn: () => T, label: string): T
//
// It should:
//   1. Log "Starting: " + label
//   2. Call fn() and store the result
//   3. Log "Done: " + label
//   4. Return the result
//
// Test it by wrapping a call to getAllTasks():
//   const tasks = withLogging(() => getAllTasks(), "getAllTasks");
//   console.log(tasks);

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Optional chaining with typed returns
// ------------------------------------------------------------------
// TODO: Write a function:
//   getTaskTitle(id: number): string
//
// It should call getTaskById(id). If the result is null, return "Task not found".
// Otherwise return the task's title.
// Use the optional chaining operator (?.) and nullish coalescing (??).

// Write your solution here:

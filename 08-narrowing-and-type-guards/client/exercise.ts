// Topic 08 - Narrowing and Type Guards
// Frontend (Vue 3 / React) Exercises

// ------------------------------------------------------------------
// Task 7 - Narrowing in component rendering
// ------------------------------------------------------------------
// TODO: Write a function:
//   renderTaskItem(item: { id: number; title: string } | string | null): string
//
// Rules:
//   - If item is null, return "Nothing to show"
//   - If item is a string, return "Label: " + item
//   - If item is an object, return "Task #" + item.id + ": " + item.title
//
// Test it with all three cases.

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - Type guard for API login response
// ------------------------------------------------------------------
// TODO: Write a type guard:
//   isUserObject(data: unknown): data is { id: number; username: string; email: string }
//
// It should return true only if:
//   - data is not null and is an object
//   - it has "id", "username", and "email" properties
//
// Then write:
//   handleLoginResponse(data: unknown): void
//   - uses the type guard to check if data is a user
//   - if yes, log "Welcome, " + data.username
//   - if no, throw new Error("Invalid login response")
//
// Test with a valid user object and with a string to see both paths.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Narrowing with optional chaining
// ------------------------------------------------------------------
// TODO: Write a type:
//   type PageState =
//     | { status: "loading" }
//     | { status: "success"; user: { id: number; username: string } }
//     | { status: "error"; message: string }
//
// Write a function getCurrentUsername(state: PageState): string | null
//   that returns the username if state.status is "success", or null otherwise.
//
// Do NOT use "as" type casting. Use a proper if check.

// Write your solution here:

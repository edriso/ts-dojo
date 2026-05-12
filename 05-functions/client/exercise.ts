// Topic 05 - Functions
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - Event handler types
// ------------------------------------------------------------------
// TODO: Write three typed event handlers (just log inside each one):
//
// 1. handleSubmit(event: Event): void
// 2. handleTaskClick(taskId: number): void
// 3. handleSearch(query: string, filters?: string[]): void
//    Inside handleSearch, log the query, and if filters exist,
//    log "Filtering by: " + filters.join(", ")

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - Fetch helper function
// ------------------------------------------------------------------
// TODO: Write a function fetchTasks(userId: number, status?: string): Promise<void>
// Inside, log "Fetching tasks for user " + userId
// If status is provided, also log "Filtering by status: " + status
//
// Call it twice:
//   1. fetchTasks(1)
//   2. fetchTasks(1, "todo")

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Function types as variables
// ------------------------------------------------------------------
// TODO: Define a type alias:
//   type OnTaskSelect = (taskId: number, title: string) => void
//
// Write two functions that match this type:
//   1. One that logs "Selected task #ID: title"
//   2. One that logs "Opening task: title (ID: ID)"
//
// Store both in variables typed as OnTaskSelect and call them.

// Write your solution here:

// Topic 03 - Type Aliases and Interfaces
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 8 - Define component prop types
// ------------------------------------------------------------------
// TODO: Write an interface called TaskCardProps with:
//   - taskId: number
//   - title: string
//   - status: string
//   - isComplete: boolean
//
// Then write an interface TaskListProps with:
//   - tasks: array of TaskCardProps
//   - onSelect: a function that takes taskId (number) and returns void
//     Hint: (taskId: number) => void

// Write your solution here:


// ------------------------------------------------------------------
// Task 9 - Reusable response type
// ------------------------------------------------------------------
// TODO: Write a type alias called FetchState with:
//   - loading: boolean
//   - error: string | null
//   - data: unknown
//
// Then create a variable called tasksState typed as FetchState.
// Set loading to true, error to null, data to null.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - optional properties
// ------------------------------------------------------------------
// TODO: Write an interface UserProfile with:
//   - username: string (required)
//   - email: string (required)
//   - bio: string (optional - add ? after the name)
//   - avatarUrl: string (optional)
//
// Create two objects using this interface:
//   1. One with all fields filled in
//   2. One with only the required fields

// Write your solution here:

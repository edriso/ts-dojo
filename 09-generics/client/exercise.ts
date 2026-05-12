// Topic 09 - Generics
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - Generic FetchState
// ------------------------------------------------------------------
// TODO: Define this generic type:
//   type FetchState<T> = {
//     loading: boolean;
//     data: T | null;
//     error: string | null;
//   }
//
// Write a function createFetchState<T>(): FetchState<T>
// that returns { loading: false, data: null, error: null }
//
// Create two fetch states:
//   1. const taskState = createFetchState<{ id: number; title: string }[]>()
//   2. const userState = createFetchState<{ id: number; username: string }>()
//
// Log both and check their types in VS Code by hovering.

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - Generic list renderer
// ------------------------------------------------------------------
// TODO: Write a generic function:
//   renderList<T>(
//     items: T[],
//     renderItem: (item: T, index: number) => string
//   ): string
//
// It should map over items, call renderItem for each, and join with "\n".
//
// Test it twice:
//   1. With [{ id: 1, title: "Buy groceries" }, { id: 2, title: "Learn TS" }]
//      renderItem: (task, i) => `${i + 1}. [${task.id}] ${task.title}`
//
//   2. With ["Ahmed", "Ali", "Sara"]
//      renderItem: (name, i) => `${i + 1}. ${name}`
//
// Log both results.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Generic state machine
// ------------------------------------------------------------------
// TODO: Write a generic type:
//   type AsyncState<T> =
//     | { status: "idle" }
//     | { status: "loading" }
//     | { status: "success"; data: T }
//     | { status: "error"; message: string }
//
// Write a function:
//   getAsyncData<T>(state: AsyncState<T>): T | null
//   - returns state.data if status is "success", otherwise null
//
// Test with AsyncState<string[]> in different states.

// Write your solution here:

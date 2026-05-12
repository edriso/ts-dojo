// Scroll 07 - Objects and Classes
// Frontend dojo · React + TypeScript katas

// ------------------------------------------------------------------
// Kata 7 - Store-like class (Zustand preview)
// ------------------------------------------------------------------
// Your mission: Write a class TaskStore that acts like a simple state store.
//
// It should have:
//   - private tasks: { id: number; title: string; status: string }[]  (empty array)
//   - private static instance: TaskStore | null = null
//   - private constructor() {} (prevent direct instantiation)
//   - static getInstance(): TaskStore
//       returns the existing instance or creates one if it doesn't exist
//   - addTask(title: string): void
//       creates a new task with a generated id and status "todo"
//   - removeTask(id: number): void
//   - getTasks(): { id: number; title: string; status: string }[]
//
// Test it:
//   const store1 = TaskStore.getInstance();
//   const store2 = TaskStore.getInstance();
//   console.log(store1 === store2);  // should log: true
//   store1.addTask("Learn TypeScript");
//   console.log(store2.getTasks());  // should show the task

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 8 - Readonly state object
// ------------------------------------------------------------------
// Your mission: Write a class ComponentState with:
//   - readonly componentName: string (set in constructor)
//   - private _loading: boolean = false
//   - private _error: string | null = null
//   - getter isLoading(): boolean
//   - getter error(): string | null
//   - startLoading(): void  (sets _loading to true, _error to null)
//   - setError(message: string): void  (sets _loading to false, _error to message)
//   - reset(): void  (sets _loading to false, _error to null)
//
// Create an instance and simulate a failed fetch:
//   state.startLoading()
//   state.setError("Network error")
//   console.log(state.isLoading, state.error)

// Train your code here, ninja:

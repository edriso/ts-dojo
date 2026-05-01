// Topic 11 - Utility Types
// Backend (NestJS / Node.js) Exercises

interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
  internalNotes: string;  // should NOT be exposed publicly
}

// ------------------------------------------------------------------
// Task 9 - Public task shape with Pick and Omit
// ------------------------------------------------------------------
// TODO:
// 1. Create a type PublicTask = Omit<Task, "internalNotes">
//    (removes the internal field from the public response)
//
// 2. Write a function toPublicTask(task: Task): PublicTask
//    that returns a new object without internalNotes
//
// 3. Write a function toPublicTasks(tasks: Task[]): PublicTask[]
//    that maps over tasks using toPublicTask
//
// Create 2 fake tasks and test both functions.

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Type-safe cache with Record
// ------------------------------------------------------------------
// TODO: Write a class TaskCache:
//   - private store: Record<number, Task> = {}
//
//   Methods:
//   - set(task: Task): void
//     stores the task with task.id as the key
//   - get(id: number): Task | undefined
//     returns the task or undefined
//   - invalidate(id: number): void
//     removes the entry (use delete this.store[id])
//   - getAll(): Task[]
//     returns all cached tasks (Object.values(this.store))
//   - size(): number
//     returns the number of cached tasks
//
// Test it: add 3 tasks, get one, invalidate one, log all remaining.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - ReturnType and Parameters
// ------------------------------------------------------------------
// TODO: Write this function (do not change it after writing it):
//   function findTaskWithFilter(
//     tasks: Task[],
//     predicate: (task: Task) => boolean,
//     limit: number
//   ): Task[]
//
// Now use utility types to extract:
//   type FindResult = ReturnType<typeof findTaskWithFilter>
//   type FindParams = Parameters<typeof findTaskWithFilter>
//   type PredicateType = FindParams[1]  (the callback type)
//
// Log the types by creating variables of each type and checking them in VS Code.

// Write your solution here:

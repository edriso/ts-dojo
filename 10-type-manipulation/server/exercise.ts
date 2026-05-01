// Topic 10 - Type Manipulation
// Backend (NestJS / Node.js) Exercises

interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

// ------------------------------------------------------------------
// Task 9 - DTO types using mapped types and utility types
// ------------------------------------------------------------------
// TODO: Using the Task interface above, create:
//
// 1. CreateTaskDto - remove id, createdAt, updatedAt from Task
//    Hint: use Omit<Task, "id" | "createdAt" | "updatedAt">
//    Also make status optional.
//
// 2. UpdateTaskDto - all fields optional, same omissions as CreateTaskDto
//    Hint: use Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>
//
// 3. TaskResponse - all fields readonly
//    Hint: use Readonly<Task>
//
// Create one object for each type and log them.

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Event system with template literal types
// ------------------------------------------------------------------
// TODO: Define:
//   type ResourceName = "task" | "user"
//   type ActionName = "created" | "updated" | "deleted"
//   type EventName = `${ResourceName}.${ActionName}`
//   (generates 6 event name combinations)
//
// Write a function:
//   emitEvent(event: EventName, data: unknown): void
//   that logs: [EVENT] event + data
//
// Test it with valid events.
// Try "task.approved" - it should give a type error.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - keyof with type-safe patch function
// ------------------------------------------------------------------
// TODO: Write a generic function:
//   patchField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T
//   that returns a new object with the field updated
//   (return { ...obj, [key]: value })
//
// Test it:
//   const task = { id: 1, title: "Old title", status: "todo" }
//   const updated = patchField(task, "title", "New title")
//   Try: patchField(task, "title", 123) -- should be a type error

// Write your solution here:

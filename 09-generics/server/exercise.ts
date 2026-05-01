// Topic 09 - Generics
// Backend (NestJS / Node.js) Exercises

interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  createdAt: string;
}

// ------------------------------------------------------------------
// Task 9 - Generic base service
// ------------------------------------------------------------------
// TODO: Write an abstract class BaseService<T extends { id: number }> with:
//   - protected items: T[] = []
//   - findAll(): T[]
//   - findOne(id: number): T | undefined
//   - abstract create(...args: any[]): T
//   - remove(id: number): boolean
//       removes the item and returns true, or false if not found
//
// Then write class TasksService extends BaseService<Task>:
//   - private nextId = 1
//   - create(title: string, description?: string): Task
//       creates and saves a Task, increments nextId, returns the new task
//
// Test:
//   const service = new TasksService();
//   service.create("Buy groceries");
//   service.create("Learn TypeScript", "Using this repo");
//   console.log(service.findAll());
//   service.remove(1);
//   console.log(service.findAll());

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Generic paginate function
// ------------------------------------------------------------------
// TODO: Write a generic function:
//   paginate<T>(
//     items: T[],
//     page: number,
//     pageSize: number
//   ): { items: T[]; total: number; page: number; totalPages: number }
//
// page starts at 1 (not 0).
// Example: page=2, pageSize=3 with 10 items returns items 4,5,6
//
// Test with an array of 10 fake tasks, page=2, pageSize=3.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Generic ok/fail response helpers
// ------------------------------------------------------------------
// TODO: Write these generic helper functions:
//
//   type ApiSuccess<T> = { success: true; data: T }
//   type ApiError    = { success: false; statusCode: number; message: string }
//   type ApiResponse<T> = ApiSuccess<T> | ApiError
//
//   ok<T>(data: T): ApiSuccess<T>
//   fail(statusCode: number, message: string): ApiError
//
// Use them:
//   console.log(ok(service.findAll()));
//   console.log(fail(404, "Task not found"));

// Write your solution here:

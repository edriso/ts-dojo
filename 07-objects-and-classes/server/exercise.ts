// Topic 07 - Objects and Classes
// Backend (NestJS / Node.js) Exercises

// First, define the Task interface used throughout this file:
interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  createdAt: string;
}

// ------------------------------------------------------------------
// Task 9 - NestJS-style service class
// ------------------------------------------------------------------
// TODO: Write a class TasksService with:
//   - private tasks: Task[] = []
//   - private nextId: number = 1
//
// Methods:
//   - findAll(): Task[]
//   - findOne(id: number): Task | undefined
//   - create(title: string, description?: string): Task
//       sets status to "todo", createdAt to new Date().toISOString()
//       increments nextId after each creation
//   - remove(id: number): boolean
//       removes the task and returns true, or returns false if not found
//
// Test it:
//   const service = new TasksService();
//   service.create("Buy groceries");
//   service.create("Learn TypeScript", "Using this repo");
//   console.log(service.findAll());
//   service.remove(1);
//   console.log(service.findAll());

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Abstract repository pattern
// ------------------------------------------------------------------
// TODO: Write an abstract class BaseRepository<T> with:
//   - abstract findById(id: number): T | undefined
//   - abstract findAll(): T[]
//   - exists(id: number): boolean  (uses findById - already implemented)
//
// Write a class UserRepository extends BaseRepository<{ id: number; username: string }>
// that stores a hardcoded array of 3 users.
//
// Write a function printAll<T>(repo: BaseRepository<T>): void
// that calls repo.findAll() and logs each item.
//
// Test it with both TasksService (if you adapt it) and UserRepository.
// Hint: you can make TasksService extend BaseRepository<Task>

// Write your solution here:

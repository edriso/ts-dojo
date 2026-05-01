// Topic 14 - Advanced Patterns
// Backend (NestJS / Node.js) Exercises

// ------------------------------------------------------------------
// Task 3 - Branded types
// ------------------------------------------------------------------
// TODO: Create branded number types:
//   type UserId = number & { readonly _brand: "UserId" }
//   type TaskId = number & { readonly _brand: "TaskId" }
//
// Write factory functions:
//   function createUserId(id: number): UserId
//   function createTaskId(id: number): TaskId
//
// Write a function assignTask(taskId: TaskId, userId: UserId): void
//   that logs "Assigned task " + taskId + " to user " + userId
//
// Test correctly: assignTask(createTaskId(5), createUserId(2))
// Test incorrectly: assignTask(createUserId(5), createTaskId(2))  -- should be type error

// Write your solution here:


// ------------------------------------------------------------------
// Task 9 - Builder pattern
// ------------------------------------------------------------------
// TODO: Write a class TaskQueryBuilder:
//   - private query: { status?: string; userId?: number; page?: number; pageSize?: number } = {}
//
//   Methods (all return this for chaining):
//   - withStatus(status: string): this
//   - forUser(userId: number): this
//   - paginate(page: number, size: number): this  (sets both page and pageSize)
//
//   Final method:
//   - build(): { status?: string; userId?: number; page?: number; pageSize?: number }
//
// Test with chaining:
//   const query = new TaskQueryBuilder()
//     .forUser(1)
//     .withStatus("todo")
//     .paginate(1, 10)
//     .build();
//   console.log(query);

// Write your solution here:


// ------------------------------------------------------------------
// Task 10 - Environment config with satisfies
// ------------------------------------------------------------------
// TODO: Define this type:
//   type EnvConfig = {
//     NODE_ENV: "development" | "production" | "test";
//     PORT: string;
//     DATABASE_URL: string;
//     JWT_SECRET: string;
//   }
//
// Write an env config object using satisfies:
//   const config = {
//     NODE_ENV: "development",
//     PORT: "3000",
//     DATABASE_URL: "postgres://localhost:5432/taskdb",
//     JWT_SECRET: "super-secret-key",
//   } satisfies EnvConfig;
//
// Access config.NODE_ENV and hover - it should say "development" not the full union type.
// Try adding an unknown field to config - should give an error.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Recursive task categories
// ------------------------------------------------------------------
// TODO: Write a recursive type:
//   type TaskCategory = {
//     id: number;
//     name: string;
//     children: TaskCategory[];
//   }
//
// Build a small category tree (at least 2 levels deep) and write a function:
//   function printCategories(category: TaskCategory, depth: number = 0): void
//   that prints: "  ".repeat(depth) + category.name for each node recursively.

// Write your solution here:

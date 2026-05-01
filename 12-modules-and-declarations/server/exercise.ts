// Topic 12 - Modules and Declarations
// Backend (NestJS / Node.js) Exercises

// ------------------------------------------------------------------
// Task 8 - Module augmentation for Express Request
// ------------------------------------------------------------------
// TODO: Create a file server/types/express.d.ts with this content:
//
//   import "express";
//
//   declare module "express-serve-static-core" {
//     interface Request {
//       user?: { id: number; username: string; role: "admin" | "user" };
//     }
//   }
//
//   export {};
//
// This extends the Express Request type so that after authentication middleware
// runs, req.user is typed correctly.
//
// Then write a fake function:
//   function getTasksHandler(req: { user?: { id: number; role: string } }): void {
//     if (!req.user) throw new Error("Unauthorized");
//     console.log("User", req.user.id, "is fetching tasks with role", req.user.role);
//   }
//
// (We use a simplified req type here to avoid needing express installed)

// Write your solution here:


// ------------------------------------------------------------------
// Task 9 - Barrel file for a tasks module
// ------------------------------------------------------------------
// TODO: Create this folder structure:
//
//   server/tasks/
//     tasks.service.ts  - export class TasksService (stub)
//     tasks.controller.ts - export class TasksController (stub)
//     dto/
//       create-task.dto.ts - export interface CreateTaskDto { title: string; description?: string }
//       update-task.dto.ts - export interface UpdateTaskDto { title?: string; status?: string }
//     index.ts - barrel that re-exports everything
//
// Write each file with just enough content to be valid TypeScript.
// The barrel (index.ts) should export all four things.

// (Create the files in the tasks/ folder. Nothing to write here.)
// Once created, test by importing from "./tasks" and using the types.


// ------------------------------------------------------------------
// Bonus - Declaration file for a fake utility library
// ------------------------------------------------------------------
// TODO: Create a file server/types/task-utils.d.ts with:
//
//   declare module "task-utils" {
//     export function formatTitle(title: string): string;
//     export function truncate(text: string, maxLength: number): string;
//     export interface TaskFilter {
//       status?: string;
//       search?: string;
//       page?: number;
//     }
//   }
//
// Then write this import and use it (TypeScript will not complain because
// you declared it, even though the module does not actually exist):
//   import type { TaskFilter } from "task-utils";
//   const filter: TaskFilter = { status: "todo", page: 1 };
//   console.log(filter);

// Write your solution here:

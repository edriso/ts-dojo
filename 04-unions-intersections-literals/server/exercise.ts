// Scroll 04 - Unions, Intersections, and Literal Types
// Backend dojo · NestJS + Node katas

// ------------------------------------------------------------------
// Kata 9 - API response union
// ------------------------------------------------------------------
// Your mission: Write two types:
//   - SuccessResponse: { success: true; data: unknown }
//   - ErrorResponse:   { success: false; statusCode: number; message: string }
//
// Write two helper functions:
//   - ok(data: unknown): SuccessResponse
//   - fail(statusCode: number, message: string): ErrorResponse
//
// Call ok with a fake task object and log it.
// Call fail with 404 and "Task not found" and log it.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 10 - Role-based access
// ------------------------------------------------------------------
// Your mission: Write a union type UserRole = "admin" | "editor" | "viewer"
//
// Write:
//   - canDeleteTask(role: UserRole): boolean - true only for "admin"
//   - canEditTask(role: UserRole): boolean - true for "admin" and "editor"
//
// Test each function with all three roles and log the results.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - Discriminated union for task events
// ------------------------------------------------------------------
// Your mission: Write a discriminated union TaskEvent with:
//   - { event: "created"; taskId: number; title: string }
//   - { event: "completed"; taskId: number; completedAt: string }
//   - { event: "deleted"; taskId: number }
//
// Write a function logTaskEvent(event: TaskEvent): void that logs
// a different message for each event type.

// Train your code here, ninja:

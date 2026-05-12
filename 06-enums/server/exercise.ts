// Scroll 06 - Enums
// Backend dojo · NestJS + Node katas

// ------------------------------------------------------------------
// Kata 9 - Role-based permissions with enum
// ------------------------------------------------------------------
// Your mission: Create a string enum UserRole:
//   Admin = "admin"
//   User = "user"
//
// Write a function:
//   hasPermission(role: UserRole, action: "delete" | "edit" | "view"): boolean
//
// Rules:
//   - Admin can do all three: delete, edit, view
//   - User can only: edit, view
//
// Test with all combinations and log the results.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 10 - HTTP status enum in responses
// ------------------------------------------------------------------
// Your mission: Create a numeric enum HttpStatus:
//   OK = 200
//   Created = 201
//   BadRequest = 400
//   NotFound = 404
//   InternalServerError = 500
//
// Write a function:
//   sendResponse(statusCode: HttpStatus, data: unknown): void
//   that logs: { status: statusCode, body: data }
//
// Call it twice:
//   1. sendResponse(HttpStatus.OK, { id: 1, title: "Build app" })
//   2. sendResponse(HttpStatus.NotFound, null)

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - Enum in validation
// ------------------------------------------------------------------
// Your mission: Create a string enum TaskStatus:
//   Todo = "todo"
//   InProgress = "in_progress"
//   Done = "done"
//
// Write a function isValidStatus(value: string): value is TaskStatus
// that checks if the string is a valid TaskStatus value.
// Hint: use Object.values(TaskStatus).includes(value as TaskStatus)
//
// This is a preview of type guards (topic 08). Try to understand it.

// Train your code here, ninja:

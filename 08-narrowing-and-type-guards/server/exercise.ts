// Scroll 08 - Narrowing and Type Guards
// Backend dojo · NestJS + Node katas

// ------------------------------------------------------------------
// Kata 9 - Assertion for request validation
// ------------------------------------------------------------------
// Your mission: Write an assertion function:
//   assertIsString(value: unknown, fieldName: string): asserts value is string
//   - throws new Error(fieldName + " must be a string, got " + typeof value)
//   - if value is not a string
//
// Then write a function:
//   validateCreateTaskBody(body: unknown): { title: string; description: string | undefined }
//   - use assertIsString to validate body.title (after checking body is an object)
//   - description is optional (check if it exists and is a string)
//   - return { title, description }
//
// Test with:
//   1. A valid body: { title: "Buy groceries", description: "At the market" }
//   2. An invalid body: { title: 123 }  -- should throw

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 10 - instanceof error handling
// ------------------------------------------------------------------
// Your mission: Write a class AppError extends Error with:
//   - constructor(public statusCode: number, message: string) { super(message) }
//
// Write a function handleServiceError(error: unknown): void that:
//   - if error instanceof AppError: log "AppError [" + statusCode + "]: " + message
//   - if error instanceof Error: log "Error: " + message
//   - otherwise: log "Unknown error: " + String(error)
//
// Test with all three:
//   handleServiceError(new AppError(404, "Task not found"))
//   handleServiceError(new Error("Database connection failed"))
//   handleServiceError("something went wrong")

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - Narrowing in middleware-style function
// ------------------------------------------------------------------
// Your mission: Write a function parseJsonBody(body: unknown): Record<string, unknown>
//   - if body is a string, parse it with JSON.parse and return it
//   - if body is already an object (and not null), return it as Record<string, unknown>
//   - otherwise throw new Error("Cannot parse body")
//
// Test with a JSON string and with a plain object.

// Train your code here, ninja:

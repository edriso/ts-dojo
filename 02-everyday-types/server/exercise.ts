// Scroll 02 - Everyday Types
// Backend dojo · NestJS + Node katas

// ------------------------------------------------------------------
// Kata 10 - Request body types
// ------------------------------------------------------------------
// Your mission: These variables simulate a raw incoming request body.
// Type them as unknown because you cannot trust user input.
// Then write type checks (using typeof) to safely use them.
//
// 1. rawTitle - unknown, set it to "Build TypeScript API"
// 2. rawPriority - unknown, set it to "high"
//
// Write two type checks:
//   - Check rawTitle is a string, then log it in uppercase
//   - Check rawPriority is a string, then log "Priority is: " + rawPriority

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 11 - Status handler
// ------------------------------------------------------------------
// Your mission: Write a function handleTaskStatus(status: string): void
// that logs a different message for each valid status:
//   - "todo"        -> log "Task is waiting to be started"
//   - "in_progress" -> log "Task is currently being worked on"
//   - "done"        -> log "Task is complete"
//   - anything else -> throw new Error("Unknown status: " + status)
//
// Then call it three times with each valid status.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - void vs never
// ------------------------------------------------------------------
// Your mission: Write two functions:
//   1. logRequest(url: string): void - logs "Incoming request: " + url
//   2. crashServer(reason: string): never - throws new Error(reason)
//
// Call logRequest with a URL string.
// Do NOT call crashServer (it will crash the process!), just define it.

// Train your code here, ninja:

// Topic 03 - Type Aliases and Interfaces
// Backend (NestJS / Node.js) Exercises

// ------------------------------------------------------------------
// Task 10 - DTO interfaces
// ------------------------------------------------------------------
// TODO: Write an interface CreateTaskDto with:
//   - title: string (required)
//   - description: string (optional)
//   - dueDate: string (optional)
//
// Write another interface UpdateTaskDto where ALL fields are optional:
//   - title?: string
//   - description?: string
//   - dueDate?: string
//   - status?: string

// Write your solution here:


// ------------------------------------------------------------------
// Task 11 - Service interface
// ------------------------------------------------------------------
// First define a simple Task interface for use in the service:
//   Task { id: number, title: string, status: string }
//
// TODO: Write an interface TaskService with these method signatures:
//   - findAll(): Task[]
//   - findById(id: number): Task | undefined
//   - create(dto: CreateTaskDto): Task
//   - delete(id: number): void

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - BaseEntity pattern
// ------------------------------------------------------------------
// TODO: Write an interface BaseEntity with:
//   - id: number
//   - createdAt: string
//   - updatedAt: string
//
// Then write a Task interface that extends BaseEntity and adds:
//   - title: string
//   - description: string | null
//   - isComplete: boolean
//
// Create one Task object (make up the values) and log it.

// Write your solution here:

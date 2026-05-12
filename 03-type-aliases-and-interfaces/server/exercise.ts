// Scroll 03 - Type Aliases and Interfaces
// Backend dojo · NestJS + Node katas

// ------------------------------------------------------------------
// Kata 10 - DTO interfaces
// ------------------------------------------------------------------
// Your mission: Write an interface CreateTaskDto with:
//   - title: string (required)
//   - description: string (optional)
//   - dueDate: string (optional)
//
// Write another interface UpdateTaskDto where ALL fields are optional:
//   - title?: string
//   - description?: string
//   - dueDate?: string
//   - status?: string

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 11 - Service interface
// ------------------------------------------------------------------
// First define a simple Task interface for use in the service:
//   Task { id: number, title: string, status: string }
//
// Your mission: Write an interface TaskService with these method signatures:
//   - findAll(): Task[]
//   - findById(id: number): Task | undefined
//   - create(dto: CreateTaskDto): Task
//   - delete(id: number): void

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - BaseEntity pattern
// ------------------------------------------------------------------
// Your mission: Write an interface BaseEntity with:
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

// Train your code here, ninja:

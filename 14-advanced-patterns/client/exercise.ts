// Topic 14 - Advanced Patterns
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - satisfies for route config
// ------------------------------------------------------------------
// TODO: Define this type:
//   type RouteConfig = Record<string, { path: string; title: string; requiresAuth: boolean }>
//
// Create a routes object and validate it with satisfies:
//   const routes = {
//     home:    { path: "/",       title: "Home",       requiresAuth: false },
//     tasks:   { path: "/tasks",  title: "My Tasks",   requiresAuth: true  },
//     profile: { path: "/profile", title: "Profile",   requiresAuth: true  },
//     login:   { path: "/login",  title: "Login",      requiresAuth: false },
//   } satisfies RouteConfig;
//
// Try accessing routes.tasks.path and hover to see the type (should be "/tasks", not string).
// Without satisfies, it would be just "string". With satisfies, TypeScript knows the exact value.

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - as const for static data
// ------------------------------------------------------------------
// TODO: Write these using as const:
//
// 1. const TASK_STATUSES = ["todo", "in_progress", "done"] as const
//    Then derive: type TaskStatus = typeof TASK_STATUSES[number]
//
// 2. const PRIORITIES = ["low", "medium", "high"] as const
//    Then derive: type Priority = typeof PRIORITIES[number]
//
// 3. Create a select option array:
//    const STATUS_OPTIONS = [
//      { value: "todo",        label: "To Do"       },
//      { value: "in_progress", label: "In Progress" },
//      { value: "done",        label: "Done"        },
//    ] as const
//
//    Try assigning STATUS_OPTIONS[0].value to a variable typed as TaskStatus.
//    It should work since the type is narrowed to "todo".

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Branded types for component IDs
// ------------------------------------------------------------------
// TODO: Create:
//   type TaskElementId = string & { readonly _brand: "TaskElementId" }
//
// Write a function:
//   function createTaskElementId(taskId: number): TaskElementId {
//     return ("task-" + taskId) as TaskElementId
//   }
//
// Write a function:
//   function focusElement(id: TaskElementId): void {
//     console.log("Focusing element:", id)
//   }
//
// Test: call focusElement(createTaskElementId(1))  -- should work
// Try: focusElement("task-1")  -- should be a type error (just a string, not branded)

// Write your solution here:

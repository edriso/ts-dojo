// Scroll 11 - Utility Types
// Frontend dojo · React + TypeScript katas

type TaskFormData = {
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  dueDate: string;
  priority: "low" | "medium" | "high";
};

// ------------------------------------------------------------------
// Kata 7 - Form state with Partial
// ------------------------------------------------------------------
// Your mission: A form fills up as the user types, so the data is partial at first.
//
// 1. Declare a variable draftTask: Partial<TaskFormData> = {}
//
// 2. Write a type guard function:
//    isFormComplete(form: Partial<TaskFormData>): form is TaskFormData
//    It should return true only if title, status, and priority are all present.
//
// 3. Simulate filling in the form step by step:
//    draftTask.title = "Buy groceries"
//    draftTask.status = "todo"
//    draftTask.priority = "high"
//    Then call isFormComplete(draftTask) and log the result.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 8 - Status UI config with Record
// ------------------------------------------------------------------
// Your mission: Write this type:
//   type StatusConfig = Record<
//     "todo" | "in_progress" | "done",
//     { label: string; color: string; icon: string }
//   >
//
// Create a statusConfig object of that type with values like:
//   todo:        { label: "To Do",       color: "gray",  icon: "circle" }
//   in_progress: { label: "In Progress", color: "blue",  icon: "clock" }
//   done:        { label: "Done",        color: "green", icon: "check" }
//
// Write a function getStatusConfig(status: "todo" | "in_progress" | "done"): StatusConfig[typeof status]
// that returns the config for a status.
//
// Test it with all three statuses.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Bonus - Readonly state
// ------------------------------------------------------------------
// Your mission: Declare:
//   const frozenTask: Readonly<TaskFormData> = {
//     title: "Cannot change this",
//     description: "It is frozen",
//     status: "done",
//     dueDate: "2025-12-31",
//     priority: "low",
//   }
//
// Try to change frozenTask.title and observe the error.
// This is useful for component props you want to treat as immutable.

// Train your code here, ninja:

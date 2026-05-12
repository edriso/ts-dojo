// Topic 10 - Type Manipulation
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - Component prop extractor with indexed access
// ------------------------------------------------------------------
// TODO: Given this type:
type TaskFormProps = {
  task: { id: number; title: string; status: string; tags: string[] };
  onSubmit: (data: { title: string; status: string }) => void;
  onCancel: () => void;
};

// Create the following type aliases using indexed access:
// 1. TaskData  = the type of TaskFormProps["task"]
// 2. TaskTag   = the type of a single element in the tags array
//    Hint: TaskFormProps["task"]["tags"][number]
// 3. SubmitData = the type of the first argument of onSubmit
//    Hint: Parameters<TaskFormProps["onSubmit"]>[0]

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - CSS class builder with template literals
// ------------------------------------------------------------------
// TODO: Define:
//   type Size = "sm" | "md" | "lg"
//   type Color = "blue" | "red" | "green"
//   type ButtonClass = `btn-${Size}-${Color}`
//   (this generates all 9 combinations automatically)
//
// Write a function:
//   createButtonClass(size: Size, color: Color): ButtonClass
//   that returns the combined class name
//
// Test it: createButtonClass("md", "blue") => "btn-md-blue"
// Try passing an invalid size or color and see the error.

// Write your solution here:


// ------------------------------------------------------------------
// Bonus - Mapped type for form field errors
// ------------------------------------------------------------------
// TODO: Given a form data type:
//   type LoginForm = { username: string; password: string; rememberMe: boolean }
//
// Write a mapped type:
//   type FormErrors<T> = { [K in keyof T]?: string }
//
// This creates a type where every field is an optional error message string.
// Create a variable: const errors: FormErrors<LoginForm> = { username: "Required" }

// Write your solution here:

// Topic 12 - Modules and Declarations
// Frontend (React + TypeScript) Exercises
//
// Most tasks in this topic involve creating multiple files.
// Follow the instructions in the README and create the files
// described there alongside this exercise file.

// ------------------------------------------------------------------
// Task 6 - Organize types into modules
// ------------------------------------------------------------------
// TODO: Create the following files in a new client/types/ folder:
//
// client/types/props.types.ts - export these types:
//   TaskCardProps { taskId: number; title: string; status: string; isComplete: boolean }
//   TaskListProps { tasks: TaskCardProps[]; onSelect: (id: number) => void }
//
// client/types/state.types.ts - export these types:
//   FetchState<T> { loading: boolean; data: T | null; error: string | null }
//   PageState = { status: "loading" } | { status: "success" } | { status: "error"; message: string }
//
// client/types/index.ts - re-export everything from both files:
//   export type { TaskCardProps, TaskListProps } from "./props.types";
//   export type { FetchState, PageState } from "./state.types";
//
// Then import from the barrel below and create a variable of each type.

// Write your imports here (once you create the files):
// import type { TaskCardProps, FetchState } from "./types";


// ------------------------------------------------------------------
// Task 7 - Augment the Window type
// ------------------------------------------------------------------
// TODO: Create a file client/types/globals.d.ts with this content:
//
//   declare global {
//     interface Window {
//       __APP_VERSION__: string;
//       __DEBUG__: boolean;
//     }
//   }
//   export {};  // makes it a module (required)
//
// Then in this file, write:
//   window.__APP_VERSION__ = "1.0.0";
//   window.__DEBUG__ = true;
//   console.log(`App version ${window.__APP_VERSION__}, debug: ${window.__DEBUG__}`);

// Write your solution here (after creating the .d.ts file):


// ------------------------------------------------------------------
// Bonus - import type
// ------------------------------------------------------------------
// TODO: Look at your imports in this file and in previous exercise files.
// Find any place you import a type that is only used as a type annotation
// (not called as a function, not used as a value).
// Change those imports to: import type { ... }
// This is a best practice. It makes builds faster and cleaner.

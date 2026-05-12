# Topic 02 - Everyday Types

These are the types you will use in almost every TypeScript file you ever write.
Knowing them well is the foundation of everything else.

---

## What You Will Learn

- All primitive types: `string`, `number`, `boolean`
- `null` and `undefined`
- `any` and when to avoid it
- `unknown` and why it is safer than `any`
- `void` for functions that return nothing
- `never` for things that should never happen
- Arrays and tuples
- Type inference vs type annotation
- The `object` type

---

## Key Concepts

### Primitive Types

```typescript
let username: string = "Ahmed";
let age: number = 25;
let isLoggedIn: boolean = false;
```

### Arrays

```typescript
let scores: number[] = [10, 20, 30];
let names: string[] = ["Ahmed", "Ali"];
let anything: Array<string> = ["a", "b"];  // same as string[]
```

### Tuples

A tuple is an array with a fixed number of elements, each with a known type.
Unlike arrays, the order matters.

```typescript
let coordinate: [number, number] = [40.7, 74.0];
let userEntry: [string, number] = ["Ahmed", 25];

// You cannot swap them:
let wrong: [string, number] = [25, "Ahmed"];  // Error!
```

### `any`

`any` turns off TypeScript's type checking for that variable. Avoid it.
When you use `any`, you lose all the benefits TypeScript gives you.

```typescript
let data: any = "hello";
data = 42;        // no error
data = true;      // no error
data.foo.bar();   // no error - but will crash at runtime!
```

### `unknown`

`unknown` is the safe version of `any`. TypeScript forces you to check the type
before using the value. Always prefer `unknown` over `any` when the type is uncertain.

```typescript
let input: unknown = getUserInput();

// You must check before using it:
if (typeof input === "string") {
  console.log(input.toUpperCase());  // safe here
}
```

### `void`

Used as the return type of a function that does not return anything.

```typescript
function logMessage(msg: string): void {
  console.log(msg);
  // no return statement needed
}
```

### `never`

`never` means something that can never happen. Used in functions that always throw
or that have infinite loops, and in exhaustiveness checks (you will use this a lot later).

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

### `null` and `undefined`

With `strict` mode on, `null` and `undefined` are their own types and cannot be
accidentally assigned to other types. This prevents a huge class of bugs.

```typescript
let name: string = null;      // Error with strict mode!
let name: string | null = null;  // Correct - explicitly allows null
```

---

## Tasks

### Shared Tasks

**Task 1 - Type all the primitives**
Declare one variable for each type: `string`, `number`, `boolean`, `null`, `undefined`.
Give each one a type annotation and a value. Then log all of them.

**Task 2 - Arrays**
Create three arrays:
- An array of task titles (strings)
- An array of task IDs (numbers)
- An array of booleans representing whether each task is complete

Add at least 3 items to each array.

**Task 3 - Tuples**
A task can be represented as a tuple: `[id, title, isComplete]` which maps to `[number, string, boolean]`.
Create two task tuples and log them.

**Task 4 - The any problem**
Declare a variable with type `any` and assign it a string.
Then call `.toUpperCase()` on it (works fine).
Then reassign it to a number and call `.toUpperCase()` again.
TypeScript will not warn you. Run the code and see the runtime crash.
This is exactly why `any` is dangerous.

**Task 5 - Fixing it with unknown**
Now redo Task 4 using `unknown` instead of `any`.
Notice that TypeScript now forces you to check the type before calling `.toUpperCase()`.
Add a `typeof` check so it only calls `.toUpperCase()` when it is actually a string.

**Task 6 - void functions**
Write two functions:
- `printTaskTitle(title: string): void` - logs the title
- `printTaskCount(count: number): void` - logs "You have X tasks"
Both should have explicit `: void` return type annotations.

**Task 7 - never**
Write a function `assertNever(value: never): never` that throws an error.
This function will be very useful later when you do narrowing. For now just write it
and understand that its job is to catch code paths that should be impossible.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 8 - Component state types**
In React, component state is just typed variables (often held in `useState`). Write the following:
- A `currentUser` variable: can be a string (username) or null (not logged in)
- A `taskList` variable: an array of strings (task titles, empty for now)
- A `loadingState` variable: can only be `"idle"`, `"loading"`, or `"error"` (use a union - we cover this more in topic 4, but try it now)
- A `selectedTaskId` variable: can be a number or undefined (no task selected yet)

**Task 9 - Handling API responses safely**
Pretend you got a response from an API and stored it as `unknown`.
Write code that checks if it is a string before using it.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 10 - Request body types**
In a backend, you receive request bodies. Write the following variables representing
what a "create task" request body might look like before validation:
- `rawTitle`: unknown (comes from user, type unknown until validated)
- `rawPriority`: unknown
- A type check that narrows `rawTitle` to string before using it

**Task 11 - Error handling with never**
Write a function `handleTaskStatus` that takes a `status` parameter.
For now, type it as `string`. Inside, log a message for each status:
"todo", "in_progress", "done". For anything else, throw an error.
We will revisit this with proper types in topic 04.

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Update the shared types file to use proper TypeScript types for everything:

```typescript
export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  isComplete: boolean;
  createdAt: string;
  dueDate: string | null;
}

export interface User {
  id: number;
  username: string;
  email: string;
}
```

**Frontend:** Add typed state variables to your main component for `currentUser` (User | null)
and `tasks` (Task[]).

**Backend:** Make sure your NestJS app is running. Check that the generated files have TypeScript
types everywhere (they should by default with NestJS).

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html (preview for topic 08)

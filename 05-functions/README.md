# Scroll 05 - Functions

> *Every move you throw is a function. Time to type them with care.*

Functions are where most of your TypeScript code lives. TypeScript gives you full control
over typing every input and output. Getting comfortable with function types early makes
everything else much easier.

---

## What You Will Learn

- Typing function parameters and return values
- Optional and default parameters
- Rest parameters
- Function type expressions
- Overloads
- `void` vs `never` as return types
- Arrow functions with types
- Callbacks and higher-order functions

---

## Key Concepts

### Basic Function Typing

```typescript
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old`;
}
```

### Arrow Functions

```typescript
const greet = (name: string, age: number): string => {
  return `Hello ${name}, you are ${age} years old`;
};

// Short version with implicit return:
const greet = (name: string): string => `Hello ${name}`;
```

### Optional Parameters

Add `?` after the parameter name. Optional parameters must come after required ones.

```typescript
function createTask(title: string, description?: string): void {
  console.log(title, description ?? "no description");
}

createTask("Buy groceries");             // fine
createTask("Buy groceries", "At noon");  // also fine
```

### Default Parameters

```typescript
function createTask(title: string, status: string = "todo"): void {
  console.log(title, status);
}

createTask("Buy groceries");        // status is "todo"
createTask("Buy groceries", "done"); // status is "done"
```

### Rest Parameters

Collect multiple arguments into a typed array.

```typescript
function logAll(label: string, ...items: string[]): void {
  items.forEach(item => console.log(label, item));
}

logAll("Task:", "Write code", "Test code", "Deploy");
```

### Function Type Expressions

You can describe a function as a type:

```typescript
type Formatter = (value: string) => string;

const uppercase: Formatter = (v) => v.toUpperCase();
const lowercase: Formatter = (v) => v.toLowerCase();
```

### Overloads

Overloads let you define multiple call signatures for the same function.
Use this when a function behaves differently depending on input types.

```typescript
function getTask(id: number): string;
function getTask(title: string): number;
function getTask(value: number | string): string | number {
  if (typeof value === "number") {
    return "Task " + value;
  }
  return value.length;
}
```

The first two lines are the overload signatures. The third is the actual implementation.
Users only see the first two.

### Callbacks

Functions passed as arguments to other functions:

```typescript
function processTask(
  task: { id: number; title: string },
  callback: (result: string) => void
): void {
  callback("Processed: " + task.title);
}
```

---

## Katas

### Shared Katas

**Kata 1 - Basic typed functions**
Write three functions:
- `add(a: number, b: number): number`
- `capitalize(str: string): string` (first letter uppercase)
- `repeat(str: string, times: number): string` (repeats the string)

**Kata 2 - Optional and default parameters**
Write a function `createTask` that takes:
- `title`: required string
- `description`: optional string
- `status`: string with default value `"todo"`
- `priority`: string with default value `"medium"`

Return an object with all four properties.

**Kata 3 - Rest parameters**
Write a function `createTaskList(listName: string, ...taskTitles: string[])` that returns an object:
`{ listName: string; tasks: string[] }`.

**Kata 4 - Function type expressions**
Define two function types:
- `Validator = (value: string) => boolean`
- `Transformer = (value: string) => string`

Then write:
- A `validate` function that takes a value and a `Validator` and returns the result
- A `transform` function that takes a value and a `Transformer` and returns the result

Write two implementations of each type and test them.

**Kata 5 - Overloads**
Write a function `findTask` with two overloads:
- When called with a `number`, it finds by ID and returns a string (the task title)
- When called with a `string`, it finds by title and returns a number (the task ID)

For the implementation, make up fake data. Just return hardcoded values for ID 1 = "Buy groceries".

**Kata 6 - Higher-order function**
Write a function `filterTasks` that takes:
- An array of task objects `{ id: number; title: string; isComplete: boolean }[]`
- A predicate function `(task: ...) => boolean`

It should return a new array with only the tasks where the predicate returns true.
Test it by filtering for incomplete tasks and for tasks with long titles.

---

### Frontend Katas

Open `client/exercise.ts` and complete the TODOs.

**Kata 7 - Event handler types**
In React, event handlers are functions. Write typed handlers:
- `handleSubmit(event: React.FormEvent): void`
- `handleTaskClick(taskId: number): void`
- `handleSearch(query: string, filters?: string[]): void`

Write the function bodies (just log the arguments for now).

**Kata 8 - Fetch helper**
Write a function `fetchTasks(userId: number, status?: string): Promise<void>`.
Inside, log "Fetching tasks for user" + userId + (status if provided).
We will make this return actual data in Scroll 09 with generics.

---

### Backend Katas

Open `server/exercise.ts` and complete the TODOs.

**Kata 9 - Controller method types**
In NestJS, controller methods are typed functions. Write these:
- `getAllTasks(): { id: number; title: string }[]` - returns a hardcoded array
- `getTaskById(id: number): { id: number; title: string } | null` - returns task if id is 1
- `createTask(title: string, description?: string): { id: number; title: string }`

**Kata 10 - Middleware-style function**
Write a function `withLogging<T>(fn: () => T, label: string): T`.
It should log "Starting: " + label, call fn, log "Done: " + label, then return the result.
Test it by wrapping a function that returns a string.
Note: this is a preview of generics (Scroll 09). The `<T>` means "any type". Try to understand it.

---

## Bring it to the Project

**Shared types (`project/shared/index.ts`):**
Add typed function signatures for your API:

```typescript
export type CreateTaskFn = (dto: {
  title: string;
  description?: string;
  status?: TaskStatus;
}) => Promise<Task>;

export type GetTasksFn = (userId: number, status?: TaskStatus) => Promise<Task[]>;

export type DeleteTaskFn = (taskId: number) => Promise<void>;
```

**Frontend:** Write typed event handler functions in your React components.
`handleCreateTask`, `handleDeleteTask`, `handleStatusChange` - all with proper parameter types.

**Backend:** Add proper return type annotations to all your NestJS service methods.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/functions.html

# Scroll 06 - Enums

> *Name your constants. No more typo traps in the dojo.*

Enums (short for enumerations) are a way to give friendly names to a set of related values.
They are like a list of named constants. Instead of writing `"in_progress"` everywhere and hoping
you never make a typo, you write `TaskStatus.InProgress` and TypeScript catches any mistakes.

---

## What You Will Learn

- Numeric enums
- String enums
- Const enums (optimized at compile time)
- Reverse mapping in numeric enums
- When to use enums vs union types
- Real-world enum patterns

---

## Key Concepts

### Numeric Enums

The default. Each member gets a number starting from 0 (or from whatever you set).

```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0
```

You can set the starting number:

```typescript
enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
```

### String Enums

Each member has a string value. These are the most useful kind for application development
because the values are readable when you log or inspect them.

```typescript
enum TaskStatus {
  Todo = "todo",
  InProgress = "in_progress",
  Done = "done",
}

let status: TaskStatus = TaskStatus.Todo;
console.log(status); // "todo" - readable!
```

### Const Enums

Adding `const` makes the enum disappear at compile time. TypeScript replaces every use of the enum
with the actual value. This results in smaller, faster code. Use it when you do not need the enum
to exist as a JavaScript object at runtime.

```typescript
const enum Direction {
  Up = "UP",
  Down = "DOWN",
}

let d: Direction = Direction.Up; // compiles to: let d = "UP"
```

### Reverse Mapping (numeric enums only)

Numeric enums let you look up the name from the value:

```typescript
enum Status {
  Active = 1,
  Inactive = 2,
}

console.log(Status[1]); // "Active"
console.log(Status["Active"]); // 1
```

String enums do not support reverse mapping.

### Enum vs Union Types

Both enums and union types can represent a fixed set of values. When should you use which?

| Use enum when | Use union type when |
|--------------|---------------------|
| You need the values at runtime as an object | You just need type checking |
| You need reverse mapping | You want simple, lightweight types |
| Working with NestJS decorators that expect an enum | Defining response shapes or state |
| You want grouped constants with a namespace | You prefer the short syntax |

In general: use string enums for things like status, role, priority.
Use union types when you just need to constrain a parameter.

---

## Katas

### Shared Katas

**Kata 1 - Basic string enum**
Create a string enum `TaskStatus` with three values: `Todo`, `InProgress`, `Done`.
Map each to a lowercase string: `"todo"`, `"in_progress"`, `"done"`.
Write a function `getStatusLabel(status: TaskStatus): string` that returns a human-friendly label
like "To Do", "In Progress", "Done".

**Kata 2 - Numeric enum with HTTP status codes**
Create a numeric enum `HttpStatus` with:
- `OK = 200`
- `Created = 201`
- `BadRequest = 400`
- `Unauthorized = 401`
- `Forbidden = 403`
- `NotFound = 404`
- `InternalServerError = 500`

Write a function `isSuccess(status: HttpStatus): boolean` that returns true for 200 and 201.

**Kata 3 - Const enum**
Create a `const enum` called `Limit` with:
- `MaxTasksPerUser = 100`
- `MaxTitleLength = 255`
- `MaxDescriptionLength = 1000`

Write a function `validateTitle(title: string): boolean` that returns true if the title length
is within the `MaxTitleLength` limit. Compile the code and look at the output - notice the const
enum values are inlined directly.

**Kata 4 - Enum in an object**
Create a `Priority` string enum: `Low = "low"`, `Medium = "medium"`, `High = "high"`.
Write a function `createTask(title: string, priority: Priority)` that returns a task object.
Try calling it with `"low"` directly (a string) instead of `Priority.Low`.
Notice the error. Then fix it.

**Kata 5 - Iterating over an enum**
Create a numeric enum `Role` with: `Admin = 1`, `Editor = 2`, `Viewer = 3`.
Write code that logs all the enum keys and values using `Object.keys` and `Object.values`.
(Note: numeric enums create reverse mappings, so you will see extra entries. Filter them out
by checking `isNaN(Number(key))`.)

**Kata 6 - Enum vs union comparison**
Take the `TaskStatus` enum from Kata 1 and write the equivalent as a union type.
Then write the same `getStatusLabel` function using the union type version.
Compare both approaches and write a comment on which you prefer and why.

---

### Frontend Katas

Open `client/exercise.ts` and complete the TODOs.

**Kata 7 - Enum for filter state**
In a frontend task list, you might filter by status. Create a `FilterOption` enum:
- `All = "all"`
- `Active = "todo"`
- `InProgress = "in_progress"`
- `Completed = "done"`

Write a function `applyFilter(tasks: { status: string }[], filter: FilterOption)` that returns
only the tasks matching the filter (or all tasks if `FilterOption.All`).

**Kata 8 - Enum in component state**
Write an enum `ModalState` with: `Closed = "closed"`, `CreateTask = "create"`, `EditTask = "edit"`, `DeleteTask = "delete"`.
Declare a variable `currentModal: ModalState` set to `ModalState.Closed`.
Write a function `openModal(modal: ModalState): void` that changes `currentModal` and logs it.
Call it with `ModalState.CreateTask`.

---

### Backend Katas

Open `server/exercise.ts` and complete the TODOs.

**Kata 9 - Enum in service logic**
Create a `UserRole` string enum: `Admin = "admin"`, `User = "user"`.
Write a function `hasPermission(role: UserRole, action: "delete" | "edit" | "view"): boolean`.
Only admins can delete. Admins and users can edit and view.

**Kata 10 - HTTP status enum in responses**
Use the `HttpStatus` enum from Kata 2. Write a function `sendResponse(statusCode: HttpStatus, data: unknown)`
that logs a formatted response object: `{ status: statusCode, body: data }`.
Call it with `HttpStatus.OK` and a fake task, and with `HttpStatus.NotFound` and null.

---

## Bring it to the Project

**Shared types (`project/shared/index.ts`):**
Replace plain string unions with proper enums for things that need to be shared:

```typescript
export enum TaskStatus {
  Todo = "todo",
  InProgress = "in_progress",
  Done = "done",
}

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
```

**Frontend:** Use `TaskStatus.Todo`, `TaskStatus.Done`, etc. in your React components.
Update your filter logic to use the `TaskStatus` enum.

**Backend:** Use these enums in your NestJS services. NestJS also integrates enums into
Swagger documentation automatically.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/enums.html

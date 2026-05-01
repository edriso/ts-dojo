# Topic 11 - Utility Types

TypeScript ships with a set of built-in generic types that help you transform and work with
existing types. You have already used a few (like `Partial` and `Omit` in previous topics).
This topic covers all of them properly.

---

## What You Will Learn

- `Partial<T>` - make all fields optional
- `Required<T>` - make all fields required
- `Readonly<T>` - make all fields readonly
- `Pick<T, K>` - keep only some fields
- `Omit<T, K>` - remove some fields
- `Exclude<T, U>` - remove types from a union
- `Extract<T, U>` - keep only matching types from a union
- `NonNullable<T>` - remove null and undefined
- `ReturnType<T>` - get the return type of a function
- `Parameters<T>` - get the parameter types of a function
- `Record<K, V>` - build an object type from key and value types
- `Awaited<T>` - unwrap a Promise type

---

## Key Concepts

### Partial and Required

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

type UpdateTaskDto = Partial<Task>;
// { id?: number; title?: string; description?: string; status?: string }

type StrictTask = Required<Task>;
// All fields are required (removes ? from all of them)
```

### Readonly

```typescript
type ImmutableTask = Readonly<Task>;
// You can read fields but not change them after creation

const task: ImmutableTask = { id: 1, title: "Buy groceries", description: "", status: "todo" };
task.title = "New title"; // Error! Cannot assign to readonly property
```

### Pick and Omit

```typescript
type TaskSummary = Pick<Task, "id" | "title" | "status">;
// { id: number; title: string; status: string }

type CreateTaskDto = Omit<Task, "id">;
// { title: string; description: string; status: string } - no id needed on creation
```

### Exclude and Extract

These work on union types, not object types.

```typescript
type Status = "todo" | "in_progress" | "done" | "archived";

type ActiveStatus = Exclude<Status, "archived">;
// "todo" | "in_progress" | "done"

type CompletedOrArchived = Extract<Status, "done" | "archived">;
// "done" | "archived"
```

### NonNullable

```typescript
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string
```

### ReturnType and Parameters

These extract information from function types:

```typescript
function createTask(title: string, priority: number): { id: number; title: string } {
  return { id: 1, title };
}

type NewTask = ReturnType<typeof createTask>;
// { id: number; title: string }

type CreateTaskParams = Parameters<typeof createTask>;
// [string, number]

type FirstParam = CreateTaskParams[0]; // string
```

### Record

Build an object type with specific key and value types:

```typescript
type StatusCount = Record<"todo" | "in_progress" | "done", number>;
// { todo: number; in_progress: number; done: number }

type UserSettings = Record<string, boolean>;
// Any string key, boolean value
```

### Awaited

Unwrap nested promises:

```typescript
type A = Awaited<Promise<string>>;            // string
type B = Awaited<Promise<Promise<number>>>;   // number
```

---

## Tasks

### Shared Tasks

**Task 1 - Partial for update DTOs**
Define a full `Task` interface. Then create:
- `UpdateTaskDto = Partial<Omit<Task, "id" | "createdAt">>` (no id/timestamp on updates)
- Write a function `updateTask(id: number, changes: UpdateTaskDto): Task`
  that merges the changes into a hardcoded base task.

**Task 2 - Required for strict validation**
Write a type `DraftTask` where all fields are optional (you are building it step by step).
Then write a function `publishTask(draft: DraftTask): Required<DraftTask>` that:
- Checks all fields are present (log an error if any is missing)
- Returns the draft cast as `Required<DraftTask>`

**Task 3 - Pick for different views**
Given a `User` interface with many fields, use `Pick` to create:
- `UserProfile` - public fields: id, username, avatarUrl
- `UserCredentials` - private fields: email, passwordHash
- `UserPreferences` - settings fields: theme, language, notifications

Then write a function for each view type.

**Task 4 - Record for lookup tables**
Write a type `StatusLabel = Record<"todo" | "in_progress" | "done", string>`.
Create a `statusLabels` object of that type with friendly labels.
Write a function `getStatusLabel(status: "todo" | "in_progress" | "done"): string`
that uses the record for lookup.

**Task 5 - ReturnType and Parameters**
Define this function (do not change it):
```typescript
function fetchTasksFromDb(userId: number, status: string, page: number): { tasks: any[]; total: number } {
  return { tasks: [], total: 0 };
}
```
Without looking at the function definition, extract:
- The return type using `ReturnType<typeof fetchTasksFromDb>`
- The parameters type using `Parameters<typeof fetchTasksFromDb>`
- The type of the second parameter

**Task 6 - Awaited for async return types**
Write an async function `fetchUser(): Promise<{ id: number; username: string }>`.
Use `Awaited<ReturnType<typeof fetchUser>>` to get the resolved type.
This is useful when you need the "inner" type of an async function without calling it.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - Form state with Partial**
A form starts empty and fills up as the user types. Use `Partial<TaskFormData>` to type
the in-progress form state. Write a function `isFormComplete(form: Partial<TaskFormData>): form is TaskFormData`
that checks all required fields are present.

**Task 8 - UI config with Record**
Write a `Record<"todo" | "in_progress" | "done", { label: string; color: string; icon: string }>`.
Use it to build a `getStatusConfig` function that returns the UI config for a status.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - Endpoint response shaping with Pick**
The full `Task` object has internal fields (like `passwordHash` for users).
Write a `TaskRepository` class whose `findAll()` returns `Task[]` (full objects internally),
but expose a `getPublicTask` function that returns `Pick<Task, "id" | "title" | "status">`.

**Task 10 - Type-safe cache with Record**
Write a class `TaskCache` that uses `Record<number, Task>` as its internal store.
Methods:
- `set(task: Task): void`
- `get(id: number): Task | undefined`
- `invalidate(id: number): void`
- `getAll(): Task[]`

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Use utility types to derive everything cleanly:

```typescript
export type CreateTaskDto = Omit<Task, "id" | "createdAt" | "updatedAt" | "isComplete"> & {
  status?: TaskStatus;
};

export type UpdateTaskDto = Partial<CreateTaskDto>;

export type TaskSummary = Pick<Task, "id" | "title" | "status" | "isComplete" | "dueDate">;

export type UserPublic = Omit<User, "passwordHash">;  // if you have passwordHash in User

export type StatusConfig = Record<TaskStatus, { label: string; color: string }>;
```

**Frontend:** Create a `statusConfig` object typed as `StatusConfig` with labels and colors.
Use it to render task status badges.

**Backend:** Use `Omit` and `Pick` to control what data gets sent to the frontend.
Never accidentally send sensitive fields.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/utility-types.html

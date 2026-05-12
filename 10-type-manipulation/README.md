# Scroll 10 - Type Manipulation

> *Forge new types from old ones. The type smith's craft.*

This is where TypeScript gets really powerful. Instead of writing types by hand, you can
create new types by transforming existing ones. This is the foundation of advanced TypeScript
patterns you will see in large codebases and libraries.

---

## What You Will Learn

- `keyof` operator - get all keys of a type as a union
- `typeof` operator - get the type of a value
- Indexed access types - look up a specific field's type
- Conditional types - if/else at the type level
- Mapped types - transform every field of a type
- Template literal types - build string types dynamically
- The `infer` keyword

---

## Key Concepts

### keyof

`keyof T` gives you a union of all property names of type `T`.

```typescript
interface Task {
  id: number;
  title: string;
  status: string;
}

type TaskKeys = keyof Task; // "id" | "title" | "status"

function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // fully type-safe!
}
```

### typeof (in type position)

Used to get the TypeScript type of a variable or value:

```typescript
const config = {
  port: 3000,
  host: "localhost",
};

type Config = typeof config;
// { port: number; host: string }
```

Very useful with `const` arrays to avoid writing the type twice.

### Indexed Access Types

Look up the type of a specific property:

```typescript
type Task = { id: number; title: string; tags: string[] };

type TaskId = Task["id"];      // number
type TaskTitle = Task["title"]; // string
type TaskTags = Task["tags"];   // string[]
type TagItem = Task["tags"][number]; // string (type of array element)
```

### Conditional Types

If/else at the type level. `T extends U ? A : B` means: if T is assignable to U, use A, otherwise B.

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

type NonNullable<T> = T extends null | undefined ? never : T;
```

### Mapped Types

Create a new type by transforming every property in an existing type:

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Stringify<T> = {
  [K in keyof T]: string; // make every value a string
};
```

### Template Literal Types

Build new string types by combining string literals:

```typescript
type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"

type GetterName<T extends string> = `get${Capitalize<T>}`;
type IdGetter = GetterName<"user">; // "getUser"
```

### infer

Used inside conditional types to "capture" a type that TypeScript figures out:

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function createTask(): { id: number; title: string } {
  return { id: 1, title: "hello" };
}

type Created = ReturnType<typeof createTask>; // { id: number; title: string }
```

---

## Katas

### Shared Katas

**Kata 1 - keyof**
Given this interface:
```typescript
interface Task {
  id: number;
  title: string;
  status: string;
  isComplete: boolean;
  createdAt: string;
}
```
Create a type `TaskKey = keyof Task`.
Write a function `getTaskField<K extends keyof Task>(task: Task, key: K): Task[K]`.
Call it 3 times with different field names.

**Kata 2 - typeof**
Define a config object (not a type, a real value):
```
const defaultConfig = { port: 3000, env: "development", maxTasks: 100 }
```
Use `typeof` to create a `Config` type from it.
Write a function `mergeConfig(base: Config, overrides: Partial<Config>): Config`.

**Kata 3 - Indexed access**
Given a `User` interface with a `preferences` field that is an object with `theme`, `language`, `notifications`.
Use indexed access types to extract:
- The type of the `preferences` field
- The type of `preferences.theme`
Write them as separate type aliases.

**Kata 4 - Conditional types**
Write these conditional types:
- `IsArray<T>` - true if T is an array, false otherwise
- `Flatten<T>` - if T is an array, return the element type; otherwise return T
  - `Flatten<string[]>` = string
  - `Flatten<string>` = string
- `Nullable<T>` - adds null to the type

**Kata 5 - Mapped types**
Write these mapped types:
- `ReadonlyObject<T>` - makes all fields readonly
- `OptionalObject<T>` - makes all fields optional
- `NullableObject<T>` - makes all fields `T[key] | null`
- `RequiredObject<T>` - removes the `?` from all optional fields (opposite of Optional)

Test each one on the `Task` interface.

**Kata 6 - Template literal types**
Given `type Field = "title" | "status" | "description"`:
- Create `GetterMethod = "getTitle" | "getStatus" | "getDescription"` using template literals
- Create `SetterMethod = "setTitle" | "setStatus" | "setDescription"` using template literals
- Write a type `EventHandler<T extends string> = `on${Capitalize<T>}Changed``
  Test: `EventHandler<"task">` should be `"onTaskChanged"`.

---

### Frontend Katas

Open `client/exercise.ts` and complete the TODOs.

**Kata 7 - Component prop extractor**
Given a complex component props type, use indexed access to extract sub-types:
```typescript
type TaskFormProps = {
  task: { id: number; title: string; status: string; tags: string[] };
  onSubmit: (data: { title: string; status: string }) => void;
  onCancel: () => void;
};
```
Extract:
- `TaskData = TaskFormProps["task"]`
- `TaskTag = TaskFormProps["task"]["tags"][number]`
- `SubmitData = Parameters<TaskFormProps["onSubmit"]>[0]`

**Kata 8 - CSS class mapper**
Using template literals, write a type that generates class names:
```typescript
type Size = "sm" | "md" | "lg";
type Color = "blue" | "red" | "green";
type ButtonClass = `btn-${Size}-${Color}`;
// "btn-sm-blue" | "btn-sm-red" | ... 9 combinations
```
Write a function `createButtonClass(size: Size, color: Color): ButtonClass`.

---

### Backend Katas

Open `server/exercise.ts` and complete the TODOs.

**Kata 9 - DTO builder with mapped types**
Given a full `Task` interface, use mapped types to automatically derive DTO types:
- `CreateTaskDto = Omit<Task, "id" | "createdAt" | "updatedAt"> + make status optional`
- `UpdateTaskDto = Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>`
- `TaskResponse = Readonly<Task>`

Write these as type aliases using mapped types and built-in utility types.

**Kata 10 - Event system with template literals**
Write a type system for typed backend events:
```typescript
type ResourceName = "task" | "user" | "comment";
type ActionName = "created" | "updated" | "deleted";
type EventName = `${ResourceName}.${ActionName}`;
// "task.created" | "task.updated" | ... 9 events
```
Write a function `emitEvent(event: EventName, data: unknown): void` that logs the event.

---

## Bring it to the Project

**Shared types (`project/shared/index.ts`):**
Use type manipulation to derive DTOs instead of writing them by hand:

```typescript
export type CreateTaskDto = Omit<Task, "id" | "createdAt" | "updatedAt"> & {
  status?: TaskStatus;
};

export type UpdateTaskDto = Partial<CreateTaskDto>;

export type TaskSummary = Pick<Task, "id" | "title" | "status" | "isComplete">;

export type TaskFields = keyof Task;
```

This means when you change `Task`, all DTOs update automatically.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
- https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
- https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
- https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
- https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

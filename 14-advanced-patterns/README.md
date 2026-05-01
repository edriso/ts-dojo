# Topic 14 - Advanced Patterns

This topic covers patterns that separate good TypeScript from great TypeScript.
These are the techniques you will recognize in mature codebases and in TypeScript's own source code.

---

## What You Will Learn

- The `satisfies` operator
- Declaration merging
- Module augmentation
- Mixins
- Branded (nominal) types
- Recursive types
- Variadic tuple types
- The `const` assertion

---

## Key Concepts

### The satisfies Operator

`satisfies` checks that a value matches a type, but does NOT widen the type.
This preserves the literal types while still validating shape:

```typescript
type Colors = Record<string, [number, number, number] | string>;

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
} satisfies Colors;

// palette.red is still typed as [number, number, number], not [number, number, number] | string
// Without satisfies, you lose that narrowness
```

### Const Assertion

`as const` freezes a value and makes TypeScript infer the narrowest possible type:

```typescript
const statuses = ["todo", "in_progress", "done"] as const;
// Type is: readonly ["todo", "in_progress", "done"]
// Not just: string[]

type Status = typeof statuses[number]; // "todo" | "in_progress" | "done"
```

### Branded Types (Nominal Types)

TypeScript uses structural typing, meaning any object with the right shape is accepted.
Branded types add a unique "brand" tag to prevent accidentally mixing up types that
have the same structure but different meanings:

```typescript
type UserId = number & { readonly __brand: "UserId" };
type TaskId = number & { readonly __brand: "TaskId" };

function createUserId(id: number): UserId {
  return id as UserId;
}

function deleteTask(taskId: TaskId): void {}

const userId = createUserId(1);
deleteTask(userId); // Error! UserId is not assignable to TaskId
```

Without branding, `deleteTask(userId)` would be valid because both are just numbers.

### Recursive Types

A type that refers to itself. Used for tree structures, JSON, nested objects:

```typescript
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};
```

### Declaration Merging

TypeScript merges multiple declarations of the same interface:

```typescript
interface Config {
  port: number;
}

interface Config {
  host: string;
}

// TypeScript sees: { port: number; host: string }
```

This is how `@types/express` adds types to the `express` module without modifying it.

### Mixins

Mixins let you compose classes from reusable behaviors:

```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date().toISOString();
    updatedAt = new Date().toISOString();

    touch() {
      this.updatedAt = new Date().toISOString();
    }
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = true;
    activate() { this.isActive = true; }
    deactivate() { this.isActive = false; }
  };
}

class User {
  constructor(public username: string) {}
}

const TimestampedActivatableUser = Timestamped(Activatable(User));
const user = new TimestampedActivatableUser("Ahmed");
user.activate();
user.touch();
```

---

## Tasks

### Shared Tasks

**Task 1 - satisfies**
Create a config object and use `satisfies` to validate it against a type without losing precision:

```typescript
type AppConfig = {
  port: number;
  features: Record<string, boolean>;
  env: "development" | "production" | "test";
};
```

Without `satisfies`, accessing `config.env` gives `"development" | "production" | "test"`.
With `satisfies`, it gives the exact literal like `"development"`. Try both and compare.

**Task 2 - as const**
Write an array of all task statuses as a `const` assertion.
Then derive the `TaskStatus` union type from it using `typeof arr[number]`.
This way you never have to write the union type manually.

**Task 3 - Branded types**
Create branded types for `UserId`, `TaskId`, and `CommentId` (all are numbers underneath).
Write `createUserId`, `createTaskId`, `createCommentId` factory functions.
Write a function `assignTask(taskId: TaskId, userId: UserId): void`.
Try calling it with a `CommentId` in place of a `TaskId` and see the error.

**Task 4 - Recursive type**
Write a type `TreeNode<T>` that represents a tree:
```typescript
type TreeNode<T> = { value: T; children: TreeNode<T>[] };
```
Build a small task category tree using this type and write a function
`printTree<T>(node: TreeNode<T>, depth: number = 0): void` that prints it with indentation.

**Task 5 - JSON type**
Write the `JSONValue` recursive type. Then write:
- `function parseConfig(json: string): JSONValue` that parses JSON safely
- `function isObject(value: JSONValue): value is Record<string, JSONValue>` type guard
- `function deepGet(obj: Record<string, JSONValue>, path: string[]): JSONValue | undefined`
  that navigates a nested path like `["user", "settings", "theme"]`

**Task 6 - Mixin**
Write a `Serializable` mixin that adds:
- `serialize(): string` - returns `JSON.stringify(this)`
- `static deserialize<T>(json: string): T` - returns `JSON.parse(json)`

Apply it to a `Task` class. Test serializing and deserializing a task.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - satisfies for route config**
Write a route config using `satisfies`:
```typescript
type RouteConfig = Record<string, { path: string; title: string; requiresAuth: boolean }>;
```
Create the config and use `satisfies RouteConfig` to validate it.
Then access a specific route's `path` and notice TypeScript knows the exact string.

**Task 8 - Branded types for DOM ids**
Create branded types `TaskElementId` and `UserElementId` (both are strings).
Write a function `getElementById<T extends string>(id: T): HTMLElement | null` where the id
must match a branded type. This prevents passing a wrong id to the wrong function.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - Builder pattern with TypeScript**
Write a type-safe builder for task queries:

```typescript
class TaskQueryBuilder {
  private query: { status?: string; userId?: number; page?: number; pageSize?: number } = {};

  withStatus(status: string): this { this.query.status = status; return this; }
  forUser(userId: number): this { this.query.userId = userId; return this; }
  paginate(page: number, size: number): this { ... }
  build(): typeof this.query { return this.query; }
}
```

**Task 10 - Environment config with satisfies**
Write an environment config that uses `satisfies` to validate it:
```typescript
type Env = {
  NODE_ENV: "development" | "production" | "test";
  PORT: string;
  DATABASE_URL: string;
  JWT_SECRET: string;
};
```
This pattern is used to validate `process.env` in real NestJS apps.

---

## Apply to the Project

**Shared - Use branded types for IDs:**

```typescript
export type UserId = number & { readonly _brand: "UserId" };
export type TaskId = number & { readonly _brand: "TaskId" };

export function asUserId(id: number): UserId { return id as UserId; }
export function asTaskId(id: number): TaskId { return id as TaskId; }
```

Update your `Task` and `User` interfaces to use `TaskId` and `UserId`.
Now TypeScript will prevent you from accidentally passing a task ID where a user ID is expected.

**Frontend:** Use `as const` for all your string-array constants (status lists, role lists).
Derive union types from them instead of writing them manually.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
- https://www.typescriptlang.org/docs/handbook/mixins.html
- https://www.typescriptlang.org/docs/handbook/declaration-merging.html

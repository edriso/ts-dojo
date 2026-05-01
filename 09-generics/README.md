# Topic 09 - Generics

Generics are one of the most powerful features in TypeScript. They let you write code that works
with any type while still being fully type-safe. Instead of writing the same function five times
for strings, numbers, tasks, users, etc., you write it once and let the caller decide the type.

---

## What You Will Learn

- Generic functions
- Generic interfaces and type aliases
- Generic classes
- Type constraints with `extends`
- Default type parameters
- Multiple type parameters
- Using generics in React and NestJS patterns

---

## Key Concepts

### Generic Functions

The `<T>` is a type parameter, a placeholder that gets replaced with a real type when you call the function.

```typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello"); // T is string
identity<number>(42);      // T is number
identity("hello");         // T is inferred as string automatically
```

### Generic Arrays

```typescript
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

firstItem([1, 2, 3]);        // returns number | undefined
firstItem(["a", "b"]);       // returns string | undefined
```

### Generic Interfaces and Types

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
}

type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

const taskResponse: ApiResponse<{ id: number; title: string }> = {
  success: true,
  data: { id: 1, title: "Buy groceries" },
  error: null,
};
```

### Generic Classes

```typescript
class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  findAll(): T[] {
    return [...this.items];
  }
}

const taskRepo = new Repository<{ id: number; title: string }>();
taskRepo.add({ id: 1, title: "Buy groceries" });
```

### Type Constraints with `extends`

Constraints limit what types can be used with a generic. This gives you access to properties
that TypeScript knows every possible T will have.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const task = { id: 1, title: "Buy groceries" };
getProperty(task, "title"); // fine
getProperty(task, "foo");   // Error! "foo" is not a key of task
```

### Default Type Parameters

```typescript
interface FetchState<T = unknown> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

let state: FetchState;           // data is unknown | null
let state2: FetchState<string>;  // data is string | null
```

### Multiple Type Parameters

```typescript
function merge<A, B>(a: A, b: B): A & B {
  return { ...a as object, ...b as object } as A & B;
}

const result = merge({ name: "Ahmed" }, { age: 25 });
// result is { name: string } & { age: number }
```

---

## Tasks

### Shared Tasks

**Task 1 - Basic generic function**
Write a generic function `wrapInArray<T>(value: T): T[]` that returns `[value]`.
Test it with a string, a number, and an object.

**Task 2 - Generic pair**
Write a generic type `Pair<A, B> = { first: A; second: B }`.
Write a function `swap<A, B>(pair: Pair<A, B>): Pair<B, A>` that swaps first and second.
Test it with a `Pair<string, number>`.

**Task 3 - Generic collection class**
Write a generic class `TypedList<T>` with:
- Private `items: T[]`
- `add(item: T): void`
- `remove(index: number): T` (removes and returns the item at that index)
- `get(index: number): T`
- `getAll(): T[]`
- `size(): number`

Test it with `TypedList<string>` and `TypedList<{ id: number; title: string }>`.

**Task 4 - Constrained generic**
Write a function `getField<T, K extends keyof T>(obj: T, field: K): T[K]`.
This is the classic "safe property access" pattern.
Test it on a task object with different field names.
Try passing an invalid field name and see the error.

**Task 5 - Generic ApiResponse**
Write a generic type `ApiResponse<T>` with:
- `success: true; data: T` OR `success: false; error: string`
(This is a discriminated union where one branch is generic.)

Write two helper functions:
- `ok<T>(data: T): ApiResponse<T>` - returns success response
- `fail(error: string): ApiResponse<never>` - returns error response

**Task 6 - Generic repository**
Write an interface `IRepository<T extends { id: number }>` with:
- `findById(id: number): T | undefined`
- `findAll(): T[]`
- `save(item: T): void`
- `delete(id: number): boolean`

Then implement it in a class `InMemoryRepository<T extends { id: number }>`.
Test it by creating `new InMemoryRepository<{ id: number; title: string }>()`.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - Generic useFetch hook (simulated)**
Write a generic function `createFetchState<T>()` that returns a `FetchState<T>` object:
```typescript
type FetchState<T> = {
  loading: boolean;
  data: T | null;
  error: string | null;
};
```
Call it as `createFetchState<{ id: number; title: string }[]>()`.

**Task 8 - Generic list component helper**
Write a generic function:
`renderList<T>(items: T[], renderItem: (item: T, index: number) => string): string`
It should call `renderItem` for each item and join the results with `\n`.
Test it with an array of tasks and an array of usernames.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - Generic service base class**
Write a generic abstract class `BaseService<T extends { id: number }>` with:
- Protected `items: T[] = []`
- `findAll(): T[]`
- `findOne(id: number): T | undefined`
- Abstract `create(...args: any[]): T`
- `remove(id: number): boolean`

Then write `TasksService extends BaseService<Task>` and implement `create`.

**Task 10 - Generic paginate function**
Write a generic function:
`paginate<T>(items: T[], page: number, pageSize: number): { items: T[]; total: number; page: number; totalPages: number }`

Test it with an array of 20 tasks, page 2, pageSize 5.

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Make ApiResponse generic (you previewed this in topic 04):

```typescript
export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  statusCode: number;
  message: string;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export function ok<T>(data: T): ApiSuccess<T> {
  return { success: true, data };
}

export function fail(statusCode: number, message: string): ApiError {
  return { success: false, statusCode, message };
}
```

**Frontend:** Use `ApiResponse<Task[]>` as the type for your fetch results.

**Backend:** Use `ApiResponse<T>` as the return type of your controller methods.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/generics.html

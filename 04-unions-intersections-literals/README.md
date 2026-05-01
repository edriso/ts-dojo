# Topic 04 - Unions, Intersections, and Literal Types

Unions let a value be one of several types. Intersections combine multiple types into one.
Literal types let you say "this value must be exactly this specific string or number."
Together, these three tools make your types much more precise.

---

## What You Will Learn

- Union types with `|`
- Intersection types with `&`
- Literal types (string literals, number literals, boolean literals)
- Discriminated unions - the most powerful pattern in TypeScript
- When to use union vs interface extension

---

## Key Concepts

### Union Types

A union says: this value can be type A or type B.

```typescript
let id: string | number;
id = "abc-123";   // fine
id = 42;          // also fine
id = true;        // Error!

function printId(id: string | number) {
  console.log("ID:", id);
}
```

### Intersection Types

An intersection says: this value must satisfy type A AND type B.

```typescript
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const person: Person = { name: "Ahmed", age: 25 };  // needs both
```

### Literal Types

Instead of saying "any string", you say "this exact string":

```typescript
type Direction = "north" | "south" | "east" | "west";
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type Yes = true;  // can only be true

let move: Direction = "north";  // fine
move = "up";                    // Error! "up" is not a Direction
```

### Discriminated Unions

This is the most important pattern in this topic. A discriminated union is a union of object types
where each type has a common field (called the discriminant) with a unique literal value.

```typescript
type SuccessResponse = {
  status: "success";
  data: string[];
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log(response.data);    // TypeScript knows this is SuccessResponse
  } else {
    console.log(response.message); // TypeScript knows this is ErrorResponse
  }
}
```

The `status` field is the discriminant. TypeScript uses it to figure out which type you are dealing with.
This eliminates a huge amount of runtime errors.

---

## Tasks

### Shared Tasks

**Task 1 - Union with primitives**
Write a function `formatId` that takes a parameter `id: string | number`.
Inside, if the id is a number, multiply it by 100 and return the result as a string.
If it is already a string, return it as-is.
Hint: use `typeof id === "number"` to check.

**Task 2 - Literal types**
Define a type `TaskStatus` as a union of exactly three string literals: `"todo"`, `"in_progress"`, `"done"`.
Define a type `Priority` as a union of: `"low"`, `"medium"`, `"high"`.
Write a function `getStatusLabel(status: TaskStatus): string` that returns a human-readable string for each status.

**Task 3 - Intersection types**
Create two types:
- `WithTimestamps`: `{ createdAt: string; updatedAt: string }`
- `WithSoftDelete`: `{ deletedAt: string | null; isDeleted: boolean }`

Then create a type `AuditableTask` that is an intersection of a basic `Task` type (id, title) and both of the above.
Create an object of type `AuditableTask`.

**Task 4 - Discriminated union**
Write a discriminated union for the result of saving a task:
- `SaveSuccess`: `{ type: "success"; savedTask: { id: number; title: string } }`
- `SaveError`: `{ type: "error"; errorCode: number; message: string }`
- `SaveValidationError`: `{ type: "validation_error"; fields: string[] }`

Then write a function `handleSaveResult` that takes `SaveSuccess | SaveError | SaveValidationError`
and logs a different message for each case. Use the `type` field as the discriminant.

**Task 5 - Union in function return**
Write a function `findTask(id: number): { id: number; title: string } | null`.
If the id is 1, return a fake task object. Otherwise return null.
Then call it twice and handle both cases (check for null before accessing `.title`).

**Task 6 - Exhaustiveness check**
Take the `handleSaveResult` function from Task 4 and add a fourth case at the end:
```typescript
default:
  const _exhaustive: never = result;  // will error if you add a new type and forget this
```
This is a pattern called an exhaustiveness check. If you later add a new type to the union
and forget to handle it here, TypeScript will give you an error.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - Component state union**
In a frontend app, a page can be in different states. Write a discriminated union for a task detail page:
- `LoadingState`: `{ state: "loading" }`
- `SuccessState`: `{ state: "success"; task: { id: number; title: string; status: string } }`
- `ErrorState`: `{ state: "error"; message: string }`

Then write a function `renderPage` that takes one of these states and logs what should be shown.

**Task 8 - Event type union**
Write a union type `TaskAction` for things a user can do:
- `{ type: "create"; title: string }`
- `{ type: "delete"; taskId: number }`
- `{ type: "toggle"; taskId: number; currentStatus: string }`

Write a function `dispatchAction(action: TaskAction): void` that handles each action type.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - API response discriminated union**
Write a discriminated union for all API responses your backend can send:
- `SuccessResponse<T>`: skip the generic for now, use `{ success: true; data: unknown }`
- `ErrorResponse`: `{ success: false; statusCode: number; message: string }`

Write a helper function `ok(data: unknown)` that returns a `SuccessResponse`
and `fail(statusCode: number, message: string)` that returns an `ErrorResponse`.

**Task 10 - Role-based access**
Write a union type `UserRole = "admin" | "editor" | "viewer"`.
Write a function `canDeleteTask(role: UserRole): boolean` that returns true only for "admin".
Write a function `canEditTask(role: UserRole): boolean` that returns true for "admin" and "editor".

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Replace the simple string types with proper discriminated unions and literals:

```typescript
export type TaskStatus = "todo" | "in_progress" | "done";
export type UserRole = "admin" | "user";
export type Priority = "low" | "medium" | "high";

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
```

**Frontend:** Use the `ApiResponse` type when handling fetch results.

**Backend:** Use the `ApiResponse` type as the return type of your controller methods.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

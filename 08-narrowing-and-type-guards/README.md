# Topic 08 - Narrowing and Type Guards

When TypeScript is not sure what type a value is (for example, it could be `string | number`),
you have to narrow it down before you can use it safely. Narrowing is how you help TypeScript
understand exactly what type it is in a specific part of your code.

---

## What You Will Learn

- `typeof` narrowing
- `instanceof` narrowing
- The `in` operator for narrowing
- Custom type guard functions with `value is Type`
- Assertion functions
- Discriminated union narrowing (review from topic 04)
- Exhaustiveness checking with `never`
- Truthiness narrowing

---

## Key Concepts

### typeof Narrowing

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's a string here
  } else {
    console.log(value * 2); // TypeScript knows it's a number here
  }
}
```

### Truthiness Narrowing

```typescript
function printTitle(title: string | null | undefined) {
  if (title) {
    console.log(title.toUpperCase()); // title is string here, not null or undefined
  } else {
    console.log("No title provided");
  }
}
```

### instanceof Narrowing

```typescript
class NetworkError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function handleError(error: Error | NetworkError) {
  if (error instanceof NetworkError) {
    console.log("Status:", error.statusCode); // TypeScript knows it's NetworkError
  } else {
    console.log("Error:", error.message);
  }
}
```

### The `in` Operator

Check if an object has a specific property:

```typescript
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(animal: Cat | Dog) {
  if ("meow" in animal) {
    animal.meow(); // TypeScript knows it's a Cat
  } else {
    animal.bark(); // TypeScript knows it's a Dog
  }
}
```

### Custom Type Guards

A function that returns `value is Type` tells TypeScript to narrow the type when the function returns true.

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isTask(value: unknown): value is { id: number; title: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "title" in value
  );
}
```

### Assertion Functions

An assertion function throws if a condition is not met. TypeScript narrows the type after the call.

```typescript
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected a string, got " + typeof value);
  }
}

let input: unknown = "hello";
assertIsString(input);
console.log(input.toUpperCase()); // TypeScript now knows it's a string
```

### Exhaustiveness Check

When you have handled all cases of a discriminated union, use `never` to make TypeScript
warn you if a new case is added but not handled:

```typescript
type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _never: never = shape; // Error if a new shape is added but not handled
      return _never;
  }
}
```

---

## Tasks

### Shared Tasks

**Task 1 - typeof narrowing**
Write a function `stringify(value: string | number | boolean): string`.
Use typeof to handle each case:
- string: return it as-is with quotes around it (e.g. `'"hello"'`)
- number: return `"number:" + value`
- boolean: return `"yes"` for true and `"no"` for false

**Task 2 - Truthiness narrowing**
Write a function `getTaskDescription(description: string | null | undefined): string`.
If description is a non-empty string, return it.
If it is an empty string, return "Description is empty".
If it is null or undefined, return "No description provided".

**Task 3 - in operator**
Write two types:
- `AdminUser`: has a `permissions: string[]` property
- `RegularUser`: has a `savedTaskIds: number[]` property

Both have `id: number` and `username: string`.
Write a function `getUserDashboard(user: AdminUser | RegularUser): string`
that uses `"permissions" in user` to narrow and returns different strings.

**Task 4 - Custom type guard**
Write a type guard function `isTask(value: unknown): value is { id: number; title: string }`.
It should return true only if:
- value is not null
- value is an object
- "id" in value and "title" in value
- typeof (value as any).id === "number"
- typeof (value as any).title === "string"

Then write a function `processApiResponse(data: unknown): string` that uses this guard
to safely access `data.title` if it is a task.

**Task 5 - Assertion function**
Write `assertIsDefined<T>(value: T | null | undefined): asserts value is T`.
It should throw `new Error("Value is null or undefined")` if the value is null or undefined.
Then use it to safely access a possibly-null task title.

**Task 6 - Exhaustiveness check**
Write a type `TaskStatus = "todo" | "in_progress" | "done"`.
Write a function `getStatusIcon(status: TaskStatus): string` using a switch statement.
Add an exhaustiveness check at the default case.
Then add `"archived"` to the union type and see how TypeScript immediately warns you
that `getStatusIcon` needs to handle it.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - Narrowing in a React component**
Write a function `renderTaskItem(item: { id: number; title: string } | string | null): string`.
- If it is null, return "Nothing to show"
- If it is a string, return "Label: " + item
- If it is an object, return "Task #" + item.id + ": " + item.title

**Task 8 - Type guard for API validation**
When your frontend receives data from an API, you cannot trust its shape.
Write a type guard `isUserObject(data: unknown): data is { id: number; username: string; email: string }`.
Then write a function `handleLoginResponse(data: unknown): void`
that uses the guard to safely log the username, or throws an error if the data is not a user.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - Assertion for request validation**
In a backend, you need to validate incoming request data.
Write an assertion function `assertIsString(value: unknown, fieldName: string): asserts value is string`.
If value is not a string, throw `new Error(fieldName + " must be a string")`.
Then write a `validateCreateTaskBody(body: unknown): { title: string; description: string | undefined }`.
Use the assertion function to validate and narrow the title field.

**Task 10 - instanceof error handling**
Write a custom error class `AppError extends Error` with a `statusCode: number` property.
Write a function `handleServiceError(error: unknown): void`.
If it is an `AppError`, log the statusCode and message.
If it is a regular `Error`, log just the message.
Otherwise, log "Unknown error occurred".
Test it by calling with all three error types.

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Add type guard functions:

```typescript
export function isTask(value: unknown): value is Task {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "title" in value &&
    "status" in value
  );
}

export function isApiSuccess<T>(
  response: ApiResponse<T>
): response is ApiSuccess<T> {
  return response.success === true;
}
```

**Frontend:** Use `isApiSuccess` when handling fetch responses so TypeScript knows
when you have data vs an error.

**Backend:** Use assertion functions in your validation logic before creating tasks.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/narrowing.html

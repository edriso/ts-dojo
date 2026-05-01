# Topic 03 - Type Aliases and Interfaces

When you write TypeScript, you will constantly need to describe the shape of objects.
Both `type` and `interface` let you do this, and they are very similar. This topic covers
both, explains the differences, and teaches you when to use each one.

---

## What You Will Learn

- How to write a `type` alias
- How to write an `interface`
- The key differences between them
- How to extend both types and interfaces
- Declaration merging (a unique feature of interfaces)
- When to use `type` vs `interface`

---

## Key Concepts

### Type Alias

A `type` alias gives a name to any type - a primitive, a union, an object, anything.

```typescript
type UserId = number;
type Status = "active" | "inactive";

type User = {
  id: UserId;
  name: string;
  status: Status;
};
```

### Interface

An `interface` describes the shape of an object. It is the classic way to define object types.

```typescript
interface User {
  id: number;
  name: string;
  status: string;
}
```

### Extending

Both support extending, but the syntax is different.

```typescript
// Extending an interface
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// Extending a type alias (using intersection)
type Animal = { name: string };
type Dog = Animal & { breed: string };
```

### The Key Differences

| Feature | type | interface |
|---------|------|-----------|
| Object shapes | Yes | Yes |
| Primitives and unions | Yes | No |
| Extending | Using & | Using extends |
| Declaration merging | No | Yes |
| Can be used in classes with `implements` | No | Yes |

### Declaration Merging

If you declare the same interface twice, TypeScript merges them. This does not work with `type`.

```typescript
interface User {
  id: number;
}
interface User {
  name: string;
}
// TypeScript sees this as: { id: number; name: string }
```

This is how `@types` packages add types to libraries.

### When to Use Which

- Use `interface` for objects that represent a "thing" (User, Task, Product)
- Use `type` for unions, primitives, function signatures, or complex compositions
- Prefer `interface` when you expect others to extend it (like in a library)
- In practice, you can use either for simple objects - just be consistent

---

## Tasks

### Shared Tasks

**Task 1 - Your first interface**
Define an interface called `Task` with:
- `id`: number
- `title`: string
- `description`: string
- `isComplete`: boolean
- `createdAt`: string

Create two objects that match this interface and log them.

**Task 2 - Your first type alias**
Define a type alias called `ApiResponse` with:
- `success`: boolean
- `message`: string
- `data`: unknown

Create one object matching this type and log it.

**Task 3 - Extending an interface**
Create an interface `BaseEntity` with `id: number` and `createdAt: string`.
Then create interfaces `Task` and `User` that both extend `BaseEntity`.
Add relevant fields to each. This is a pattern you will use constantly.

**Task 4 - Extending a type alias**
Do the same as Task 3 but using `type` aliases and the `&` intersection operator.
See how the syntax differs.

**Task 5 - Interface vs type with unions**
Try to write a type alias that is `string | number` (a union).
Now try to do the same with `interface`. Notice that `interface` cannot do this.
This is one reason `type` exists.

**Task 6 - implements in a class (preview)**
Define an interface `Printable` with a method `print(): void`.
Then write a class `TaskDocument` that `implements Printable`.
Inside the `print` method, just log the class name.
We cover classes properly in topic 07, but try this now.

**Task 7 - Declaration merging**
Declare an interface `Config` twice:
- First: `{ port: number }`
- Second: `{ host: string }`

Then create an object that satisfies both (TypeScript merges them automatically).
Try the same with `type` and see the error.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 8 - Define component prop types**
In Vue 3, you can define props with TypeScript interfaces. Write an interface called
`TaskCardProps` with:
- `taskId`: number
- `title`: string
- `status`: string
- `isComplete`: boolean

Then write an interface `TaskListProps` with:
- `tasks`: array of `TaskCardProps`
- `onSelect`: a function that takes a taskId (number) and returns void (function type syntax: `(taskId: number) => void`)

**Task 9 - Reusable response type**
Write a generic-looking (non-generic for now) type alias `FetchState` with:
- `loading`: boolean
- `error`: string | null
- `data`: unknown

We will make this generic in topic 09. For now, `unknown` is fine.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 10 - DTO interface**
In NestJS, DTOs (Data Transfer Objects) describe the shape of request bodies.
Write an interface `CreateTaskDto` with:
- `title`: string
- `description`: string (optional - add `?` after the name)
- `dueDate`: string (optional)

Write another interface `UpdateTaskDto` with all fields optional.

**Task 11 - Service interface**
Write an interface `TaskService` that describes what a task service can do:
- `findAll(): Task[]` (returns an array of Task)
- `findById(id: number): Task | undefined`
- `create(dto: CreateTaskDto): Task`
- `delete(id: number): void`

You do not need to implement it yet. Just define the interface.

---

## Apply to the Project

**Shared types (`project/shared/index.ts`):**
Replace the simple types you wrote before with proper interfaces using `extends`:

```typescript
export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = "todo" | "in_progress" | "done";
export type UserRole = "admin" | "user";

export interface Task extends BaseEntity {
  title: string;
  description: string | null;
  status: TaskStatus;
  isComplete: boolean;
  dueDate: string | null;
  assignedToUserId: number | null;
}

export interface User extends BaseEntity {
  username: string;
  email: string;
  role: UserRole;
}
```

**Frontend:** Import these types and use them to type your component state.

**Backend:** Import these types and use them in your NestJS services.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/objects.html
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

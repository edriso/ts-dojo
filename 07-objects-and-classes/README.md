# Topic 07 - Objects and Classes

Objects are the basic building blocks of most TypeScript apps. Classes add structure and behavior
to those objects using object-oriented programming. NestJS is entirely built around classes,
and even in Vue/React you will use classes for things like service layers and state management.

---

## What You Will Learn

- Deep dive into object types
- Optional and readonly properties
- Index signatures
- Class basics in TypeScript
- Access modifiers: `public`, `private`, `protected`
- `readonly` class properties
- `static` members
- Abstract classes
- Implementing interfaces with `implements`
- Constructor parameter shorthand

---

## Key Concepts

### Object Types

You already know these from topic 03. A few more details:

```typescript
type Task = {
  readonly id: number;          // cannot be changed after creation
  title: string;
  description?: string;          // optional
  tags: string[];
};
```

### Index Signatures

When you do not know all the property names in advance, use an index signature:

```typescript
type TagCount = {
  [tag: string]: number;
};

const counts: TagCount = {
  "work": 5,
  "personal": 3,
  "urgent": 1,
};
```

### Class Basics

```typescript
class Task {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  describe(): string {
    return `Task ${this.id}: ${this.title}`;
  }
}

const task = new Task(1, "Buy groceries");
```

### Constructor Shorthand

Instead of declaring fields and assigning them in the constructor separately:

```typescript
class Task {
  constructor(
    public id: number,
    public title: string,
    private status: string = "todo"
  ) {}
  // id, title, and status are automatically created as class properties
}
```

### Access Modifiers

- `public` - accessible from anywhere (this is the default)
- `private` - only accessible inside the class itself
- `protected` - accessible inside the class and in subclasses

```typescript
class User {
  public username: string;
  private passwordHash: string;
  protected role: string;

  constructor(username: string, password: string, role: string) {
    this.username = username;
    this.passwordHash = this.hash(password);
    this.role = role;
  }

  private hash(password: string): string {
    return password + "_hashed"; // simplified
  }
}
```

### Readonly Properties

```typescript
class Task {
  readonly id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

const task = new Task(1, "Buy groceries");
task.id = 2; // Error! id is readonly
```

### Static Members

Static members belong to the class itself, not to instances.

```typescript
class TaskCounter {
  static count = 0;

  constructor() {
    TaskCounter.count++;
  }

  static reset(): void {
    TaskCounter.count = 0;
  }
}

new TaskCounter();
new TaskCounter();
console.log(TaskCounter.count); // 2
```

### Abstract Classes

Abstract classes cannot be instantiated. They serve as a base template.

```typescript
abstract class BaseRepository<T> {
  abstract findById(id: number): T | undefined;
  abstract findAll(): T[];

  exists(id: number): boolean {
    return this.findById(id) !== undefined;
  }
}

class TaskRepository extends BaseRepository<{ id: number; title: string }> {
  private tasks = [{ id: 1, title: "Buy groceries" }];

  findById(id: number) {
    return this.tasks.find(t => t.id === id);
  }

  findAll() {
    return this.tasks;
  }
}
```

### Implementing Interfaces

A class that `implements` an interface is required to have all the interface's members.

```typescript
interface Printable {
  print(): void;
}

interface Serializable {
  serialize(): string;
}

class Task implements Printable, Serializable {
  constructor(public title: string) {}

  print(): void {
    console.log("Task:", this.title);
  }

  serialize(): string {
    return JSON.stringify({ title: this.title });
  }
}
```

---

## Tasks

### Shared Tasks

**Task 1 - Index signatures**
Create a type `TaskMetadata` with:
- `taskId`: number (fixed property)
- `[key: string]: unknown` (any additional string key can be added)

Create two objects: one with just `taskId`, one with extra metadata fields.
Write a function that reads a key from a `TaskMetadata` object.

**Task 2 - Basic class**
Write a `Task` class with:
- `readonly id: number`
- `title: string`
- `status: string` (default "todo")
- A constructor using the shorthand syntax
- A method `complete(): void` that sets status to "done"
- A method `toString(): string` that returns a readable description

**Task 3 - Access modifiers**
Write a `User` class with:
- `public username: string`
- `private passwordHash: string`
- `protected role: string`
- A private method `hashPassword(password: string): string` (just return `password + "_hashed"`)
- A public method `checkPassword(password: string): boolean`
- A public method `getRole(): string`

**Task 4 - Static members**
Add a static property `count` to a `TaskManager` class that tracks how many `TaskManager` instances
were created. Each `new TaskManager()` should increment it. Add a static `reset()` method.
Log the count after creating 3 instances.

**Task 5 - Abstract class**
Write an abstract class `BaseRepository<T>` with:
- Abstract methods: `findById(id: number): T | undefined` and `findAll(): T[]`
- A non-abstract method `exists(id: number): boolean` that uses `findById`

Then write a `TaskRepository` class that extends it with a hardcoded array of tasks.

**Task 6 - Implements interface**
Write an interface `Exportable` with a method `toJSON(): string`.
Write an interface `Importable` with a static-style method signature (hint: you will need
to handle this differently - look up "interface with static method TypeScript").
Make the `Task` class from Task 2 implement `Exportable` by adding a `toJSON` method.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 7 - Store-like class (Pinia/Vuex preview)**
Write a class `TaskStore` that simulates a simple state store:
- Private `tasks: { id: number; title: string; status: string }[]` (empty array)
- Public `addTask(title: string): void`
- Public `removeTask(id: number): void`
- Public `getTasks(): { id: number; title: string; status: string }[]`
- Static `getInstance(): TaskStore` (singleton pattern - only one instance exists)

**Task 8 - Component class (optional)**
If you are using React with class components (rarely done now but good to know):
Write a class `TaskListComponent` with:
- Public `state: { tasks: string[]; loading: boolean }`
- A `render(): string` method that returns a formatted task list string

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 9 - NestJS-style service class**
Write a class `TasksService` that:
- Has a private array of tasks (with `id`, `title`, `status`, `createdAt` fields)
- Has a private `nextId: number` starting at 1
- `findAll(): Task[]`
- `findOne(id: number): Task | undefined`
- `create(title: string, description?: string): Task` (increments `nextId`)
- `remove(id: number): boolean` (returns true if removed, false if not found)

**Task 10 - Repository pattern with abstract class**
Build on Task 5's abstract `BaseRepository`. Create a `UserRepository` class alongside
the `TaskRepository`. Both extend `BaseRepository` with their own data arrays.
Then write a function `printAllFromRepo<T>(repo: BaseRepository<T>): void` that calls `findAll()`
and logs each item. (This is another generics preview.)

---

## Apply to the Project

**Backend:**
Convert your NestJS service from a plain file to a proper class-based service
(NestJS generates this for you, but make sure you understand it):

```typescript
// tasks/tasks.service.ts
import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "../../shared";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  create(title: string, description?: string): Task {
    const task: Task = {
      id: this.nextId++,
      title,
      description: description ?? null,
      status: TaskStatus.Todo,
      isComplete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: null,
      assignedToUserId: null,
    };
    this.tasks.push(task);
    return task;
  }
}
```

**Frontend:** If using Pinia (Vue) or Zustand (React), write your first store with typed state.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/2/classes.html
- https://www.typescriptlang.org/docs/handbook/2/objects.html

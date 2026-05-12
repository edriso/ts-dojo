# Scroll 13 - Decorators

> *The hidden glyphs that power NestJS.*

Decorators are special functions that attach metadata or behavior to classes, methods,
properties, and parameters. They look like `@Something` and appear above the code they
decorate. NestJS is built almost entirely on decorators - every controller, service, route,
and parameter you write uses them.

---

## What You Will Learn

- What decorators are and how they work
- Class decorators
- Method decorators
- Property decorators
- Parameter decorators
- Decorator factories (decorators with arguments)
- How NestJS uses decorators internally

---

## Setup Note

Decorators are not fully standardized yet, but TypeScript supports them with a flag.
In your `tsconfig.json`, make sure you have:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

NestJS sets both of these automatically.

---

## Key Concepts

### Class Decorator

A function that receives the class constructor and can modify or replace it:

```typescript
function Injectable(target: Function): void {
  console.log("Registered as injectable:", target.name);
}

@Injectable
class TasksService {
  findAll() { return []; }
}
```

### Decorator Factory

A function that returns a decorator. This lets you pass arguments:

```typescript
function Controller(path: string) {
  return function (target: Function): void {
    console.log(`Registering controller at /${path}`);
  };
}

@Controller("tasks")
class TasksController {}
```

### Method Decorator

Wraps a method. Receives the class prototype, method name, and property descriptor:

```typescript
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    const result = original.apply(this, args);
    console.log(`${key} returned`, result);
    return result;
  };
  return descriptor;
}

class TasksService {
  @Log
  findById(id: number) {
    return { id, title: "Task " + id };
  }
}
```

### Property Decorator

Runs when a property is defined on a class:

```typescript
function Required(target: any, key: string): void {
  console.log(`${key} is marked as required`);
}

class CreateTaskDto {
  @Required
  title!: string;
}
```

### Parameter Decorator

Runs when a parameter is defined in a method or constructor:

```typescript
function Body(target: any, key: string, parameterIndex: number): void {
  console.log(`Parameter at index ${parameterIndex} in ${key} is the request body`);
}

class TasksController {
  create(@Body dto: { title: string }) {
    // NestJS uses this to know which parameter to populate with req.body
  }
}
```

### How NestJS Uses Decorators

NestJS reads decorator metadata at startup and uses it to wire everything together:

```typescript
import { Controller, Get, Post, Body, Param } from "@nestjs/common";

@Controller("tasks")              // registers this class as a controller at /tasks
export class TasksController {

  @Get()                          // handles GET /tasks
  findAll() { return []; }

  @Get(":id")                     // handles GET /tasks/:id
  findOne(@Param("id") id: string) {
    return { id };
  }

  @Post()                         // handles POST /tasks
  create(@Body() dto: { title: string }) {
    return dto;
  }
}
```

---

## Katas

These tasks are mostly backend-focused since decorators are mainly used in NestJS.

### Shared Katas

**Kata 1 - Class decorator**
Write a decorator `@Singleton` that stores the class in a registry and throws an error
if you try to register the same class name twice.
Apply it to two different classes.
Try applying it to the same class name twice and see the error.

**Kata 2 - Method decorator for timing**
Write a decorator `@Measure` that:
- Records the time before the method runs
- Runs the method
- Records the time after
- Logs how long the method took

Apply it to a function that does some heavy work (use a loop to simulate it).

**Kata 3 - Decorator factory with a role check**
Write a decorator factory `@RequireRole(role: string)` that:
- Wraps the method
- Checks if `this.currentUserRole` equals the required role
- Throws `new Error("Forbidden")` if not
- Calls the original method if the role matches

Apply it to a method in a fake `TasksController` class.

**Kata 4 - Property decorator for validation**
Write a decorator `@MinLength(min: number)` that stores the minimum length requirement
in metadata on the class. For now, just log the property name and minimum length.
(Full validation frameworks like class-validator work this way.)

---

### Backend Katas

Open `server/exercise.ts` and complete the TODOs.

**Kata 5 - Build a mini NestJS-like framework (for fun)**
Write simple versions of NestJS decorators from scratch:
- `@Controller(path)` - stores the path on the class
- `@Get(path?)` - stores the handler method info
- `@Post(path?)`

Then write a function `getRoutes(controllerClass: any)` that reads the stored metadata
and returns an array of route definitions: `{ method: string; path: string; handlerName: string }[]`.

This gives you a deep understanding of how NestJS works under the hood.

**Kata 6 - Real NestJS decorators**
In your actual NestJS project (`project/server/`), make sure you have:
- A `TasksController` using `@Controller`, `@Get`, `@Post`, `@Put`, `@Delete`
- A `TasksService` using `@Injectable`
- Proper `@Param`, `@Body`, `@Query` decorators on controller method parameters

Read the NestJS docs if needed: https://docs.nestjs.com/controllers

---

## Bring it to the Project

**Backend - Finish the NestJS tasks module:**

```typescript
// tasks/tasks.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import type { CreateTaskDto, UpdateTaskDto } from "../../shared";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(@Query("status") status?: string) {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto.title, createTaskDto.description);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tasksService.remove(+id);
  }
}
```

Make sure the backend API is fully working and you can test it with a tool like
Postman, Insomnia, or curl.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/decorators.html
- https://docs.nestjs.com/controllers
- https://docs.nestjs.com/providers

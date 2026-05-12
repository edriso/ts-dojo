# Topic 12 - Modules and Declaration Files

Real TypeScript projects are split across many files. Modules are how those files share
code with each other. Declaration files (`.d.ts`) describe the types of JavaScript code
that has no TypeScript source.

---

## What You Will Learn

- ES module syntax in TypeScript (import/export)
- Exporting and importing types specifically
- Re-exports and barrel files
- What `.d.ts` files are and why they exist
- `@types` packages
- Module augmentation (adding types to existing modules)
- Path aliases in tsconfig

---

## Key Concepts

### ES Modules in TypeScript

Same syntax as JavaScript ES modules:

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export type MathResult = {
  value: number;
  operation: string;
};
```

```typescript
// main.ts
import { add, MathResult } from "./math";
```

### Importing Types Only

Use `import type` when you only need the type, not the value.
This is cleaner and helps bundlers remove type-only imports:

```typescript
import type { Task } from "../shared/types";
import type { User } from "../shared/types";
```

### Default Exports

```typescript
// logger.ts
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// main.ts
import Logger from "./logger";
```

Prefer named exports over default exports in most cases. Named exports are easier
to refactor and work better with auto-import.

### Barrel Files (index.ts)

A barrel file re-exports everything from a folder, giving you a clean import path:

```typescript
// shared/index.ts
export type { Task, User, TaskStatus } from "./task.types";
export type { ApiResponse, ApiSuccess, ApiError } from "./api.types";
export { TaskStatus } from "./enums";
```

```typescript
// Now you can import from one place:
import type { Task, User, ApiResponse } from "../shared";
```

### Declaration Files (.d.ts)

A `.d.ts` file describes the types of a JavaScript module without any implementation.
You will mostly encounter them when using third-party JavaScript libraries.

```typescript
// my-library.d.ts
declare module "my-library" {
  export function doSomething(value: string): number;
  export interface Config {
    timeout: number;
    retries: number;
  }
}
```

### @types Packages

Most popular JavaScript libraries have type definitions published on npm under `@types`:

```bash
npm install --save-dev @types/node
npm install --save-dev @types/express
```

These are just packages full of `.d.ts` files. TypeScript picks them up automatically.

### Module Augmentation

You can add fields to existing module types. Used often to extend framework types:

```typescript
// extend Express Request to include user
import "express";

declare module "express" {
  interface Request {
    user?: { id: number; username: string };
  }
}
```

### Path Aliases

Instead of `../../../shared/types`, configure an alias:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["./shared/*"],
      "@/*": ["./src/*"]
    }
  }
}
```

```typescript
import type { Task } from "@shared/types"; // clean!
```

---

## Tasks

### Shared Tasks

**Task 1 - Split a file into modules**
Take the shared types you have been building (Task, User, TaskStatus, ApiResponse).
Split them into separate files:
- `types/task.types.ts` - Task interface and TaskStatus enum
- `types/user.types.ts` - User interface and UserRole enum
- `types/api.types.ts` - ApiResponse, ApiSuccess, ApiError

Then create an `types/index.ts` barrel that re-exports everything.

**Task 2 - import type**
Go through your exercise files from previous topics. Find any place where you import
a type that is only used as a type (not as a value). Change those to `import type`.
Notice how this makes it clear which imports are runtime values vs compile-time types.

**Task 3 - Declaration file**
Write a `.d.ts` file for a fake JavaScript library called `task-utils` with:
- A function `formatTitle(title: string): string`
- A function `truncate(text: string, maxLength: number): string`
- An interface `TaskFilter { status?: string; search?: string; page?: number }`

**Task 4 - Barrel file**
Take the modules you created in Task 1 and verify that importing from `types/index.ts`
gives you all the types from all three files in one import.

**Task 5 - Path aliases**
Set up a `tsconfig.json` with a path alias:
```json
"paths": { "@types/*": ["./types/*"] }
```
Update one of your exercise files to use `@types/task.types` instead of a relative path.
Note: you may need `ts-node -r tsconfig-paths/register` to run files with path aliases.

---

### Frontend Tasks

Open `client/exercise.ts` and complete the TODOs.

**Task 6 - Organize React app types**
Create these files:
- `client/types/props.types.ts` - all component prop types
- `client/types/state.types.ts` - all state/store types
- `client/types/index.ts` - barrel

Import from the barrel in your exercise file.

**Task 7 - Augment window (browser globals)**
Sometimes you add things to `window` for debugging. Write a module augmentation:
```typescript
declare global {
  interface Window {
    __APP_VERSION__: string;
    __DEBUG__: boolean;
  }
}
```
Then set `window.__DEBUG__ = true` safely.

---

### Backend Tasks

Open `server/exercise.ts` and complete the TODOs.

**Task 8 - Module augmentation for NestJS**
In NestJS, the request object often has a `user` attached after authentication.
Write a module augmentation that adds `user?: { id: number; role: string }` to the Express `Request` type.
(You will need `@types/express` installed: `npm install -D @types/express`)

**Task 9 - Barrel for NestJS module**
Create a barrel file for a NestJS `tasks` module:
```
tasks/
  tasks.controller.ts
  tasks.service.ts
  tasks.module.ts
  dto/
    create-task.dto.ts
    update-task.dto.ts
  index.ts  <- barrel
```
Write the barrel that re-exports the controller, service, module, and both DTOs.

---

## Apply to the Project

**Project structure - organize types properly:**

```
project/
  shared/
    types/
      task.types.ts
      user.types.ts
      api.types.ts
      enums.ts
    index.ts      <- barrel re-exporting everything
  client/
    src/
      types/      <- frontend-specific types only
  server/
    src/
      types/      <- backend-specific types only
```

Both `client` and `server` import from `../../shared` using a path alias.

**Frontend tsconfig.json:**
```json
{ "paths": { "@shared/*": ["../../shared/*"] } }
```

**Backend tsconfig.json:**
```json
{ "paths": { "@shared/*": ["../../shared/*"] } }
```

---

## Resources

- https://www.typescriptlang.org/docs/handbook/modules.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
- https://www.typescriptlang.org/tsconfig#paths

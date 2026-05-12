# Scroll 15 - Config and Tooling

> *Sharpen every blade. Tighten every strap. Black belt time.*

You have been writing TypeScript throughout this entire learning path. This final topic
is about fully understanding the tools you have been using: the TypeScript compiler, tsconfig,
strict mode options, and how TypeScript fits into real build pipelines.

---

## What You Will Learn

- Understanding every strict mode option
- Important tsconfig compiler options
- The `tsc` CLI
- Project references (linking multiple TS projects)
- Path aliases (already covered in Scroll 12, deeper here)
- TypeScript with ESLint
- Declaration maps and source maps
- TypeScript performance tips

---

## Key Concepts

### The strict Flag

`"strict": true` is actually a shorthand that turns on all of these:

| Option | What it does |
|--------|-------------|
| `strictNullChecks` | null and undefined are not assignable to other types |
| `strictFunctionTypes` | Stricter checking for function parameter types |
| `strictBindCallApply` | Proper types for .bind(), .call(), .apply() |
| `strictPropertyInitialization` | Class properties must be initialized in the constructor |
| `noImplicitAny` | Variables cannot have implicit any type |
| `noImplicitThis` | this cannot have implicit any type |
| `alwaysStrict` | Adds "use strict" to all compiled files |

Always use `"strict": true`. Never turn off individual strict checks unless you have a very specific reason.

### Important Compiler Options

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### Extra Strict Options (not in "strict", but very useful)

| Option | What it does |
|--------|-------------|
| `noUnusedLocals` | Error on declared but unused variables |
| `noUnusedParameters` | Error on declared but unused parameters |
| `noImplicitReturns` | All code paths must return a value |
| `noUncheckedIndexedAccess` | Array[index] returns T or undefined |
| `exactOptionalPropertyTypes` | `{ a?: string }` does not allow `{ a: undefined }` |

### Project References

When you have multiple TS projects (like client and server), project references let them
know about each other without compiling everything together:

```json
// server/tsconfig.json
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    { "path": "../shared" }
  ]
}
```

Then run `tsc --build` to compile all projects in the right order.

### TypeScript with ESLint

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

`.eslintrc.json`:
```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

---

## Katas

### Shared Katas

**Kata 1 - Audit your tsconfig**
Go through your project `tsconfig.json` and make sure these are set:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`
- `forceConsistentCasingInFileNames: true`

Fix any errors that appear when you turn these on in your existing exercise code.

**Kata 2 - noUncheckedIndexedAccess**
Add `"noUncheckedIndexedAccess": true` to your tsconfig.
Go back to Scroll 09 exercise files and see which code now has type errors.
Fix those errors by properly handling the `| undefined` case (use `??` or `if` checks).

**Kata 3 - Compile your exercises**
From the root of this repo, create a `tsconfig.json` that:
- Includes all `.ts` files in `*/client/*.ts` and `*/server/*.ts`
- Has strict mode and all the extra checks from Kata 1
- Points `outDir` to a `./dist` folder

Run `npx tsc` and fix all errors until it compiles cleanly.

**Kata 4 - Source maps**
Add `"sourceMap": true` to your tsconfig. Compile and look in the dist folder.
Each `.js` file now has a `.js.map` file. This makes debuggers show your original
TypeScript code when you set breakpoints.

**Kata 5 - ESLint setup**
Set up ESLint with TypeScript:
```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Create a `.eslintrc.json` as shown in the Key Concepts section.
Run `npx eslint . --ext .ts` and fix the warnings in your exercise files.

---

### Backend Katas

**Kata 6 - NestJS tsconfig**
NestJS generates both `tsconfig.json` and `tsconfig.build.json`.
Read both and understand what `tsconfig.build.json` does differently.
(It excludes test files and disables source maps for leaner production builds.)

**Kata 7 - Project references**
Set up project references between `project/shared`, `project/client`, and `project/server`:
1. Add `"composite": true` to `project/shared/tsconfig.json`
2. Add `"references": [{ "path": "../shared" }]` to `project/server/tsconfig.json`
3. Run `tsc --build project/server` and see it compile `shared` first

---

### Frontend Katas

**Kata 8 - Vite tsconfig**
Vite often splits into `tsconfig.json` (for the editor/IDE) and `tsconfig.app.json` (for builds).
Read the generated config in `project/client` and understand each option.
Make sure `strict: true` is set and add `noUnusedLocals: true`.

---

## Bring it to the Project - The Final Belt Test

By the time you finish this topic, your project should be complete.

**Backend (project/server):**
- [ ] NestJS app running with full tasks CRUD
- [ ] GET /tasks with optional ?status= filter
- [ ] GET /tasks/:id
- [ ] POST /tasks with body validation
- [ ] PUT /tasks/:id
- [ ] DELETE /tasks/:id
- [ ] Strict TypeScript throughout
- [ ] ESLint passing with no errors

**Frontend (project/client):**
- [ ] React app fetching and displaying tasks
- [ ] Task creation form
- [ ] Edit and delete tasks
- [ ] Filter tasks by status
- [ ] Proper loading and error states
- [ ] Strict TypeScript throughout

**Shared (project/shared):**
- [ ] All shared types with proper TypeScript
- [ ] Branded IDs
- [ ] Generic ApiResponse<T>
- [ ] Type guards
- [ ] Path alias configured on both sides

**Capstone challenges (optional but strongly recommended):**
1. Add user authentication with JWT
2. Use class-validator decorators for NestJS input validation
3. Write a generic `useApi<T>` hook that handles loading, error, and data states
4. Add at least one use of conditional types or mapped types to derive types automatically
5. Set up project references so `tsc --build` compiles everything in one command

---

## You Earned the Black Belt

If you finished all 15 scrolls and built the project, stand tall. You are now a
true TypeScript ninja. You have all of this in your dojo:

- The full type system (primitives, unions, intersections, literals, generics)
- Object-oriented TypeScript (classes, interfaces, abstract classes)
- Advanced type manipulation (mapped types, conditional types, template literals)
- Real-world patterns (discriminated unions, branded types, builder pattern)
- The full toolchain (tsconfig, ESLint, project references)
- Framework integration (NestJS decorators, React with TypeScript)

Keep training. A ninja who writes TypeScript every day stays sharp. A ninja who
stops, gets dull. See you in the dojo tomorrow.

---

## Resources

- https://www.typescriptlang.org/tsconfig
- https://www.typescriptlang.org/docs/handbook/project-references.html
- https://typescript-eslint.io/getting-started
- https://www.totaltypescript.com (Matt Pocock's advanced TypeScript content)

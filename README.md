# TypeScript Ninja Path

Welcome! This is a hands-on learning repo for two friends learning TypeScript together.

One of you is building the **frontend** using React with TypeScript.
The other is building the **backend** using NestJS with TypeScript.

You will learn every important TypeScript concept by doing real tasks, and you will apply each concept directly to a shared project: a **Task Manager app**.

---

## The Project

You are building a Task Manager app together.

- Users can sign up and log in
- Users can create, update, and delete tasks
- Each task has a title, description, status, and due date
- The frontend talks to the backend through a typed API

This project grows with you. After each topic, there is a section called "Apply to the Project" that tells you exactly what to build using what you just learned.

---

## Tech Stack

| Side | Technology |
|------|-----------|
| Frontend | React 18 + Vite + TypeScript |
| Backend | NestJS + TypeScript |
| Shared Types | Plain TypeScript files imported by both sides |

---

## Folder Structure

```
ts-ninja/
  README.md                     <- you are here
  01-basics/                    <- topic 1
    README.md                   <- explanation + tasks
    client/exercise.ts          <- frontend exercises
    server/exercise.ts          <- backend exercises
  02-everyday-types/
  03-type-aliases-and-interfaces/
  04-unions-intersections-literals/
  05-functions/
  06-enums/
  07-objects-and-classes/
  08-narrowing-and-type-guards/
  09-generics/
  10-type-manipulation/
  11-utility-types/
  12-modules-and-declarations/
  13-decorators/
  14-advanced-patterns/
  15-config-and-tooling/
  project/
    client/                     <- React + TS app (Vite)
    server/                     <- NestJS app
    shared/                     <- types used by both sides
```

---

## Learning Path

Work through the topics in order. Each topic builds on the previous one.

| # | Topic | What You Learn |
|---|-------|---------------|
| 01 | Basics and Setup | What TypeScript is, how to set it up, tsconfig |
| 02 | Everyday Types | All the basic types you will use every day |
| 03 | Type Aliases and Interfaces | How to define and reuse custom types |
| 04 | Unions, Intersections, Literals | Combining types in powerful ways |
| 05 | Functions | Typing functions properly |
| 06 | Enums | Named constants for things like status and roles |
| 07 | Objects and Classes | Object shapes, OOP in TypeScript |
| 08 | Narrowing and Type Guards | Making TypeScript smart about unknown types |
| 09 | Generics | Writing reusable code that works with any type |
| 10 | Type Manipulation | Creating new types from existing ones |
| 11 | Utility Types | Built-in helpers like Partial, Pick, Omit |
| 12 | Modules and Declarations | Organizing types across files |
| 13 | Decorators | The engine behind NestJS |
| 14 | Advanced Patterns | Satisfies, branded types, recursive types |
| 15 | Config and Tooling | Mastering tsconfig and the TypeScript compiler |

---

## How to Use This Repo

1. Go into a topic folder, e.g. `01-basics/`
2. Read the `README.md` in that folder
3. Open the `client/exercise.ts` or `server/exercise.ts` file
4. Complete the TODO items in the file
5. Run your code with `npx ts-node <path>/exercise.ts`, or type-check the repo with `npm run type-check`
6. Once you finish all tasks, go to the "Apply to the Project" section in the README
7. Build that feature in the `project/` folder

---

## Prerequisites

- Basic JavaScript knowledge (variables, functions, arrays, objects, promises)
- Node.js installed (v18 or later recommended)
- A code editor (VS Code is highly recommended for TypeScript)

### Install TypeScript locally (recommended)

From the repo root:

```bash
npm install
```

This pulls in `typescript`, `ts-node`, and `@types/node` as dev dependencies so
every exercise file is runnable without touching your global Node setup.

### Check it works

```bash
npx tsc --version
npx ts-node --version
```

### Run a single exercise

```bash
npx ts-node 02-everyday-types/client/exercise.ts
```

### Type-check everything in the repo

```bash
npm run type-check
```

---

## Shared Types

The `project/shared/` folder holds TypeScript types that both the frontend and backend use.
This is one of the biggest benefits of using TypeScript on both sides: if you change a type in one place,
the other side immediately shows a type error if it breaks.

---

## Tips

- Do not skip exercises even if they seem simple. Simple exercises build muscle memory.
- Read error messages carefully. TypeScript errors are very descriptive once you learn to read them.
- Use VS Code. The TypeScript integration in VS Code is the best in any editor.
- When stuck, check the official docs at https://www.typescriptlang.org/docs/handbook/intro.html

# The TypeScript Dojo

```
        /\
       /  \
      / /\ \      Welcome, young ninja.
     / /  \ \     Step into the dojo.
     \ \  / /     Train your types.
      \ \/ /      Earn your belt.
       \  /
        \/
```

You just walked into the **TypeScript Dojo**. Inside these walls, two ninjas
train side by side. One trains in the way of the **frontend** (React with
TypeScript). The other trains in the way of the **backend** (NestJS with
TypeScript). Together you build one real app: a **Task Manager**.

Each chapter of the dojo teaches you one piece of the TypeScript art. You read
the scroll, you do the katas (small drills), and then you bring what you
learned into the real project. Slow, steady, and fun.

No fancy words. No scary jargon. Just one ninja learning one move at a time.

---

## The Mission

You and your training partner are building a Task Manager app.

- Ninjas can sign up and log in
- Ninjas can create, update, and delete tasks
- Each task has a title, a description, a status, and a due date
- The frontend talks to the backend through a fully typed API

This is your dojo project. It grows with you. After every chapter, the README
shows you exactly what new feature to add using the move you just learned.

---

## Tech the Ninjas Use

| Side | Weapon |
|------|--------|
| Frontend | React 18 + Vite + TypeScript |
| Backend | NestJS + TypeScript |
| Shared Types | Plain TypeScript files used by both sides |

Sharing types between frontend and backend is the dojo's secret power. Change
a type on one side, the other side instantly tells you what broke.

---

## The Map of the Dojo

```
ts-dojo/
  README.md                          <- you are here
  01-basics/                         <- Scroll 01
    README.md                        <- the scroll: what to read and do
    client/exercise.ts               <- frontend kata file
    server/exercise.ts               <- backend kata file
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
    client/                          <- React + TS app (Vite)
    server/                          <- NestJS app
    shared/                          <- types both sides use
```

---

## The Belt Path

Train through the scrolls in order. Each one builds on the last. As you
finish them, you climb the ranks of the dojo.

| Scroll | Topic | What You Learn | Belt |
|--------|-------|---------------|------|
| 01 | Basics and Setup | What TypeScript is, how to set it up, tsconfig | White |
| 02 | Everyday Types | The basic types you will use every day | White |
| 03 | Type Aliases and Interfaces | Defining and reusing your own types | White |
| 04 | Unions, Intersections, Literals | Mixing types like a master | Yellow |
| 05 | Functions | Typing functions the right way | Yellow |
| 06 | Enums | Named constants for status, roles, and more | Yellow |
| 07 | Objects and Classes | Shapes and OOP, the NestJS way | Orange |
| 08 | Narrowing and Type Guards | Teach TypeScript to read your mind | Orange |
| 09 | Generics | Reusable code that works with any type | Green |
| 10 | Type Manipulation | Build new types from old ones | Green |
| 11 | Utility Types | Partial, Pick, Omit, and friends | Blue |
| 12 | Modules and Declarations | Organize types across many files | Blue |
| 13 | Decorators | The magic behind NestJS | Purple |
| 14 | Advanced Patterns | satisfies, branded types, recursive types | Brown |
| 15 | Config and Tooling | Master tsconfig and the compiler | Black |

Reach Black Belt and the Task Manager is yours.

---

## How to Train in the Dojo

1. Step into a scroll folder, for example `01-basics/`
2. Read its `README.md` from top to bottom
3. Open `client/exercise.ts` or `server/exercise.ts`
4. Do the katas (the TODO blocks). Take your time
5. Run your code with `npx ts-node <path>/exercise.ts`, or type-check the whole
   dojo at once with `npm run type-check`
6. When you finish, head to the "Bring it to the Project" section in the scroll
7. Build that feature inside the `project/` folder
8. Take a breath. Move to the next scroll. Repeat

---

## Prerequisites

- A little JavaScript (variables, functions, arrays, objects, promises)
- Node.js v18 or later
- VS Code (the dojo's favorite editor for TypeScript)

### Set up your training gear

From the dojo root:

```bash
npm install
```

That pulls in `typescript`, `ts-node`, and `@types/node` as dev dependencies.
No global install needed.

### Check your gear

```bash
npx tsc --version
npx ts-node --version
```

### Run a single kata file

```bash
npx ts-node 02-everyday-types/client/exercise.ts
```

### Type-check the whole dojo

```bash
npm run type-check
```

---

## Shared Scrolls (the `shared/` folder)

The `project/shared/` folder holds the types that both ninjas use. This is the
secret of the dojo: write a type once, both sides obey it. Change it on one
side, the other side instantly knows. No more arguing about API shapes.

---

## Dojo Wisdom

- Do not skip a kata because it looks easy. Easy katas build the muscle.
- Read error messages slowly. TypeScript almost always tells you the answer.
- Hover over variables in VS Code. Half of TypeScript is just reading what it
  already knows.
- Stuck? Visit the official scrolls at https://www.typescriptlang.org/docs/handbook/intro.html
- A ninja who trains every day beats a ninja who trains once. Small reps win.

Tighten your belt, ninja. Open Scroll 01. Begin.

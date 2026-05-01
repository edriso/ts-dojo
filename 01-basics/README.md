# Topic 01 - Basics and Setup

TypeScript is JavaScript with types added on top. You write `.ts` files, TypeScript checks them for mistakes,
then compiles them into regular JavaScript that the browser or Node.js can run.

The biggest benefit is catching bugs before your code ever runs. If you pass a number where a string is
expected, TypeScript tells you immediately in your editor, not at runtime in front of a user.

---

## What You Will Learn

- What TypeScript is and why it exists
- How to install TypeScript and set up a project
- What `tsconfig.json` is and why you need it
- How to compile `.ts` files to `.js`
- How to run TypeScript directly with `ts-node`
- The difference between type annotation and type inference
- What `strict` mode does

---

## Key Concepts

### Type Annotation

You tell TypeScript what type a variable is:

```typescript
let name: string = "Ahmed";
let age: number = 25;
let isActive: boolean = true;
```

### Type Inference

TypeScript figures out the type on its own if you give it a value:

```typescript
let name = "Ahmed";    // TypeScript knows this is a string
let age = 25;          // TypeScript knows this is a number
```

You do not always need to write the type. TypeScript is smart enough to infer it.

### tsconfig.json

This file tells TypeScript how to behave. The most important option is `strict: true`, which turns on
all the safety checks. Always use it.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  }
}
```

### Compiling

```bash
tsc           # compiles everything based on tsconfig.json
tsc file.ts   # compiles a single file
ts-node file.ts  # runs a .ts file directly without compiling first
```

---

## Tasks

### Shared Tasks (do these regardless of frontend or backend)

**Task 1 - Setup**
Create a new folder, run `npm init -y`, then run `npx tsc --init` to generate a `tsconfig.json`.
Open it and make sure `strict` is set to `true`. Look through the other options and read the comments.

**Task 2 - Your first TypeScript file**
Create a file called `hello.ts`. Declare three variables: your name as a string, your age as a number,
and a boolean called `isLearningTypeScript` set to `true`. Use type annotations for two of them and let
TypeScript infer the third. Then log a sentence using all three variables.

**Task 3 - Break it on purpose**
In the same file, try assigning a number to your name variable (`name = 42`). Notice the red squiggly line
in VS Code and the error TypeScript gives you. This is TypeScript doing its job. Then undo the change.

**Task 4 - Type inference exercise**
Declare five variables without type annotations and give them values of different types. Hover over each
one in VS Code and see what type TypeScript inferred. Write a comment next to each one saying what type
TypeScript picked.

**Task 5 - Compile and run**
Compile your `hello.ts` file using `tsc hello.ts`. Look at the generated `hello.js` file.
Notice that TypeScript removed all the type annotations. Then run `ts-node hello.ts` directly.

---

### Frontend Tasks (Vue 3 or React)

Open `client/exercise.ts` and complete the TODOs inside.

**Task 6 - Typing component data**
In a frontend app, components have data (state). Write a TypeScript object that represents the data
for a "User Profile" component. It should have: `username` (string), `email` (string), `age` (number),
`isPremium` (boolean), and `joinedAt` (string for now, we will use Date later). Use type annotations.

**Task 7 - Inference in functions**
Write a function called `formatUsername` that takes a username string and returns it with `@` in front.
Do not add return type annotation. Hover over the function to see what TypeScript inferred as the return type.

---

### Backend Tasks (NestJS / Node.js)

Open `server/exercise.ts` and complete the TODOs inside.

**Task 8 - Typing a config object**
In a backend app, you often have a config object with database URL, port, etc.
Write a typed config object with: `port` (number), `databaseUrl` (string), `jwtSecret` (string),
`isDevelopment` (boolean). Use type annotations on all of them.

**Task 9 - Strict mode catches bugs**
Write a function `getUserById` that takes an `id` parameter. Try calling it without passing an argument.
With `strict` mode on, TypeScript should warn you about implicit `any`. Fix it by adding `: number`
to the parameter. Notice the difference.

---

## Apply to the Project

At this point you can scaffold the actual project folders.

**Backend (your friend does this):**
```bash
cd project/server
npm install -g @nestjs/cli
nest new .
```

**Frontend (you do this):**
```bash
cd project/client
npm create vue@latest .
# Choose: TypeScript - Yes, Vue Router - Yes, Pinia - Yes
```

**Shared types (do this together):**
Create `project/shared/index.ts` with this basic shape for now:

```typescript
export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  createdAt: string;
}
```

This file will grow as you learn more TypeScript.

---

## Resources

- https://www.typescriptlang.org/docs/handbook/intro.html
- https://www.typescriptlang.org/tsconfig
- https://www.typescriptlang.org/play (online TypeScript playground, great for quick experiments)

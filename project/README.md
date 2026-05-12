# The Task Manager (Dojo Project)

This is the real app you build together inside the dojo. One ninja takes the
**frontend** path (React + Vite + TypeScript). The other takes the **backend**
path (NestJS + TypeScript). You share types through the `shared/` folder.

Think of this folder as your dojo's training ground. Every scroll you finish
adds one more move to this app.

---

## Project Layout

```
project/
  shared/         <- types both ninjas use
    index.ts
  client/         <- frontend (React + Vite + TypeScript)
    README.md     <- frontend setup scroll
  server/         <- backend (NestJS + TypeScript)
    README.md     <- backend setup scroll
```

---

## First Day at the Dojo

### Step 1: Backend ninja sets up the server

```bash
cd project/server
npm install -g @nestjs/cli
nest new .
```

### Step 2: Frontend ninja sets up the client

```bash
cd project/client
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom zustand
```

- `react-router-dom` for routing
- `zustand` for a small, typed state store

### Step 3: Connect the shared types path alias

Since `shared/` is a local TypeScript folder, both sides import from it
directly using a path alias in their `tsconfig.json`.

**In `project/server/tsconfig.json`** add:

```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  }
}
```

**In `project/client/tsconfig.json`** (or `tsconfig.app.json`) add:

```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["../shared/*"],
      "@/*": ["./src/*"]
    }
  }
}
```

Now both sides can write `import type { Task } from "@shared/index"`.

---

## The Mission Checklist

Tick these boxes as you finish each scroll. Treat it as your belt progress.

### After Scroll 02 (Everyday Types)
- [ ] Backend: basic NestJS app running on port 3000
- [ ] Frontend: React app running with TypeScript
- [ ] Shared: basic `Task` and `User` interfaces in `shared/index.ts`

### After Scroll 05 (Functions)
- [ ] Backend: `GET /tasks` returns a hardcoded array
- [ ] Backend: `GET /tasks/:id` returns one task
- [ ] Frontend: fetch and display the task list

### After Scroll 07 (Classes)
- [ ] Backend: `TasksService` class with in-memory storage
- [ ] Backend: `POST /tasks` creates a task
- [ ] Frontend: a form to create a task

### After Scroll 08 (Narrowing)
- [ ] Backend: input validation on `POST /tasks`
- [ ] Frontend: friendly error handling when API calls fail

### After Scroll 09 (Generics)
- [ ] Backend: generic `ApiResponse<T>` wrapper on all endpoints
- [ ] Backend: pagination using `PaginatedResponse<T>`
- [ ] Frontend: a generic `useApi<T>` hook (loading, error, data)

### After Scroll 11 (Utility Types)
- [ ] Backend: `PUT /tasks/:id` using `Partial<Task>` for the body
- [ ] Backend: `DELETE /tasks/:id`
- [ ] Frontend: edit and delete task UI

### After Scroll 12 (Modules)
- [ ] Shared: split into multiple files with a barrel
- [ ] Both: use path aliases (`@shared/...`)

### After Scroll 13 (Decorators)
- [ ] Backend: full NestJS controller with all HTTP methods decorated
- [ ] Backend: an auth guard (optional)

### After Scroll 14 (Advanced)
- [ ] Shared: branded types for `UserId` and `TaskId`
- [ ] Both: use `satisfies` on config objects

### After Scroll 15 (Config)
- [ ] Both: clean tsconfig with strict checks
- [ ] Both: ESLint set up and passing
- [ ] Project references all wired up

---

## API Design (the dojo's contract)

### Task endpoints

| Method | Path | What it does |
|--------|------|-------------|
| GET | /tasks | Get all tasks (supports `?status=` and `?page=`) |
| GET | /tasks/:id | Get one task |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

### User endpoints (optional)

| Method | Path | What it does |
|--------|------|-------------|
| POST | /auth/register | Sign up a new ninja |
| POST | /auth/login | Log in and get a JWT |
| GET | /auth/me | Who am I? |

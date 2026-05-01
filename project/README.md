# Task Manager Project

This is the shared project you build together as you progress through the topics.
One person builds the frontend (Vue 3 or React + TypeScript), the other builds
the backend (NestJS + TypeScript). You share types through the `shared/` folder.

---

## Project Structure

```
project/
  shared/         <- TypeScript types used by both frontend and backend
    index.ts
  client/         <- Frontend (Vue 3 or React + TypeScript)
    README.md     <- Setup instructions
  server/         <- Backend (NestJS + TypeScript)
    README.md     <- Setup instructions
```

---

## How to Get Started

### Step 1 - Set up the backend (your friend does this)

```bash
cd project/server
npm install -g @nestjs/cli
nest new .
```

### Step 2 - Set up the frontend (you do this)

**Vue 3:**
```bash
cd project/client
npm create vue@latest .
# Select: TypeScript - Yes, Vue Router - Yes, Pinia - Yes
```

**React:**
```bash
cd project/client
npm create vite@latest . -- --template react-ts
```

### Step 3 - Install shared types

Since `shared/` is a local TypeScript folder, both sides will import from it directly
using a path alias configured in their `tsconfig.json`.

**In project/server/tsconfig.json**, add:
```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  }
}
```

**In project/client/tsconfig.json** (or tsconfig.app.json), add:
```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  }
}
```

---

## What to Build (Feature Checklist)

Work through these features as you progress through the topics.

### After Topic 2 (Everyday Types)
- [ ] Backend: Basic NestJS setup running on port 3000
- [ ] Frontend: Vue/React app running with TypeScript
- [ ] Shared: Basic Task and User interfaces in shared/index.ts

### After Topic 5 (Functions)
- [ ] Backend: GET /tasks - returns hardcoded tasks array
- [ ] Backend: GET /tasks/:id - returns a single task
- [ ] Frontend: Fetch and display tasks list

### After Topic 7 (Classes)
- [ ] Backend: TasksService class with in-memory storage
- [ ] Backend: POST /tasks - creates a new task
- [ ] Frontend: Task creation form

### After Topic 8 (Narrowing)
- [ ] Backend: Input validation on POST /tasks
- [ ] Frontend: Error handling when API calls fail

### After Topic 9 (Generics)
- [ ] Backend: Generic ApiResponse<T> wrapper on all endpoints
- [ ] Backend: Pagination with PaginatedResponse<T>
- [ ] Frontend: Generic useFetch / useApi composable (Vue) or hook (React)

### After Topic 11 (Utility Types)
- [ ] Backend: PUT /tasks/:id - updates a task using Partial<Task> for the body
- [ ] Backend: DELETE /tasks/:id - deletes a task
- [ ] Frontend: Edit and delete task UI

### After Topic 12 (Modules)
- [ ] Shared: Split into multiple files with barrel
- [ ] Both: Use path aliases (@shared/...)

### After Topic 13 (Decorators)
- [ ] Backend: Full NestJS controller with all HTTP methods decorated properly
- [ ] Backend: Authentication guard (optional)

### After Topic 14 (Advanced)
- [ ] Shared: Branded types for UserId and TaskId
- [ ] Both: Use satisfies for config objects

### After Topic 15 (Config)
- [ ] Both: Clean tsconfig with all strict checks
- [ ] Both: ESLint configured and passing
- [ ] Project references set up

---

## API Design

### Task endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /tasks | Get all tasks (supports ?status= and ?page= query params) |
| GET | /tasks/:id | Get a single task |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

### User endpoints (optional)

| Method | Path | Description |
|--------|------|-------------|
| POST | /auth/register | Register a new user |
| POST | /auth/login | Login and get a JWT token |
| GET | /auth/me | Get the current user |

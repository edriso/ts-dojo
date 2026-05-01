# Backend - NestJS + TypeScript

This is the backend for the Task Manager app.

---

## Setup

```bash
npm install -g @nestjs/cli
nest new .
```

---

## Path Alias for Shared Types

Add to `tsconfig.json`:

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

## Key Files to Create

```
src/
  tasks/
    tasks.controller.ts
    tasks.service.ts
    tasks.module.ts
    dto/
      create-task.dto.ts
      update-task.dto.ts
    index.ts
  users/
    users.controller.ts
    users.service.ts
    users.module.ts
  auth/
    auth.controller.ts
    auth.service.ts
    auth.module.ts
  types/
    express.d.ts    <- module augmentation for req.user
  app.module.ts
  main.ts
```

---

## Running the Server

```bash
npm run start:dev   # development with hot reload
npm run build       # production build
npm run start:prod  # run production build
```

---

## Testing the API

Test your endpoints with curl:

```bash
# Get all tasks
curl http://localhost:3000/tasks

# Create a task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "priority": "high"}'

# Update a task
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "in_progress"}'

# Delete a task
curl -X DELETE http://localhost:3000/tasks/1
```

---

## Features to Build

Check the `project/README.md` for the full feature checklist tied to each topic.

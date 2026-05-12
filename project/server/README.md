# Backend Dojo: NestJS + TypeScript

This is the backend side of the Task Manager. You are the NestJS ninja. Your
weapon is decorators, your shield is dependency injection, and your secret
scrolls live in `../shared/`.

---

## Set Up Your Gear

```bash
npm install -g @nestjs/cli
nest new .
```

When NestJS asks which package manager, pick whichever you like.

---

## Wire Up the Shared Scroll Path

Add this to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  }
}
```

Now you can write:

```ts
import type { Task, CreateTaskDto } from "@shared/index";
```

---

## Suggested Layout

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
    express.d.ts        <- module augmentation for req.user
  app.module.ts
  main.ts
```

---

## Running the Dojo Server

```bash
npm run start:dev      # development with hot reload (your daily mode)
npm run build          # production build
npm run start:prod     # run the built app
```

---

## Test Your Moves with curl

```bash
# List all tasks
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

## What to Build Next

Check `project/README.md` for the full mission checklist tied to each scroll.
One scroll, one feature, one quiet win.

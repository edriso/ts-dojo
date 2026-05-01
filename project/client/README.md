# Frontend - Vue 3 (or React) + TypeScript

This is the frontend for the Task Manager app.

---

## Setup

### Vue 3

```bash
npm create vue@latest .
```

Select the following when prompted:
- TypeScript: Yes
- Vue Router: Yes
- Pinia: Yes
- ESLint: Yes

### React (alternative)

```bash
npm create vite@latest . -- --template react-ts
```

---

## Path Alias for Shared Types

Add this to your `tsconfig.json` (or `tsconfig.app.json` for Vite):

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

For Vite, also add to `vite.config.ts`:

```typescript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL("../shared", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

---

## Key Files to Create

```
src/
  types/
    props.types.ts    <- component prop types
    state.types.ts    <- store and state types
    index.ts          <- barrel
  composables/        <- Vue composables (or hooks/ for React)
    useApi.ts         <- generic fetch composable
    useTasks.ts       <- task-specific composable
  stores/             <- Pinia stores (Vue) or Zustand stores (React)
    taskStore.ts
  components/
    TaskCard.vue
    TaskList.vue
    TaskForm.vue
  views/
    HomeView.vue
    TasksView.vue
```

---

## Features to Build

Check the `project/README.md` for the full feature checklist tied to each topic.

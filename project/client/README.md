# Frontend - React + TypeScript

This is the frontend for the Task Manager app. It is scaffolded with Vite,
written in TypeScript, and consumes types from `../shared/`.

---

## Setup

```bash
cd project/client
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom zustand
```

Recommended extras:

- `react-router-dom` — client-side routing
- `zustand` — small, typed state store
- `@tanstack/react-query` (optional) — drop-in cache + fetching layer if you
  prefer it to a hand-rolled `useApi` hook

---

## Path Alias for Shared Types

Add this to your `tsconfig.json` (or `tsconfig.app.json` for Vite):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
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
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL("../shared", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

Once aliased you can write:

```ts
import type { Task, ApiResponse } from "@shared/index";
```

---

## Suggested File Layout

```
src/
  types/
    props.types.ts    <- component prop types
    state.types.ts    <- store and state types
    index.ts          <- barrel
  hooks/
    useApi.ts         <- generic fetch hook
    useTasks.ts       <- task-specific hook
  stores/
    taskStore.ts      <- Zustand store
    authStore.ts
  components/
    TaskCard.tsx
    TaskList.tsx
    TaskForm.tsx
  pages/
    HomePage.tsx
    TasksPage.tsx
  api/
    client.ts         <- typed fetch wrapper
  App.tsx
  main.tsx
```

---

## Tiny Examples

### Typed component props

```tsx
import type { Task } from "@shared/index";

type TaskCardProps = {
  task: Task;
  onToggle: (id: number) => void;
};

export function TaskCard({ task, onToggle }: TaskCardProps) {
  return (
    <article onClick={() => onToggle(task.id)}>
      <h3>{task.title}</h3>
      <p>{task.status}</p>
    </article>
  );
}
```

### Generic API hook

```ts
import { useEffect, useState } from "react";
import type { ApiResponse } from "@shared/index";

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(url)
      .then((r) => r.json() as Promise<ApiResponse<T>>)
      .then((res) => {
        if (cancelled) return;
        if (res.success) setData(res.data);
        else setError(res.message);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, error, loading };
}
```

### Typed Zustand store

```ts
import { create } from "zustand";
import type { Task } from "@shared/index";

type TaskState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((s) => ({ tasks: [...s.tasks, task] })),
  removeTask: (id) => set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
}));
```

---

## Features to Build

Check `project/README.md` for the full feature checklist tied to each topic.

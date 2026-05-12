# Frontend Dojo: React + TypeScript

This is the frontend side of the Task Manager. You are the React ninja. Your
weapon is Vite, your shield is TypeScript, and your secret scrolls live in
`../shared/`.

---

## Set Up Your Gear

```bash
cd project/client
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom zustand
```

Optional extras:

- `@tanstack/react-query` if you want a ready-made fetching and cache layer
  instead of writing your own `useApi` hook

---

## Wire Up the Shared Scroll Path

Add this to `tsconfig.json` (or `tsconfig.app.json` if you are using Vite):

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

Vite also needs to know about the aliases. In `vite.config.ts`:

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

Now you can write:

```ts
import type { Task, ApiResponse } from "@shared/index";
```

---

## Suggested Layout

```
src/
  types/
    props.types.ts     <- component prop types
    state.types.ts     <- store and state types
    index.ts           <- barrel
  hooks/
    useApi.ts          <- generic fetch hook
    useTasks.ts        <- task-specific hook
  stores/
    taskStore.ts       <- Zustand store
    authStore.ts
  components/
    TaskCard.tsx
    TaskList.tsx
    TaskForm.tsx
  pages/
    HomePage.tsx
    TasksPage.tsx
  api/
    client.ts          <- typed fetch wrapper
  App.tsx
  main.tsx
```

---

## A Few Mini Katas

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

### A generic API hook

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

### A typed Zustand store

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

## What to Build Next

Check `project/README.md` for the full mission checklist tied to each scroll.
Train one move at a time. The dojo is patient.

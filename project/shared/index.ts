// Shared Types - used by both frontend and backend
//
// This file grows as you progress through the topics.
// Do not delete old types - update them as you learn more.
//
// Import from this file using the @shared path alias:
//   import type { Task, User } from "@shared/index"

// ----------------------------------------------------------------
// Enums (Topic 06)
// ----------------------------------------------------------------

export enum TaskStatus {
  Todo = "todo",
  InProgress = "in_progress",
  Done = "done",
}

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

// ----------------------------------------------------------------
// Base interfaces (Topic 03)
// ----------------------------------------------------------------

export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

// ----------------------------------------------------------------
// Core interfaces (Topics 02-03)
// ----------------------------------------------------------------

export interface Task extends BaseEntity {
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: Priority;
  isComplete: boolean;
  dueDate: string | null;
  assignedToUserId: number | null;
}

export interface User extends BaseEntity {
  username: string;
  email: string;
  role: UserRole;
}

// ----------------------------------------------------------------
// API response types (Topics 04, 09)
// ----------------------------------------------------------------

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  statusCode: number;
  message: string;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export function ok<T>(data: T): ApiSuccess<T> {
  return { success: true, data };
}

export function fail(statusCode: number, message: string): ApiError {
  return { success: false, statusCode, message };
}

export function isSuccess<T>(response: ApiResponse<T>): response is ApiSuccess<T> {
  return response.success === true;
}

// ----------------------------------------------------------------
// DTO types (Topics 10-11)
// ----------------------------------------------------------------

export type CreateTaskDto = Omit<Task, "id" | "createdAt" | "updatedAt" | "isComplete"> & {
  status?: TaskStatus;
};

export type UpdateTaskDto = Partial<CreateTaskDto>;

export type TaskSummary = Pick<Task, "id" | "title" | "status" | "priority" | "isComplete" | "dueDate">;

// ----------------------------------------------------------------
// Type guards (Topic 08)
// ----------------------------------------------------------------

export function isTask(value: unknown): value is Task {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "title" in value &&
    "status" in value
  );
}

// ----------------------------------------------------------------
// Branded types (Topic 14)
// ----------------------------------------------------------------

export type TaskId = number & { readonly _brand: "TaskId" };
export type UserId = number & { readonly _brand: "UserId" };

export function asTaskId(id: number): TaskId {
  return id as TaskId;
}

export function asUserId(id: number): UserId {
  return id as UserId;
}

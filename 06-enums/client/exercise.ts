// Topic 06 - Enums
// Frontend (React + TypeScript) Exercises

// ------------------------------------------------------------------
// Task 7 - Enum for filter state
// ------------------------------------------------------------------
// TODO: Create a string enum FilterOption:
//   All = "all"
//   Active = "todo"
//   InProgress = "in_progress"
//   Completed = "done"
//
// Write a function applyFilter(
//   tasks: { id: number; title: string; status: string }[],
//   filter: FilterOption
// ): { id: number; title: string; status: string }[]
//
// It should return all tasks if filter is FilterOption.All,
// otherwise return only tasks whose status matches the filter value.
//
// Test it with a fake array of 5 tasks with mixed statuses.

// Write your solution here:


// ------------------------------------------------------------------
// Task 8 - Modal state enum
// ------------------------------------------------------------------
// TODO: Create a string enum ModalState:
//   Closed = "closed"
//   CreateTask = "create"
//   EditTask = "edit"
//   DeleteTask = "delete"
//
// Declare a variable currentModal: ModalState = ModalState.Closed
//
// Write a function openModal(modal: ModalState): void
//   that sets currentModal = modal and logs "Modal opened: " + modal
//
// Write a function closeModal(): void
//   that sets currentModal = ModalState.Closed and logs "Modal closed"
//
// Call openModal(ModalState.CreateTask) then closeModal()

// Write your solution here:

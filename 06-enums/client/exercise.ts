// Scroll 06 - Enums
// Frontend dojo · React + TypeScript katas

// ------------------------------------------------------------------
// Kata 7 - Enum for filter state
// ------------------------------------------------------------------
// Your mission: Create a string enum FilterOption:
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

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 8 - Modal state enum
// ------------------------------------------------------------------
// Your mission: Create a string enum ModalState:
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

// Train your code here, ninja:

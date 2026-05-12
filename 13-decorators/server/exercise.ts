// Scroll 13 - Decorators
// Backend dojo · NestJS + Node katas
//
// Make sure your tsconfig.json has:
//   "experimentalDecorators": true
//   "emitDecoratorMetadata": true

// ------------------------------------------------------------------
// Kata 1 - Class decorator (singleton registry)
// ------------------------------------------------------------------
// Your mission: Write a decorator function Injectable(target: Function): void
// that logs "Registered: " + target.name when applied.
//
// Apply it to two stub classes: TasksService and UsersService.
// Log something after defining each class to confirm the decorator ran.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 2 - Method decorator for timing
// ------------------------------------------------------------------
// Your mission: Write a decorator @Measure that:
//   1. Before calling the method: record Date.now()
//   2. Calls the original method with the same arguments
//   3. After the call: records Date.now() again
//   4. Logs: `[Measure] methodName took Xms`
//   5. Returns the result
//
// Signature:
//   function Measure(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor
//
// Apply it to a method that does a slow loop (loop 1 million times doing nothing).
// Log the timing output.

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 3 - Decorator factory with role check
// ------------------------------------------------------------------
// Your mission: Write a decorator factory:
//   function RequireRole(role: string) {
//     return function(target: any, key: string, descriptor: PropertyDescriptor) { ... }
//   }
//
// The wrapped method should:
//   - Check (this as any).currentUserRole === role
//   - Throw new Error("Forbidden: requires role " + role) if it does not match
//   - Call the original method if it matches
//
// Apply it to a class TasksController with:
//   - property currentUserRole: string = "user"
//   - method @RequireRole("admin") deleteTask(id: number): void { log("Deleted " + id) }
//
// Test both: set currentUserRole to "admin" and call deleteTask (should work).
// Then set it to "user" and call deleteTask (should throw).

// Train your code here, ninja:


// ------------------------------------------------------------------
// Kata 5 - Mini NestJS-like route registry
// ------------------------------------------------------------------
// Your mission: Build a simple route registry using decorators.
//
// Step 1: Create a simple metadata store (just an object):
//   const routeRegistry: Record<string, { method: string; path: string; handlerName: string }[]> = {}
//
// Step 2: Write a decorator factory Controller(basePath: string):
//   - Stores basePath on the class using a symbol property
//
// Step 3: Write decorator factories Get(path = "") and Post(path = ""):
//   - Store the route info on the method using the registry
//
// Step 4: Write a function getRoutes(controller: Function): { method: string; path: string; handlerName: string }[]
//   - Reads from the registry and returns the routes
//
// Test it with a fake controller:
//   @Controller("tasks")
//   class TasksController {
//     @Get() findAll() {}
//     @Get(":id") findOne() {}
//     @Post() create() {}
//   }
//   console.log(getRoutes(TasksController));

// Train your code here, ninja:

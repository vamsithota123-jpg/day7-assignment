1. What is asynchronous programming?

Asynchronous programming allows tasks like API calls or timers to run without blocking the main thread. It helps JavaScript stay responsive while waiting for long operations. JS achieves this using callbacks, promises, and async/await.

How does JS handle async while being single-threaded?
JavaScript runs on a single thread but uses Web APIs and the event loop to offload async tasks. Once completed, callbacks are pushed back to the call stack via queues.

What is the event loop?
The event loop continuously checks if the call stack is empty and then pushes queued tasks for execution, enabling non-blocking behavior.

2. What are callbacks?

Callbacks are functions passed as arguments to be executed later, usually after an async task completes. They were the earliest way to handle async operations in JavaScript.

What is callback hell?
Callback hell is deeply nested callbacks that make code hard to read, debug, and maintain. It’s also called the pyramid of doom.

How do you handle errors in callbacks?
By following the error-first pattern (err, data) and checking for errors before processing results.

3. Explain the JavaScript event loop

The event loop manages execution by coordinating the call stack, Web APIs, and task queues. It ensures async callbacks run only when the stack is empty.

What are microtasks and macrotasks?
Microtasks (Promises, queueMicrotask) have higher priority, while macrotasks (setTimeout, setInterval) run later.

Execution order?
Synchronous code → Microtasks (Promises) → Macrotasks (setTimeout).

⚛️ React – useEffect & Hooks
1. When does useEffect run without dependencies?

Without a dependency array, useEffect runs after every render, including re-renders caused by state updates.

What if you omit dependency array?
It can cause unnecessary re-runs and performance issues.

How to prevent infinite loops?
Use a proper dependency array and avoid updating state unnecessarily inside the effect.

2. Mimic componentDidMount using useEffect

Use useEffect(() => { ... }, []).
The empty array ensures it runs only once after initial render.

When does cleanup run?
Cleanup runs when the component unmounts.

Does it run on every render?
No, it runs only once.

3. useEffect vs useLayoutEffect

useEffect runs after paint, while useLayoutEffect runs before paint.
useLayoutEffect blocks painting until it finishes.

When to prefer useLayoutEffect?
When measuring DOM layout or synchronously modifying styles.

Problems if misused?
It can cause performance issues and visual blocking.

4. How do stale closures cause bugs?

Stale closures occur when effects capture old state or props due to missing dependencies. This leads to outdated logic running.

How to fix?
Add correct dependencies or use functional state updates.

Role of useCallback?
useCallback memoizes functions so dependencies don’t change unnecessarily.

🚀 Express.js & Backend
1. What is Express.js?

Express.js is a lightweight Node.js framework for building APIs and web servers. It simplifies routing, middleware, and request handling.

Why over plain Node.js?
It reduces boilerplate and provides structure and scalability.

2. What is middleware in Express?

Middleware are functions that run between request and response. They can modify requests, responses, or end the cycle.

Middleware chain?
Middleware execute sequentially using next() until a response is sent.

3. Types of middleware

Application-level: applies to entire app

Router-level: applies to specific routes

Error-handling: handles errors using (err, req, res, next)

4. How does error handling work in Express?

Errors are passed using next(err). Error-handling middleware catches them and sends a proper response.

5. app.use() vs app.all()

app.use() handles all HTTP methods and is used for middleware.
app.all() handles all methods for a specific route.

6. Routing in Express

Routing maps HTTP requests to handlers using paths and methods.

Route parameters?
Defined using :id and accessed via req.params.

7. Route handlers vs middleware

Route handlers send responses. Middleware processes requests before reaching handlers.

8. File uploads in Express

Handled using middleware like multer. It parses multipart/form-data and stores files locally or in cloud storage.

9. What is morgan?

Morgan is an HTTP request logger middleware.

Logging strategies?
Use different log levels, store logs in files, and integrate with tools like Winston.

10. Structuring a large Express app

Use MVC structure: routes, controllers, services, models. Separate concerns and use environment-based configs.

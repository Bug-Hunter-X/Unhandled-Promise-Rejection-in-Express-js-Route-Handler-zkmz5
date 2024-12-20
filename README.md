# Unhandled Promise Rejection in Node.js Express.js Application

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  The `bug.js` file contains code that simulates an asynchronous operation that might throw an error. This error is not properly handled, leading to a crash.

The solution, in `bugSolution.js`, demonstrates how to use `try...catch` blocks and process.on('unhandledRejection') to gracefully handle errors and prevent crashes.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `node bug.js`.
3. Observe that the server crashes after a few seconds (due to unhandledRejection).

## How to Fix the Bug

Examine the `bugSolution.js` for the solution.  The key is proper error handling within the asynchronous operation and implementing a global unhandledRejection handler.
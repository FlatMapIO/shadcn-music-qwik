export function invariant(
  condition: any,
  // Can provide a string, or a function that returns a string for cases where
  // the message takes a fair amount of effort to compute
  message: string | (() => string),
): asserts condition {
  if (condition) {
    return
  }

  // When not in production we allow the message to pass through
  // *This block will be removed in production builds*

  const provided: string = typeof message === 'function' ? message() : message
  const prefix: string = 'Invariant failed'
  // Options:
  // 1. message provided: `${prefix}: ${provided}`
  // 2. message not provided: prefix
  const value: string = provided ? `${prefix}: ${provided}` : prefix
  throw new Error(value)
}

export function todo(message?: string): never {
  throw new Error(message ? `Not implemented: ${message}` : 'Not implemented')
}

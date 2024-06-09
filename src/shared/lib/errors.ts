export class ParsingError extends Error {
  constructor(
    public source: string,
    message = "ParsingError",
    cause?: unknown,
  ) {
    super(message, { cause });
  }
}

export class ValidationError extends Error {
  constructor(
    public errors: unknown[],
    message = "ValidationError",
    cause?: unknown,
  ) {
    super(message, { cause });
  }
}

export class ContextError extends Error {
  constructor(contextName: string, message = "Not wrapped in provider: ") {
    super(`${message} ${contextName}`);
  }
}

export class NotFoundError extends Error {
  constructor(message = "Not found") {
    super(message);
  }
}

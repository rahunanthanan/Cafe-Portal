export class ValidationError extends Error {
  constructor(
    public message: string,
    public errors: { [key: string]: string[] }
  ) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

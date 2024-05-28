export class RazorpayWindowClosedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RazorpayWindowClosedError";
  }
}

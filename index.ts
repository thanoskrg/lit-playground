import "lit";
import "@sentry/browser";

const mockData = {
  foo: "bar",
} as const;

export class MyLibrary {
  constructor() {}

  protected method() {
    return {
      ...mockData, // <- looks like this spread operator causes the issue
    };
  }
}

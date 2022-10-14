import { helloWorld } from "./app";

it("should return hello world string", () => {
  expect(helloWorld()).toBe("Hello World!");
});

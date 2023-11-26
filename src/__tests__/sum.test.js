import { sum } from "../utils/sum";

test("Sum function should calculate the sum of two numbers", () => {
  // Assertion
  expect(sum(3, 4)).toBe(7);
  expect(sum(3, 5)).toBe(8);
});

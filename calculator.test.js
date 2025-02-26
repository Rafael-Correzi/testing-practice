import { calculator } from "./calculator.js";

it('Add to 25', () => {
  expect(calculator.add(20, 5)).toBe(25);
});

it('Add to 25', () => {
  expect(calculator.subtract(20, 5)).toBe(15);
});
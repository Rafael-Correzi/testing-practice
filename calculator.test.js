import { calculator } from "./calculator.js";

it('Add to 25', () => {
  expect(calculator.add(20, 5)).toBe(25);
});
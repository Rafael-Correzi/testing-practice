import { calculator } from "./calculator.js";

it('Sum is 25', () => {
  expect(calculator.add(20, 5)).toBe(25);
});

it('Difference is 15', () => {
  expect(calculator.subtract(20, 5)).toBe(15);
});

it('Quotient is 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

it('Product is 100', () => {
  expect(calculator.multiply(20, 5)).toBe(100);
});
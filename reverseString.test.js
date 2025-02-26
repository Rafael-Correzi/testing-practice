import { reverseString } from "./reverseString.js";

it('Reverse a string', () => {
  expect(reverseString('Hello, world')).toBe('dlrow ,olleH');
});

it('Reverse a string', () => {
  expect(reverseString('2025')).toBe('5202');
});
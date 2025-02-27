import { caesarCipher } from "./caesarCipher.js";

it('Alphabetically shifts the letters in a string by 3', () => {
  expect(caesarCipher('axyz', 3)).toBe('dabc');
});

it('Alphabetically shifts the letters in a string by 10', () => {
  expect(caesarCipher('axyz', 10)).toBe('khij');
});


it('Does not shift numbers', () => {
  expect(caesarCipher('10', 10)).toBe('10');
});
 
it('Does not shift other characters', () => {
  expect(caesarCipher('2025,.; "!@#$%^&', 10)).toBe('2025,.; "!@#$%^&');
});

it('Deals with letters mixed with other characters', () => {
  expect(caesarCipher('abc 2025,.;"!@#$%^&', 3)).toBe('def 2025,.;"!@#$%^&');
});
import { capitalize } from "./capitalize.js";

it('String is capitalized', () => {
  expect(capitalize("hello, world")).toBe("HELLO, WORLD"); 
}); 


it('String is capitalized', () => {
  expect(capitalize("how are you doing?")).toBe("HOW ARE YOU DOING?");
});

it('Other characters are not changed', () => {
  expect(capitalize("2025,.;'!@#$%^&")).toBe("2025,.;'!@#$%^&");
});
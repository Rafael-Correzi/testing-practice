import { analyzeArray } from "./analyzeArray";

it('Return average', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
})

it('Return min', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(0);
})
import { capitalize } from './capitalize.js';

test('works with 1 word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('works with multiple words', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('works with 1 letter', () => {
  expect(capitalize('h')).toBe('H');
});

test('"TEST" should become "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

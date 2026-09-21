import { caesarCipher } from './caesarCipher.js';

test('wrapping from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('works with case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation, spaces, and other non-alphabetical characters should remain unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

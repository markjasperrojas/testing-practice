import { reverseString } from './reverseString.js';

test('reverse single string', () => {
  expect(reverseString('Angel')).toBe('legnA');
});

test('string with space', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('string with numbers and punctuation', () => {
  expect(reverseString('!123 yow')).toBe('woy 321!');
});

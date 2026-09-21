import { sum, subtract, multiply, divide } from './calculator.js';

describe('addition', () => {
  test('adds two numbers', () => {
    expect(sum(7, 5)).toBe(12);
  });

  test('works with negative numbers', () => {
    expect(sum(2, -3)).toBe(-1);
  });
});

describe('subtraction', () => {
  test('subtracts numbers', () => {
    expect(subtract(7, 5)).toBe(2);
  });

  test('works with negative numbers', () => {
    expect(subtract(-2, -3)).toBe(1);
  });
});

describe('multiplication', () => {
  test('multiplies two numbers', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('works with negative numbers', () => {
    expect(multiply(-3, -3)).toBe(9);
  });
});

describe('division', () => {
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('works with negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('returns an error when dividing by zero', () => {
    expect(() => divide(7, 0)).toThrow('Cannot divide by zero');
  });
});

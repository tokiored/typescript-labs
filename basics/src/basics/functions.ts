/**
 *
 * functions
 *
 *
 * with explicit return type
 *
 */
const add = (a: number, b: number): number => a + b
const resOne = add(1, 2)
/**
 *
 * function with inferred return type
 *
 */
const subtract = (a: number, b: number) => a - b
const resTwo = subtract(2, 1)

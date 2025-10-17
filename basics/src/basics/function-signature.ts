/**
 *
 * function signature
 *
 */
type Calculate = (a: number, b: number) => number

const add = (first: number, second: number): number => first + second
const multiple = (x: number, y: number): number => x * y
const squareRoot = (a: number): number => a ^ 2
const join = (one: number, two: number): string => `${one}${two}`
const collection = (a: number, b: number, c: number): object => [a, b, c]

const calcs: Calculate[] = []

calcs.push(add)
calcs.push(multiple)
calcs.push(squareRoot)
calcs.push(join)
calcs.push(collection)

/**
 *
 * function signature in interface
 *
 */
interface Area {
    name: string
    calcArea: (a: number) => number
    // calcArea(a: number): number
}
const square: Area = {
    name: 'squre',
    calcArea: (l: number) => l * l,
}
const circle: Area = {
    name: 'circle',
    calcArea: (r: number) => (Math.PI * r) ^ 2,
}

console.log(square.calcArea(2))
console.log(circle.calcArea(10))

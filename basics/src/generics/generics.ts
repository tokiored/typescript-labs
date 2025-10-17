/**
 *
 * generics
 *
 */
function logAndReturnNumber(value: number): number {
    console.log(value)
    return value
}
function logAndReturnBoolean(value: boolean): boolean {
    console.log(value)
    return value
}
function logAndReturnValue<T>(value: T): T {
    console.log(value)
    return value
}
const myNumber = logAndReturnNumber(22)
const myBoolean = logAndReturnBoolean(true)

const genericNumber = logAndReturnValue<number>(22)
const genericString = logAndReturnValue<string>('miles')
const errExample = logAndReturnValue<number>('22')

/**
 *
 * generic interface
 *
 */
interface Collection<T> {
    title: string
    data: T[]
}
const numbers: Collection<number> = { title: 'numbers', data: [1, 2, 3] }
const strings: Collection<string> = {
    title: 'strings',
    data: ['one', 'two', 'three'],
}

function randomItemInCollection<T>(collection: Collection<T>): T {
    const i = Math.floor(Math.random() * collection.data.length)
    return collection.data[i]! // ✅ Force tell TS: “trust me, not undefined”
}
const randomNumber = randomItemInCollection<number>(numbers)
const randomString = randomItemInCollection(strings)
console.log(randomNumber, randomString)

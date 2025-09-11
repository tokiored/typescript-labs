/**
 * Generics & Enums & Tuples
 * Some simple exmples and there use...
 */
enum Auth {
    Anon = 1,
    User = 2,
    Admin = 3,
}
enum ResourceType {
    Music,
    Film,
    Litrature,
}
interface Resource<T> {
    name: string
    type: ResourceType
    role: Auth
    data: T
}
const artist: Resource<object> = {
    name: 'Paul Simon',
    type: ResourceType.Music,
    role: Auth.User,
    data: { id: 1 },
}
const generic = <T extends { name: string }>(param: T) => {
    const uid = Math.floor(Math.random() * 100)
    return { ...param, uid }
}
const nums: [number, number, number] = [1, 2, 3]
const tuples = (one: number, two: number, three: number) =>
    `First: ${one}, Second: ${two} & Third: ${three}`

console.log('generics in interface', artist)
console.log(
    'generics extends in function',
    generic({
        firstname: 'Paul',
        lastname: 'Simon',
        name: 'Paul Simon',
    })
)
console.log('tuples', tuples(...nums))

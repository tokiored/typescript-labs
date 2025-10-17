/**
 *
 * generic constraints
 *
 */
interface HasId {
    id: number
}
class Collection<T extends HasId> {
    constructor(private data: T[]) {}

    add(val: T): void {
        this.data.push(val)
    }
    getRadom(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]!
    }
    getAll(): T[] {
        return this.data
    }
    delete(id: number): void {
        this.data = this.data.filter((item) => item.id !== id)
    }
}

interface User {
    name: string
    likes: number
    id: number
}
const users: User[] = [
    { id: 1, name: 'dizzy', likes: 10 },
    { id: 2, name: 'miles', likes: 15 },
    { id: 3, name: 'charlie', likes: 20 },
]

const collection = new Collection<User>(users)

collection.add({ id: 4, name: 'john', likes: 30 })
const randomUser = collection.getRadom()

collection.delete(2)
const getUsers = collection.getAll()

console.log(randomUser)
console.log(getUsers)

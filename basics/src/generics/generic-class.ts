/**
 *
 * generic class
 *
 */
class Collection<T> {
    constructor(private data: T[]) {}

    add(val: T) {
        this.data.push(val)
    }
    getOne() {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    getAll() {
        return this.data
    }
}

interface User {
    name: string
    likes: number
}
const users: User[] = [
    { name: 'dizzy', likes: 10 },
    { name: 'miles', likes: 15 },
    { name: 'charlie', likes: 20 },
]

const collection = new Collection<User>(users)
collection.add({ name: 'john', likes: 30 })

const randomUser = collection.getOne()
const getUsers = collection.getAll()

console.log(randomUser)
console.log(getUsers)

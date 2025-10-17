/**
 *
 * extrending interfaces
 *
 */
interface Person {
    firstname: string
    lastname: string
}
interface Student extends Person {
    id: number | string
    course: string
}

const miles: Person = {
    firstname: 'Miles',
    lastname: 'Davis',
}
const john: Student = {
    firstname: 'John',
    lastname: 'Coltrain',
    id: 1,
    course: 'Saxaphone',
}

const isPerson = (item: Person) => {
    console.log(`${item.firstname} is eligible`)
}
const isStudent = (item: Student) => {
    console.log(`${item.firstname} has been enrolled`)
}

isPerson(john)
isPerson(miles)

isStudent(john)
isStudent(miles)

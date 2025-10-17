/**
 *
 * extrending types alias
 *
 */
type Person = {
    id: number
    firstname: string
    lastname: string
}
type Student = Person & {
    course_id: number | string
    course_title: string
}

const miles: Person = {
    id: 1,
    firstname: 'Miles',
    lastname: 'Davis',
}
const john: Student = {
    id: 2,
    firstname: 'John',
    lastname: 'Coltrain',
    course_id: 'SX101',
    course_title: 'Saxaphone',
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

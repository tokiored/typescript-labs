/**
 *
 * object litereals
 *
 */
const userOne: { firstname: string; lastname: string; id: number } = {
    firstname: 'Miles',
    lastname: 'Davis',
    id: 1,
}
userOne.firstname = 'Dizzy'
userOne.lastname = 'Gillespie'
userOne.id = 2
/**
 *
 * type inference with object literals
 *
 */
const userTwo = {
    firstname: 'John',
    lastname: 'Coltrain',
    id: 34,
}
userTwo.firstname = 'Charlie'
userTwo.lastname = 'Parker'
userTwo.id = 3

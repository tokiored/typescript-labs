/**
 *
 * tagged interfaces
 *
 */
interface User {
    firstname: string
    lastname: string
    type: 'user'
}
interface Profile {
    username: string
    email: string
    type: 'profile'
}
const log = (input: User | Profile) => {
    if (input.type === 'user')
        return `Hello ${input.firstname} ${input.lastname}`

    if (input.type === 'profile')
        return `Your username is ${input.username} with email ${input.email}`
}

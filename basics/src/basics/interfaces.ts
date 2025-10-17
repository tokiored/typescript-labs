/**
 *
 * Interface
 *
 */
interface Artist {
    firstname: string
    lastname: string
    tags: string[]
}

const onTrumpet: Artist = { firstname: 'Miles', lastname: 'Davis', tags: [] }
const onSax = {
    firstname: 'Parker',
    lastname: 'Parker',
    tags: [],
}
const addMember = (member: Artist): string =>
    `${member.firstname} added to your band`

addMember(onTrumpet)
addMember(onSax)

const band: Artist[] = []
band.push(onTrumpet)

/**
 *
 * intersection types
 *
 */
interface HasId {
    id: number
}
interface Post {
    title: string
    likes: number
}
function addIdToValue<T>(value: T): T & HasId {
    const id = Math.random()
    return { ...value, id }
}
const post = addIdToValue<Post>({ title: 'kinda blue', likes: 50 })
console.log(post.id, post.title, post.likes)

import Post from './Components/Post'

const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/1/posts'
    )
    if (!res.ok) {
        console.log('Fecth has failed to load posts')
    }

    return res.json()
}

export default async function Home() {
    const posts = await getPosts()
    return (
        <main>
            <h2>Home</h2>
            {posts.map((post: Post) => (
                <Post
                    key={post.id}
                    post={{ id: post.id, title: post.title, body: post.body }}
                ></Post>
            ))}
        </main>
    )
}

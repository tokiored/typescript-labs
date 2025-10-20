interface PostCardProps {
    post: Post
}
export default function Post({ post }: PostCardProps) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

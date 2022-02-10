import { Link } from "react-router-dom"
const PostsList = (props) => {
    return (
        <ul>
            {props.posts.map(post => {
                return (
                    <li key={post.id}>
                        <strong style={{ color: "#BD1E51" }}>Post id:#{post.id}</strong>
                        <Link to={{
                            pathname: `/post/${post.id}`,
                            details: { ...post }
                        }}>
                            <h4 style={{ color: "black" }}>{post.title}</h4>
                        </Link>
                        <hr />
                    </li>)
            })}
        </ul>
    )
}
export default PostsList
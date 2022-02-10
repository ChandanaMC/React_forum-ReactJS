import Comment from "../components/Comment"
import NotFound from "../NotFound"

const Post = ({ postId, comments }) => {
    if (postId.id < 100) {
        // console.log("C", comments)
        return (
            <>
                <div className="Post-details">
                    <h2>Title: #{postId.id}</h2>{postId.title}
                    <h2>Body:</h2>{postId.body}
                </div>
                <div>
                    {comments.map((comment, i) => {
                        return (
                            <Comment key={i} {...comment}{...postId} />
                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <NotFound />
        )
    }
}
export default Post;
import style from "./Comment.module.css"
const Comment = ({ body, name, email }) => {
    return (
        <div className={style.content}>
            <h2 className={style.heading}>Comment:</h2><p>{body}</p>
            <h2 className={style.heading}>Name:</h2><p>{name}</p>
            <h2 className={style.heading}>Email:</h2><p>{email}</p>
        </div>
    )
}
export default Comment;
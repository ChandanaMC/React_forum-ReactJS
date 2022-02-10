import PostsList from "../components/PostsList"

const Homepage = (props) => {
  return (
    <div className="Homepage">
      <h1>React Forum</h1>
      <h2>Click the link below for further details of the post</h2>
      {/* Send posts to PostsList via props */}
      <PostsList posts={props.posts} />
    </div>
  );
};
export default Homepage;
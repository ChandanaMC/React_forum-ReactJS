import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Post from "../components/Post";

const Detailspage = (props) => {
  // console.log("location", props.location);
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    // Fetch all comments for a post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  useEffect(() => {
    // Fetch individual post wrt id if props.location property doesnt fetch it
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPostId(json));
  }, []);

  return (
    <div className="Detailspage">
      {/* //Send postId to Comments which is either from location.details or fetched post */}
      <Post comments={comments} postId={props.location.details || postId} />
      <Link to="/"><button>Back to homepage</button></Link>
    </div>
  );
};

export default Detailspage;
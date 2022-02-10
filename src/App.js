import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Detailspage from './pages/Detailspage';
import NotFound from "./NotFound";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    };
    //Initiate
    fetchData();
  }, []);

  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* Send posts as props to homepage */}
          <Route
            exact
            path="/"
            render={(props) => <Homepage posts={posts} {...props} />}
          />
          <Route exact path="/post/:id" render={(props) => <Detailspage {...props} />} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

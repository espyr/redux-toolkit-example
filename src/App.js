import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { addComment } from "./redux/commentSlice";
import { Header } from "./components/Header";
import { Info } from "./components/Info";

import { Comments } from "./components/Comments";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) =>
        data.slice(0, 5).map((comment) => {
          dispatch(addComment(comment));
        })
      )
      .catch((err) => console.log(err));
    console.log("i fire once");
  }, []);

  return (
    <div className="App">
      <Header />
      <Info />
      <Comments />
      <Todos />
    </div>
  );
}

export default App;

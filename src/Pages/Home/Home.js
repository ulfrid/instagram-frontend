import React, { useEffect, useState } from "react";
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/posts/";

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response;
        console.log("loaded response:", response);
        setPostList(data);
      })
      .catch((error) => {
        // error.response
      });
    console.log("mounted");
  }, []);

  return (
    <div>
      <h2>PostList</h2>
      {postList.map((post) => (
        <div>{JSON.stringify(post)}</div>
      ))}
    </div>
  );
}

export default Home;

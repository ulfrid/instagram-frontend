import React, { useEffect } from "react";
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/posts/";

function Home() {
  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        console.log("loaded response:", response);
      })
      .catch((error) => {
        // error.response
      });
    console.log("mounted");
  }, []);

  return (
    <div>
      <h1>PostList</h1>
    </div>
  );
}

export default Home;

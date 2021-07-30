import axios from "axios";

async function getAllPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const result = await axios.get(url);
  console.log(result.data);
}

getAllPosts();
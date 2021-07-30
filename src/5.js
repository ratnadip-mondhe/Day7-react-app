import axios from "axios";

async function createNewPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const data = { title: "foo", body: "bar", userId: 1 };
  const response = await axios.post(url, data);
  console.log(response);
}

createNewPost();
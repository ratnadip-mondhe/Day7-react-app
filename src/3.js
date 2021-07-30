import axios from "axios";

async function getAllTheUser() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const result = await axios.get(url);
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
}

getAllTheUser();
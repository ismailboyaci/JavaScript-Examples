import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
async function getData(id) {
    try {
        const user = await axios.get(BASE_URL+'users/'+id);
        const post = await axios.get(BASE_URL+'posts/'+id);
        const userData = {...user.data, posts: post.data};
        return userData
    } catch (error) {
        console.log("Something went wrong. " + error)
    }
}

export {getData};
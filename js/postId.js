import { fetchPost } from "./post.js";
import { url } from "./post.js";


 async function createId(){
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);
    
    const id = params.get("id");
    return id;     
}


const id = await createId();
const specificUrl = url + "/" + id + "?acf_format=standard";

export const specificPost = await fetchPost(specificUrl); 
//axiostest.js
const axios = require("axios");

const url = 'https://jsonplaceholder.typicode.com/todos';
//todoGet();
// todoPost();
// todoPut();
todoDel();

function todoDel(){
    axios.delete(url + "/1").then(res => console.log(res.data));
}

function todoPut(){
    const param = { title: 'around the world? around the world! 3 2 1 go!!!! '}
    axios.put(url + "/1", param).then(res => console.log(res.data));
}

function todoPost(){
    const param = { userId: 1, title: 'around the world? 3 2 1 go! ', completed: false }
    axios.post(url, param).then(res => console.log(res.data));
}
function todoGet(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
        res => console.log(res.data)
    )
}



function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => getUser(data))


    function getUser(data){
        for(user of data){
            console.log(user.username);
            console.log(user.email);
        }
    }
}
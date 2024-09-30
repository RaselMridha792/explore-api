function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => getUser(data))
        

    function getUser(data){
        const ul = document.getElementById('user-list')
        for(user of data){
            const li = document.createElement('li');
            li.innerText = `${user.name} is your new user and his email is: ${user.email}`;
            ul.appendChild(li);
        }
    }
}
function getUserName(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Request => Request.json())
        .then(data => getData(data))
    function getData(data){
        for(user of data){
            const ul = document.getElementById('user-name');
            const li = document.createElement('li');
            li.innerText = user.name;
            ul.appendChild(li);
        }
    }
}

function getUserEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Request => Request.json())
        .then(data => getData(data))
        function getData(data){
            for(user of data){
                const ul = document.getElementById('user-emails');
                const li = document.createElement('li');
                li.innerText = user.email;
                ul.appendChild(li);
            }
        }
}
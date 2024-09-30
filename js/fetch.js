// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData() {

      fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(Response => Response.json())
            .then(json => console.log(displayUser(json)))
}

function displayUser(json){
      const getUserData = json;
      console.log(getUserData);

}
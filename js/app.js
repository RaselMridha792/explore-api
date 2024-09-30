function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(req => req.json())
        .then(data => console.log(data))
}
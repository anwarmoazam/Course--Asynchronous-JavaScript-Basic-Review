console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 10');

console.log('Async & Await');

const getToDos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);
getToDos()
.then(data=> console.log('Resolved : ',data))
console.log(3);
console.log(4);
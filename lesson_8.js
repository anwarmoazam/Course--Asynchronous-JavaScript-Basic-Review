console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 8');

console.log('Promise Chaining');

const getTodos = (resource) => {
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('Error getting resource');
            }
        })
        request.open('GET',resource);
        request.send();
    })
};

console.log(1);
console.log(2);

getTodos('todos/luigi.json').then(data => {
    console.log('Promise 1 resolved : ',data);
    return getTodos('todos/mario.json').then(data => {
        console.log('Promise 2 resolved : ',data)
        return getTodos('todos/shaun.json').then(data => {
            console.log('Promise 3 resolved : ',data);
        })
    })
}).catch(err => {
    console.log('Promise rejected : ',err);
})

console.log(3);
console.log(4);
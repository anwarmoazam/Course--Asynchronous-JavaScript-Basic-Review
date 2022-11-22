console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 10');

console.log('Async & Await');

fetch('todos/luigi.json').then((response)=>{
    console.log('Resolved : ',response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log('Rejected : ',err);
})

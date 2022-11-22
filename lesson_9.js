console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 9');

console.log('Fetch API');

fetch('todos/luigi.json').then((response)=>{
    console.log('Resolved : ',response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log('Rejected : ',err);
})

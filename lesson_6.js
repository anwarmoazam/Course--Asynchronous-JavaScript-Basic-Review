console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 6');

console.log('HTTP Request');

const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(data,undefined);
        } else if(request.readyState === 4){
            callback(undefined,'could not fetch data');
        }
    })
    
    request.open('GET',resource);
    request.send();
};

console.log(1);
console.log(2);

getTodos('todos/luigi.json',(data,error)=>{
    console.log(data);
    getTodos('todos/mario.json',(data,error)=>{
        console.log(data);
        getTodos('todos/shaun.json',(data,err)=>{
            console.log(data);
        })
    });
});

console.log(3);
console.log(4);
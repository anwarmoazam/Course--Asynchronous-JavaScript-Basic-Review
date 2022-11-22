console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 2');

console.log('HTTP Request');

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

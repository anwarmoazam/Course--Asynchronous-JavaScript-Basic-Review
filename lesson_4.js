console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 4');

console.log('HTTP Request');

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            callback(request.responseText,undefined);
        } else if(request.readyState === 4){
            callback(undefined,'could not fetch data');
        }
    })
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

console.log(1);
console.log(2);

getTodos((data,error)=>{
    console.log('Callback fired');
    if(error){
        console.log(error);
    } else{
        console.log(data);
    }
});

console.log(3);
console.log(4);
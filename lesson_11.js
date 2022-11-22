console.log('Course--Asynchronous-JavaScript-Basic-Review, Lesson 11');

console.log('Error Handling');

const getToDos = async () => {

    const response = await fetch('todos/luigi.json');
    if(response.status !== 200){
        throw new Error('Cannot fetch the data')
    }
    const data = await response.json();
    return data;
}

getToDos()
.then(data=> console.log('Resolved : ',data))
.catch(err => console.log('Rejected : ',err.message));
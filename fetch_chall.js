//1.)
// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

//2.) method POST
// I have this comment in a javascript object format.

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify ({ 
    name: "Maria Estrella",
    email: "mariaestrella@gmail.com",
    body: "Im Maria and I'm trying to make a new comment"
  })
})
  .then( (response) => response.json())
  .then( (data) => console.log(data))
  .catch( (error) => console.log(error));

 

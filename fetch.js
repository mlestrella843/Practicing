//Uso de fetch sin especificar metodo, utlizara el metodo GET por default.
// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))


// Post Method to add a new comment
const newComment = {
    postId: 1,
    name: 'New Comment',
    email: 'new@example.com',
    body: 'This is the content of the new comment'
  };
  
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST', // Define that it's a POST request
    headers: {
      'Content-Type': 'application/json', // Specify that we're sending data in JSON format
    },
    body: JSON.stringify(newComment) // Convert the object to JSON to send it
  })
    .then(response => response.json()) // Convert the response to a JavaScript object
    .then(data => console.log('Server response:', data)) // Log the server's response
    .catch(error => console.error('Error:', error)); // Log any error that occurs   
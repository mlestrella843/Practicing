const apiUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(apiUrl)
// .then( (response) => response.json())
// .then( (data) => console.log(data))
// .catch((error) => console.log(error));


async function getJoke() {
    const response =  await fetch(apiUrl);
    const data = await response.json();

    // console.log(data);
    console.log(data.value);
}
getJoke()

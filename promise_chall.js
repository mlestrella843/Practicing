const getDataUser = () => { 
    return new Promise( ( resolve, reject) => {
        setTimeout( () => {
            const error = false;

            if(error){
                reject("Sorry, data not found");
            }else{
                resolve({
                    firstName: 'Maria',
                    age: 51,
                    email: 'mrestrella4@gmail.com'
                });
            }

        },3000)
    })
}

getDataUser()
.then((data) => console.log(data))
.catch((error) => console.log(error));

